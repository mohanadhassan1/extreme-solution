# Extreme Solution Hiring Challenge

A simple and responsive GitHub user browser built with **Next.js 15**, **Tailwind CSS**, and **Redux Toolkit**. It includes features like pagination, search, favorites management, theme toggle, and persistence — all powered by GitHub’s public API.

---

## 🧠 Challenge Overview

This project was built as part of a hiring challenge to demonstrate the following:

- Fetch and display GitHub users using [GitHub's public API](https://api.github.com/users)
- Implement pagination (Next, Previous, First, Last)
- Enable search within fetched data
- Add/remove users to/from a favorites list
- Persist favorites with localStorage or Redux-persist
- Create a dedicated `/favorites` page
- Implement routing and global state management
- Provide a responsive and user-friendly UI

---

## 🔧 Tech Stack

| Tech             | Description                          |
|------------------|--------------------------------------|
| **Next.js 15**    | React framework with App Router     |
| **TypeScript**    | Static type checking                |
| **Redux Toolkit** | Global state management + persistence |
| **Tailwind CSS**  | Utility-first styling               |
| **Jest**          | Unit testing                        |
| **GitHub API**    | Public API to fetch users           |

---

## ✨ Features

- ✅ Paginated list of GitHub users (5 per page)
- ✅ Search within fetched users (debounced)
- ✅ Add/remove users from favorites
- ✅ View favorites on `/favorites` page
- ✅ Persistent data using localStorage
- ✅ Dark mode support
- ✅ Clean, responsive UI
- ✅ Error and loading handling
- ✅ Modular and testable code
- ✅ Unit tests using Jest

---

## 📁 Project Structure

```bash
extreme-solutions/
├── __mocks__/
│   ├── favoritesSlice.test.ts
│   ├── UserCard.test.tsx
│   └── styleMock.js
├── __tests__/
│   ├── favoritesSlice.test.ts
│   ├── UserCard.test.tsx
│   └── UsersList.test.tsx
├── app/
│   ├── favorites/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ErrorBanner.tsx
│   ├── FavoriteButton.tsx
│   ├── Loading.tsx
│   ├── PaginationControls.tsx
│   ├── SearchInput.tsx
│   ├── UserCard.tsx
│   └── UsersList.tsx
├── enums/
│   └── index.ts
├── hooks/
│   ├── index.ts
│   ├── useDebounce.ts
│   └── useTheme.tsx
├── lib/
│   ├── api.ts
│   ├── index.ts
│   └── Notifications.tsx
│   └── ThemeProvider.tsx
│   └── constants.ts
├── store/
│   ├── slices/
│   │    └── favoritesSlice.ts
│   ├── providers.tsx
│   └── store.ts
├── types/
│   └── user.ts
├── .gitignore
├── babel.setup.js
├── eslint.config.js
├── jest.config.js
├── jest.setup.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.json
├── README.md
└── tsconfig.json
```

---

## 📦 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/mohanadhassan1/extreme-solution.git
cd extreme-solution
```

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install


