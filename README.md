# JWT Dashboard

A full-stack authentication starter built with **Express.js** and **React**, featuring JWT-based login, protected routes, and a user dashboard.

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm v8+

### Install all dependencies from the root

```bash
npm install
```

### Run both servers simultaneously

```bash
npm run dev
```

| Service  | URL                   |
|----------|-----------------------|
| Backend  | http://localhost:4000 |
| Frontend | http://localhost:5173 |

### Run individually

```bash
npm run dev:backend
npm run dev:frontend
```

### Build for production

```bash
npm run build
```

---

## Project Structure

```
jwt-dashboard/
├── express-backend/     # REST API
├── react-frontend/      # React app
└── package.json         # Root monorepo config
```

---

## Backend

Built with **Express.js** and **TypeScript**.

### Database

The backend uses **[lowdb](https://github.com/typicode/lowdb)** — a lightweight JSON-based database that stores data in a local `db.json` file. It requires zero configuration and is ideal for prototyping and development.

> ⚠️ Data persists to `db.json` on disk but will reset if the file is deleted. For production, replace lowdb with a real database such as PostgreSQL (via Prisma) or MongoDB.

### Environment Variables

Create a `.env` file inside `express-backend/`:

```env
PORT=4000
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d
```

---

## Frontend

Built with **React** and **TypeScript**, powered by **Vite**.

---
