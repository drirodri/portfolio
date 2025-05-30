# Adriano's Portfolio

Welcome! This is my personal portfolio, built with [Next.js](https://nextjs.org), to showcase my projects, skills, and contact information.  
**Note: This portfolio is a work in progress. Some features and sections may be incomplete or subject to change.**

This site is intended for anyone interested in learning more about my work, experience, and technical background.

## 🚀 Features

- **Next.js App Router** with dynamic locale support (`[locale]` routes)
- **Internationalization** using [next-intl](https://github.com/amannn/next-intl)
- **TypeScript** for type safety
- **Tailwind CSS** and [DaisyUI](https://daisyui.com/) for styling and components
- **Theme switcher** (light/dark mode)
- **Devicon** for technology and social icons
- **Responsive layout** for all devices (_still being improved_)
- **Projects section** with dynamic data from JSON
- **Contact section** with social links (GitHub, LinkedIn, Email)
- **Custom hooks** (e.g., GitHub repo last updated)
- **Static assets** served from the `public` directory

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [next-intl](https://github.com/amannn/next-intl)
- [Devicon](https://devicon.dev/)
- [Vercel](https://vercel.com/) (recommended for deployment)

## 📦 Project Structure

```
src/
  app/
    [locale]/
      layout.tsx
      page.tsx
  components/
    About/
    Contact/
    Footer/
    Navbar/
    Projects/
    Switchers/
  data/
    projects.json
  hooks/
  i18n/
  messages/
  styles/
  theme/
  utils/
public/
  me.jpeg
  ...
```

## 🖥️ Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Internationalization

- The app supports multiple languages (e.g., English and Portuguese).
- Language can be switched via the Navbar dropdown.
- Translations are managed in `src/messages/`.

## 📝 Customization

- **Projects:** Edit `src/data/projects.json` to add or update your projects.
- **Social Links:** Update the URLs in `src/components/Contact/Socials.tsx`.
- **Profile Image:** Replace `public/me.jpeg` with your own photo.

## 🛠️ Deployment

The recommended way to deploy this portfolio is with [Vercel](https://vercel.com/).

### Deploying to GitHub Pages

- This project uses dynamic routes and internationalization, which require static export for GitHub Pages.
- To export as a static site:
  1. Set `output: "export"` in `next.config.js`.
  2. Set `basePath` and `assetPrefix` if deploying to a subdirectory.
  3. Run `npm run build && npm run export`.
  4. Deploy the contents of the `out/` directory to your `gh-pages` branch.

> **Note:** Some Next.js features (SSR, API routes) are not supported on GitHub Pages.

---

**Thank you for visiting my portfolio! If you have any questions or would like to get in touch, please use the contact section on the site.**
