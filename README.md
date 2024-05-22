
<div align="center">
  <img src="./public/ethereum-icon.png" width="40" />
  <h1>Ethereum explorer</h1>
</div>

<br/>
<div align="center">
  <h3>Easy-to-use explorer for viewing balances and transactions 🔍</h3>
</div>

<br/>
<br/>

## Introduction

<img src="./misc/readme/ethereum-explorer-demo.gif"  />

This project is an easy-to-use Ethereum explorer application designed to help users search and view detailed information about an address.

The primary purpose of this app is to provide a simple interface for users to:
-   Search for Ethereum addresses.
-   View balances, token holdings, and NFTs.
-   Access transaction history with comprehensive details.
- Switch to dark/light/system theme


## Tech stack

This application is built using **TypeScript**, **React**, **Next.js (App Router)**, **Tailwind CSS**, **shadcn** and the [Chainbase API](https://chainbase.com/).

The main motivation behind choosing this tech stack was to experiment with the app router and server components in Next.js. Tailwind CSS and ShadCN were selected for their ease of use and ability to quickly create good looking and responsive UI. And Chainbase because the API is the best fit to quickly implement the decided features.

## Installation

1. Clone the repository:
```bash
 git clone https://github.com/AntoineValente/ethereum-explorer
```

2. Install dependencies:
```bash
npm run dev
# or
yarn dev
```

## Usage

1. In order to use the Chainbase API, create the file `.env.local` at the root of the project and add these environment variables:
```
CHAINBASE_API_KEY=
CHAINBASE_API_URL=
```

> NOTE: Go to https://console.chainbase.com/ to create an account and get the keys

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
