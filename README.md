This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup

```bash
npm install
npm run dev
```

I think the project should run as is because the database is local, but if you run into trouble you might want to remigrate/reseed the database.

```bash
npx prisma migrate dev --name init
npx prisma db seed
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

I tried my best to follow the examples given in the assessment specifications. However I noticed that in certain edge cases the ChatGPT API would provide a response in an undesired format, and for that reason I decided to provide the response text in addition to the tabled-format

API Routes are handled in the `pages/api` directory, specifically in the `getJets.ts` and `askChatGPT.ts` files.