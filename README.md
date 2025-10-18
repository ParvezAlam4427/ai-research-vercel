
# AI Research Assistant - Vercel-ready (React + Serverless API)

## Structure
- `/client` - Vite + React + TypeScript frontend
- `/api` - Vercel serverless endpoints (signup, login, suggest-topics, generate-research)

## Deploying to Vercel
1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Vercel will run the `vercel-build` script (install/build client) and treat `/api/*.js` as serverless functions.

## Local testing
- To run frontend locally: `cd client && npm install && npm run dev`
- API functions are designed for Vercel serverless environment; for local testing you can use `vercel dev` or adapt them to an Express server.

