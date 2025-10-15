# 🌐 Portfolio (Next.js + TypeScript + Prisma + PostgreSQL)

A modern full-stack **Portfolio** application where you can manage blogs, projects, and skills dynamically with an elegant UI.  
Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Prisma ORM** connected to a **PostgreSQL** database hosted on **Neon**.

---

## 🚀 Live Demo

🔗 **Live Deployment:** https://fakhruddin-ahmed-portfolio.vercel.app  
🔗 **Backend API:** https://portfolio-backend-green-one.vercel.app

---

## 🧾 Overview

This project allows you to showcase and manage your personal portfolio with dynamic CRUD functionality for:
- 📰 **Blogs** – Write, edit, and manage articles.
- 💼 **Projects** – Display your development projects with live demos & GitHub links.
- ⚙️ **Skills** – Add and categorize your tech stack visually.
- 🔐 **Authentication** – Secure login and authorization (Admin only for management).
- 🌈 **Responsive UI** – Fully optimized for desktop and mobile devices.

---

## 🧰 Technology Stack

### Frontend
- **Next.js 15 (App Router)**
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Sonner** (for toast notifications)
- **Lucide React** (icons)
- **ShadCN/UI** (modern UI components)

### Backend
- **Express.js**
- **Prisma ORM**
- **PostgreSQL** (hosted on Neon)
- **JWT Authentication**
- **Vercel Serverless Deployment**

---

## ✨ Features

| Feature | Description |
|----------|-------------|
| 🧠 Server-side rendering | Faster performance & SEO optimized using Next.js 15 |
| 🗄️ Prisma ORM | Smooth database interaction with PostgreSQL |
| 🪄 Admin Dashboard | Manage your blogs, skills, and projects dynamically |
| 🧩 Modular Components | Clean and reusable React component structure |
| 💬 Toast Notifications | Real-time feedback using **Sonner** |
| ⚡ Image Optimization | Using Next.js `<Image />` for optimized loading |
| 🔒 Authentication | Secure routes using cookies & JWT |
| 🌍 API Integration | RESTful API built with Express and Prisma |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Shovon96/portfolio
cd portfolio
```

```bash
npm install
or
yarn install
```

---
## Setup Environment Variables

### 🧩 Backend `.env`
```bash
PORT=5000
DATABASE_URL=your_database_url

NODE_ENV=development

# JWT
JWT_ACCESS_SECRET=your_secret
JWT_ACCESS_EXPIRES=1d


#JWT refresh token
JWT_REFRESH_SECRET=your_secret
JWT_REFRESH_EXPIRES=30d

EXPRESS_SESSION_SECRET=your_session
```
### Frontend `.env`
```bash
NEXT_PUBLIC_BASE_API=http://localhost:5000/api/v1
```

--- 
## Prisma Setup
```bash
npx prisma generate
npx prisma migrate dev --name init
```
## Run Locally

<b>Backend:</b>
```bash
npm run dev
```
<b>Frontend:</b>
```bash
npm run dev
```

Then visit →
🌍 http://localhost:3000

---
## 🧩 Deployment Notes
<b>🖥️ Frontend:</b>

Deployed on Vercel using `npm run build`.

<b>🗃️ Backend:</b>

Deployed on Vercel Serverless Functions.
Ensure:

- `vercel.json` has correct `"builds"` and `"routes"`.
- Environment variables are configured on Vercel dashboard.