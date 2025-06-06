This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About Promptopia

Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts.

## Key Features

*   **User Authentication**: Secure user authentication powered by NextAuth.js, supporting Google OAuth.
*   **Prompt Management**: Create, view, edit, and delete your AI prompts.
*   **User Profiles**: View prompts created by specific users.
*   **Search and Filter**: Easily find prompts using search and tag-based filtering.

## Technologies Used

*   **Framework**: Next.js 13 (App Router)
*   **Frontend**: React.js, Tailwind CSS
*   **Backend**: Next.js API Routes
*   **Database**: MongoDB
*   **Authentication**: NextAuth.js

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed:

*   Node.js (v18 or higher recommended)
*   npm, yarn, pnpm, or bun

### Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```
MONGODB_URI=your_mongodb_connection_string
GOOGLE_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_VERCEL=your_vercel_deployment_url
```

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/promptopia.git
    cd promptopia
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

*   `app/`: Contains all the Next.js application routes, including API endpoints and UI pages.
    *   `api/`: Defines API routes for authentication (`auth`), prompt management (`prompt`), and user-specific posts (`users`).
    *   `layout.jsx`: The root layout for the application.
    *   `page.jsx`: The main home page component.
*   `components/`: Reusable React components used across the application (e.g., `Nav`, `Feed`, `PromptCard`).
*   `models/`: Mongoose schemas for MongoDB, defining the data structure for `Prompt` and `User`.
*   `public/`: Static assets like images and icons.
*   `styles/`: Global CSS styles.
*   `utils/`: Utility functions, including `database.js` for MongoDB connection.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
