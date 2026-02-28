# AgentFlow Frontend

Next.js 14 + RainbowKit frontend for AgentFlow. Deploy to Vercel.

## Deploy to Vercel

1. Push this repo to GitHub.
2. [vercel.com](https://vercel.com) → New Project → Import this repo.
3. Add environment variable: `NEXT_PUBLIC_BACKEND_URL` = your Railway backend URL (e.g. `https://your-app.railway.app`).
4. Deploy.

## Local dev

```bash
npm install
cp .env.local.example .env.local
# Edit .env.local: NEXT_PUBLIC_BACKEND_URL=http://localhost:4000
npm run dev
```

Open http://localhost:3005. Connect wallet (Arc Testnet) and use Run AgentFlow.
