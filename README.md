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