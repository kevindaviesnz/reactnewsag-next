## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Getting Started

First, run the development server:

```bash
npm install -g next
npm run dev
# or
yarn dev
# or
pnpm dev
# or
run dev

http://localhost:3000

```

Main page:
app/page.tsx

Tutorial:
https://nextjs.org/learn/dashboard-app/getting-started

/app: Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.

/app/lib: Contains functions used in your application, such as reusable utility functions and data fetching functions.

/app/ui: Contains all the UI components for your application, such as cards, tables, and forms. To save time, we've pre-styled these components for you.

/public: Contains all the static assets for your application, such as images.

/scripts: Contains a seeding script that you'll use to populate your database in a later chapter.

Config Files: You'll also notice config files such as next.config.js at the root of your application. Most of these files are created and pre-configured when you start a new project using create-next-app. You will not need to modify them in this course.

Placeholder data:
/app/lib/placeholder-data.js

Typescript definitions:
/app/lib/definitions.ts

### Data fetching
https://auth0.com/blog/using-nextjs-server-actions-to-call-external-apis/
/app/actions.ts

https://nextjs.org/docs/pages/building-your-application/data-fetching
/pages/blog.tsx
```
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

// posts will be populated at build time by getStaticProps()
export default function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  )
}
 
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const posts = await res.json()
 
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

```

### CSS
#### Global
/app/ui/globacl.css
To use:
import '@/app/ui/global.css
#### Tailwind
/app/page.tsx
#### CSS Modules
/app/ui/home.module.css
/page.tsx
import styles from '@/app/ui/home.module.css';
<div className={styles.shape} />
#### clsx
Conditional styling
/app/ui/invoices/status.tsx

### Fonts
/app/ui/fonts.ts
To use:
/app/layout.tsx
/app/page.tsx (secondary font Lusitana)

### Images
/app/page.tsx
```
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
 
export default function Page() {
  return (
    // ...
    <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      {/* Add Hero Images Here */}
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
    //...
  );
}
```

### Layouts and pages
To do
https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages
Root layout file:
/app/layout.tsx

### Navigating between pages
To do
https://nextjs.org/learn/dashboard-app/navigating-between-pages

### Setting up a database
To do
https://nextjs.org/learn/dashboard-app/setting-up-your-database


### Fetch data from a database
To do
https://nextjs.org/learn/dashboard-app/fetching-data

### Static and dynamic rendering
To do
https://nextjs.org/learn/dashboard-app/static-and-dynamic-rendering

### Streaming
https://nextjs.org/learn/dashboard-app/streaming

### Partial rendering
https://nextjs.org/learn/dashboard-app/partial-prerendering

### Adding search and pagination
https://nextjs.org/learn/dashboard-app/adding-search-and-pagination

### Mutating Data
https://nextjs.org/learn/dashboard-app/mutating-data

### Handing errors
https://nextjs.org/learn/dashboard-app/error-handling


### Improving accessibility
https://nextjs.org/learn/dashboard-app/improving-accessibility
