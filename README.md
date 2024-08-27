**Overview**
Welcome to the Wallet App project! This application is a modern digital wallet, inspired by popular apps like Paytm, designed to provide users with a seamless experience for managing their finances. Whether you're transferring money, paying bills, or shopping online, this app has you covered.

***Features***
  User Authentication: Secure user login and registration.

  Money Transfers: Easy and quick money transfers between users.
  
  Bill Payments: Pay utility bills, mobile recharges, and more.
  
  Transaction History: Track your spending with a detailed transaction history.

   Account Management: Manage your profile, linked bank accounts, and settings.
 
**Tech Stack**
Frontend & Backend: Next.js
Next.js: Used for both frontend and backend, leveraging its full-stack capabilities for server-side rendering (SSR), API routes, and dynamic routing.
React: The frontend UI is built using React components within the Next.js framework, ensuring a responsive and interactive user experience.
Database: PostgreSQL
PostgreSQL: A powerful, open-source relational database that handles the storage and retrieval of user data, transactions, and other essential information with high efficiency and security.
Project Structure: Monorepo
Monorepo: The project is organized using a monorepo structure, which allows for the management of both frontend and backend codebases within a single repository. This approach simplifies dependency management, testing, and deployment



- Clone the repo

```jsx
git clone https://github.com/Pratham6392/QuickPay.git 
```

- npm install
- 
- Run postgres either locally or on the cloud (neon.tech)



- Copy over all .env.example files to .env
- Update .env files everywhere with the right db url
- Go to `packages/db`
    - npx prisma migrate dev
    - npx prisma db seed
- Go to `apps/user-app` , run `npm run dev`
- Try logging in using phone - 1111111111 , password - alice (See `seed.ts`)
