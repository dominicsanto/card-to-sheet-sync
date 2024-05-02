const formatCurrency = (value, currencySymbol) => {
  const formatter = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: currencySymbol,
  });

  return formatter.format(value);
}

const formatDate = (dateString) => {
  let dateObject = new Date(dateString);
  const dateOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  };

  return dateObject.toLocaleDateString('en-ZA', dateOptions);
}

const afterTransaction = async (transaction) => {
  let merchantName = transaction.merchant.name;
  let date         = formatDate(transaction.dateTime);
  let currency     = transaction.currencyCode;
  let value        = transaction.centsAmount / 100;

  try {
    await fetch(process.env.webhook, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "date": date,
        "merchant": merchantName,
        "value": formatCurrency(value, currency)
      })
    })
  } catch (e) {
    console.log('error', e);
  }
};

const beforeTransaction = async (transaction) => {
  console.log(transaction);
};

const afterDecline = async (transaction) => {
  console.log(transaction);
};
