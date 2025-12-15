# Deployment Guide - Vercel

## Project Structure

- **React Frontend** (root) - Vite + React app
- **Next.js Backend** (`vercel_server/`) - API backend
- **Local Backend** (`server/`) - Not deployed (local development only)

## Deploy to Vercel (Single Project)

Your project is configured as a monorepo - both frontend and backend deploy together.

### Steps

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel will auto-detect the configuration from `vercel.json`
4. Add environment variable:
   - `MONGO_URI` = `mongodb+srv://username:password@cluster.mongodb.net/database_name`
5. Deploy

### How It Works

- Frontend builds to `dist/` and serves at root (`/`)
- Backend API routes are available at `/api/*`
- The `vercel.json` rewrites `/api/*` requests to `vercel_server/app/api/*`
- Everything runs on the same domain (no CORS issues)
- Your React app uses `/api` as the API base URL (already configured)

### Environment Variables

In Vercel dashboard, add:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name
```

## Local Development

Continue using the `server/` folder for local backend development with a `.env` file containing `MONGO_URI`.
