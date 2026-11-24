# 📰 Bangla News Bulletin

**Bangla News Bulletin** is a modern Bengali news web application built with **Next.js**, **React**, **TypeScript**, **MongoDB**, and **BetterAuth**.

The application provides categorized Bengali news, featured stories, most-read articles, detailed article pages, authentication, profile management, responsive navigation, and a reading experience optimized for mobile, tablet, and desktop devices.

## 🔗 Live Links

🌐 **Live Website:**  
https://bangla-news-bulletin.vercel.app/

💻 **GitHub Repository:**  
https://github.com/shirsendu-dev/bangla-news

---

## 📌 Project Overview

Bangla News Bulletin was built as a full-stack Next.js project to practice modern React and Next.js development concepts.

The application fetches Bengali news from an external news API and presents the content through a responsive news portal interface.

It also includes a complete authentication system powered by **BetterAuth**, with **MongoDB** used as the database layer for persistent application data.

The project focuses on:

- Modern Next.js App Router architecture
- Bengali news presentation
- Server and Client Components
- Dynamic routing
- API data fetching
- Authentication
- MongoDB integration
- User profile management
- Responsive design
- Production deployment

---

# ✨ Features

## 🏠 Modern Homepage

The homepage presents news through multiple sections instead of displaying a simple list.

It includes:

- Main featured story
- Supporting featured news
- Most-read news section
- Multiple categorized news sections
- Responsive news cards
- Latest news ticker
- Loading skeletons

---

## 🔥 Latest News Marquee

A responsive news ticker displays the latest headlines across the site.

Features include:

- Continuously scrolling headlines
- Links to individual articles
- Pause on hover
- Responsive typography
- Mobile-friendly layout

---

## 📰 Category-Based News

Users can browse news based on different categories.

Each category page contains:

- Category-specific articles
- Dynamic category routes
- Responsive news card grid
- News count
- Optimized layouts for different screen sizes

Example route:

```text
/category/[categoryId]
```

---

## 📖 News Details Page

Every article has its own dynamic news details page.

The page can display:

- Headline
- Topic / category
- Main article image
- Publication date
- News source
- Article body
- Additional images
- Image captions
- Tags

Example route:

```text
/news/[newsId]
```

---

## 🔐 Authentication

Authentication is implemented using **BetterAuth**.

Users can authenticate using:

- Email and password
- Google OAuth
- GitHub OAuth

Authentication features include:

- Sign up
- Sign in
- Social authentication
- Sign out
- Session management
- Authentication feedback using toast notifications

---

## 🗄️ MongoDB Integration

**MongoDB** is used as the database layer of the application.

It works alongside the authentication system to provide persistent application data storage.

This gives the project practical experience with integrating a database into a modern Next.js application.

---

## 👤 User Profile

Authenticated users have access to a dedicated profile section.

The profile page includes:

- Profile image
- User name
- Email address
- Account information
- Profile settings
- Profile update form
- Sign-out functionality

Users can update supported profile information through BetterAuth.

---

## 👤 Profile Dropdown

When a user is logged in, the navigation header displays a custom account dropdown.

It includes:

- User avatar
- Name
- Email
- Profile settings link
- Sign-out option

---

## 📱 Responsive Navigation

The navigation system changes depending on the screen size.

### Mobile

Mobile devices use a slide-in navigation drawer containing:

- News categories
- Home link
- Authentication/profile section
- Active navigation state
- Menu close controls

### Tablet & Desktop

Larger screens use:

- Horizontal category navigation
- Active navigation indicators
- Authentication controls
- User profile dropdown

---

## 📅 Bengali Date

The website header displays the current date in Bengali to better match the Bengali news-reading experience.

---

## 💀 Loading States

The application includes custom loading skeletons instead of relying only on plain loading text.

The loading UI follows the structure of the actual page so content transitions feel more natural.

---

## 🚫 Custom 404 Page

A custom `not-found` page handles invalid or unavailable routes.

Users are provided with a clear option to return to the homepage.

---

## 📱 Responsive Design

Bangla News Bulletin is designed to work across:

- 📱 Mobile phones
- 📱 Tablets
- 💻 Laptops
- 🖥️ Large desktop displays

Responsive behavior is implemented for:

- Navigation
- Slide-in menu
- News cards
- Category pages
- Homepage sections
- Profile pages
- Authentication forms
- News ticker
- Footer
- Article pages

---

# 🛠️ Technologies Used

## Frontend

- **Next.js 16**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **DaisyUI**

## Database

- **MongoDB**

## Authentication

- **BetterAuth**
- Email/password authentication
- Google OAuth
- GitHub OAuth

## UI & Utilities

- **React Icons**
- **React Hot Toast**
- **React Marquee Text**
- **Next.js Image**
- **Next.js Font**

## Deployment & Version Control

- **Vercel**
- **Git**
- **GitHub**

---

# 🧠 Next.js Concepts Used

This project demonstrates several important Next.js concepts:

- App Router
- Server Components
- Client Components
- Dynamic Routes
- Nested routes
- Async Server Components
- Server-side data fetching
- Suspense
- Loading UI
- Custom 404 handling
- `next/image`
- `next/link`
- `next/font`
- `useRouter`
- `usePathname`
- Route parameters
- Responsive layouts
- Authentication integration
- Database integration
- Production deployment

---

# ⚛️ React Concepts Used

The project also makes use of important React concepts, including:

- Reusable components
- Props
- Conditional rendering
- Event handlers
- Form handling
- Uncontrolled form inputs
- `FormData`
- Hooks
- Authentication state
- Component composition
- Suspense
- Responsive component architecture

---

# 📂 Project Structure

A simplified representation of the application structure:

```text
src/
│
├── app/
│   │
│   ├── category/
│   │   └── [categoryId]/
│   │       └── page.tsx
│   │
│   ├── news/
│   │   └── [newsId]/
│   │       └── page.tsx
│   │
│   ├── profile/
│   │   └── page.tsx
│   │
│   ├── signin/
│   │   └── page.tsx
│   │
│   ├── signup/
│   │   └── page.tsx
│   │
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   │
│   ├── CategoryNewsCard.tsx
│   ├── CurrentDate.tsx
│   ├── Footer.tsx
│   ├── FooterYear.tsx
│   ├── MainNews.tsx
│   ├── Marquee.tsx
│   ├── MostRead.tsx
│   ├── NavHeader.tsx
│   ├── NavLinks.tsx
│   ├── OtherNewsCard.tsx
│   └── UserInfo.tsx
│
└── lib/
    └── auth-client.ts
```

The exact structure may contain additional application and authentication files.

---

# 🌐 News API

News content is fetched from:

```text
https://news-api-v2.vercel.app/api
```

The API provides data used for:

- News sections
- Categories
- Category-specific news
- Individual articles
- Latest headlines
- Most-read articles

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/shirsendu-dev/bangla-news.git
```

---

## 2. Enter the project directory

```bash
cd bangla-news
```

---

## 3. Install dependencies

```bash
npm install
```

---

## 4. Configure environment variables

Create a `.env.local` file in the root directory.

The application requires environment variables for services such as:

- MongoDB
- BetterAuth
- Google OAuth
- GitHub OAuth

Example structure:

```env
MONGODB_URI=your_mongodb_connection_string

BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

> Environment variable names should match the authentication and database configuration used in the project.

Never commit real secrets or credentials to GitHub.

---

## 5. Start the development server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

# 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

Start the production application:

```bash
npm start
```

---

# ☁️ Deployment

The project is deployed using **Vercel**.

Production URL:

```text
https://bangla-news-bulletin.vercel.app/
```

The project supports Next.js dynamic routes and authentication in the deployed environment.

---

# 🎯 Learning Objectives

This project was created to practice and strengthen knowledge of:

1. React component architecture
2. Next.js App Router
3. Server Components
4. Client Components
5. Dynamic routes
6. API data fetching
7. Responsive web design
8. BetterAuth
9. Email/password authentication
10. Google OAuth
11. GitHub OAuth
12. MongoDB integration
13. Form handling
14. User profile management
15. Loading and error states
16. Production deployment with Vercel

---

# 🔮 Future Improvements

Possible future improvements include:

- 🔍 News search
- 🔖 Bookmark / saved articles
- 📚 Reading history
- 🌙 Dark mode
- 📄 Pagination
- ➕ Load more functionality
- 🎯 Personalized news feeds
- 💬 Comments
- 📤 Social sharing
- 🔔 News notifications
- ♿ Improved accessibility
- 🔎 Advanced news filtering

---

# 👨‍💻 Developer

## Shirsendu Biswas

**Full Stack MERN Developer | WordPress Developer**

- GitHub: https://github.com/shirsendu-dev
- Portfolio: https://sb-shaon-portfolio.vercel.app/
- LinkedIn: https://www.linkedin.com/in/shirsendu-biswas/

---

# 📄 Disclaimer

Bangla News Bulletin is an educational web development project.

News articles, images, headlines, and other media displayed through the application belong to their respective original publishers and content owners.

The project is intended to demonstrate web development concepts including React, Next.js, MongoDB, authentication, API integration, and responsive UI development.

---

# ⭐ Support

If you like the project, consider giving the repository a ⭐ on GitHub.
