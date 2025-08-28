# Digital Wallet Frontend

A responsive **Digital Wallet frontend** built with **React, TypeScript, Tailwind CSS**, and **ShadCN UI**. This frontend works with the Digital Wallet Backend API to provide a complete user experience for managing wallets, transactions, and user profiles.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

---

## Demo

You can run the frontend locally to test all features. Screenshots or demo GIFs can be added here.

---

## Features

- **User Authentication**
  - Email/Password login
  - Google OAuth login
- **Dashboard**
  - Separate dashboards for USER, AGENT, ADMIN
  - Wallet overview
  - Transactions history
  - Cash-In, Cash-Out, and Commission tracking
- **Profile Management**
  - Update profile name, email, and avatar
  - Soft-delete profile
- **Responsive Design**
  - Mobile, tablet, and desktop optimized
- **Reusable Components**
  - Buttons, Inputs, Forms, Cards, Tables

---

## Technologies

- **React** (v18+)
- **TypeScript**
- **Tailwind CSS**
- **ShadCN UI / Radix UI**
- **React Router DOM**
- **React Hook Form**
- **Zod** for schema validation
- **Redux Toolkit / RTK Query** for state management
- **Axios** for API requests
- **Sonner Toasts** for notifications

---

## Folder Structure

src/
├── assets/ # Static images and logos
├── components/ # Reusable UI components
├── features/ # Redux slices and API services
├── hooks/ # Custom hooks
├── lib/ # Utility functions
├── pages/ # React pages/components
├── routes/ # Route components and layouts
└── App.tsx # Main app component

.env
VITE_API_URL=http://localhost:3000/v1

