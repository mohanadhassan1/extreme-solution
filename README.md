# GitHub Users Explorer

A Next.js 15 application that fetches and displays GitHub users with pagination, search, and favorites functionality.

## Features

- Fetch and display GitHub users with pagination
- Search within fetched data
- Add/remove users to/from favorites
- Favorites persist across page reloads
- Dark mode support
- Responsive design

## Technologies

- Next.js 15
- TypeScript
- Redux Toolkit with persistence
- Tailwind CSS
- GitHub API

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install


extreme-solutions/
├── app/
│   ├── favorites/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
├── components/
│   ├── DarkModeToggle.tsx
│   ├── FavoriteButton.tsx
│   ├── PaginationControls.tsx
│   ├── SearchInput.tsx
│   ├── UserCard.tsx
│   └── UsersList.tsx
├── hooks/
│   ├── useDebounce.ts
│   └── useLocalStorage.ts
├── lib/
│   ├── api.ts
│   └── constants.ts
├── store/
│   ├── favoritesSlice.ts
│   └── store.ts
├── types/
│   └── user.ts
├── README.md
├── jest.config.js
├── next.config.js
├── package.json
└── tsconfig.json





npm install @reduxjs/toolkit react-redux redux-persist
npm install --save-dev @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest jest jest-environment-jsdom ts-jest

