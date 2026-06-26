# AeroCargo - Premium Logistics & Freight Next.js Template

AeroCargo is a modern, high-performance website template built specifically for logistics, cargo, freight forwarding, and supply chain companies. It features smooth animations, a premium aesthetic, and is built upon a highly maintainable **Clean Architecture** structure.

![Preview Image](public/preview.jpg) <!-- Note: Replace with actual screenshot of your template -->

## 🌟 Key Features

- **Next.js 16 (App Router) & React 19**: Built with the latest, fastest, and most modern web technologies.
- **Tailwind CSS v4**: Utility-first styling for effortless theme and color customization.
- **Framer Motion**: Smooth scroll animations, fade-ins, and premium micro-interactions.
- **Clean Architecture**: Separation of concerns (Domain, Infrastructure, Presentation) makes it incredibly easy to swap out content or integrate with a headless CMS without touching the UI code.
- **Lucide Icons**: Beautiful, consistent, and customizable vector icons.
- **Interactive Elements**: Features an animated logo marquee, interactive statistic counters, and scrollspy navigation.
- **Fully Responsive**: Flawless display across mobile, tablet, and desktop devices.
- **SEO Optimized**: Fast loading times and semantic HTML structure.

---

## 🚀 Quick Start

Follow these steps to get the template running locally:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18.17 or higher) installed on your system.

### 2. Install Dependencies
Run the following command in your terminal:

```bash
npm install
```
*(Note: An `.npmrc` file is included to automatically handle legacy peer dependencies for React 19 compatibility).*

### 3. Run the Development Server
Start the local server:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 🛠️ How to Customize Content

One of the biggest advantages of this template is its **Clean Architecture**. You **do not** need to edit the UI components to change the text, services, or testimonials.

All website data is centralized in one file. To change the content, simply edit:
👉 `src/infrastructure/repositories/InMemoryContentRepository.ts`

Inside this file, you can easily modify:
- **Hero Section**: Titles, subtitles, and CTA links.
- **Stats**: The numbers and labels for your achievements.
- **Services**: The list of services offered (Air Freight, Sea Freight, etc.).
- **Fleet**: The list of available vehicles/planes.
- **Partners**: Company names and logo URLs.
- **Testimonials**: Client reviews, names, and avatars.

If you wish to fetch data from an API or CMS (like Sanity, Strapi, or Contentful), you simply create a new repository that implements the `ContentRepository` interface in `src/domain/repositories/ContentRepository.ts`.

---

## 🎨 Changing Colors & Branding

The template uses standard Tailwind CSS classes. Global styles and custom variables can be found in `src/app/globals.css`.

To change the primary brand color (currently Sky Blue), you can either:
1. Do a global find-and-replace for `sky-600`, `sky-500`, etc., to your preferred Tailwind color (e.g., `emerald-600`).
2. Define a custom theme color in your CSS/Tailwind configuration.

---

## 📦 Deployment

This template is fully optimized for [Vercel](https://vercel.com). 

1. Push your code to a GitHub repository.
2. Go to Vercel and import the repository.
3. Click **Deploy**. The template will automatically build and go live.

---

## 📝 License & Support

If you have purchased this template, you are free to use it for personal or commercial projects. 
For support, please contact the author via your purchase platform.
