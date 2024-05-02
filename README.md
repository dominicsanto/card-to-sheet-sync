# 💳 📊 Card-To-Sheet-Sync

A script that executes a request to an external service which updates a Google Sheet based on details for a specific card transaction.

## ℹ️ Background

I wanted to create a service for my business that sends alerts to a dedicated Slack channel of card transactions over R1 000 for a member of the admin team to be able to monitor expenses.

![Example](/docs/snippet.png)

![MakeScenario](/docs/make-scenario.png)

## ☑️ Requirements

- Create a Make account [Make.com](https://www.make.com/)
- Access to the [Investec Programmable Banking API](https://developer.investec.com/za/api-products)

## 🚀 Getting Started

- The function inside the `main.js` file is used to replace the `afterTransaction` function from within the Programmable Cards IDE on Investec Online
- You may setup any external service (I have used Make to create a scenario to accept a Webhook and update a google sheet) and you can replace `webhook` details in the `env.json` file

## 📄 License

This project is MIT licensed.