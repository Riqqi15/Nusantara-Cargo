<div align="center">
  <h1>AeroCargo ✈️</h1>
  <p><strong>Premium Corporate Logistics & Air Freight Next.js Template</strong></p>
  <p>Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and Clean Architecture.</p>
</div>

---

## 🌟 Introduction

AeroCargo is a highly optimized, production-ready website template designed specifically for logistics, cargo, freight forwarding, and supply chain businesses. 

Unlike typical templates that mix UI and data, AeroCargo is engineered using **Clean Architecture**. This means all your business logic and content are strictly separated from the UI components. You can switch from static data to a Headless CMS (like Sanity or Contentful) in minutes without rewriting your UI!

## 🚀 Key Features

- **Blazing Fast Performance**: Zero heavy WebGL/3D libraries. Optimized for maximum Lighthouse scores.
- **Next.js 16 (App Router)**: Utilizing the latest React server components for maximum SEO and speed.
- **Tailwind CSS v4**: Utility-first, highly customizable styling.
- **Framer Motion**: Premium, buttery-smooth scroll animations and micro-interactions.
- **Interactive Coverage Map**: Built-in responsive SVG map using `react-simple-maps` to showcase your global/domestic routes.
- **Multi-language Ready**: Designed with language toggling structure in mind.
- **Clean Architecture**: `Domain`, `Use Cases`, `Infrastructure`, and `Presentation` layers are cleanly separated.

## 🛠️ Tech Stack

- **Framework:** Next.js 16, React 19
- **Styling:** Tailwind CSS v4, `clsx`, `tailwind-merge`
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Maps:** React Simple Maps, D3-Geo

---

## 📦 Quick Start

Follow these simple steps to get your project up and running locally.

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18.17+) installed.

### 2. Installation
Extract the template, open your terminal in the folder, and run:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ How to Customize Content (The Easy Way)

Because of the **Clean Architecture**, you **do not** need to hunt through dozens of UI files to change text, images, or services!

Simply open this single file:
👉 `src/infrastructure/repositories/InMemoryContentRepository.ts`

Inside, you will find a simple JavaScript object containing all the website's data:
- `hero`: Headlines, subtitles, background images.
- `stats`: Your company's achievements.
- `services`: The list of services you offer.
- `fleet`: Your vehicle/aircraft details.
- `testimonials`: Client reviews.

Just replace the text in that file, save, and the entire website will update automatically!

---

## 🎨 Changing Brand Colors

AeroCargo uses standard Tailwind classes. To change the primary color (currently Sky Blue):
1. Open your code editor's global search.
2. Find and replace `sky-600`, `sky-500`, and `sky-400` with your brand's color (e.g., `blue-600` atau `emerald-500`).
3. You can also customize the root CSS variables in `src/app/globals.css`.

---

## 🚀 Deployment

This template is fully optimized for **Vercel**:
1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com) and click **Import Project**.
3. Select your repository and click **Deploy**.
4. Your logistics site is now live!

---

<div align="center">
  <p>Built with ❤️ for modern developers and agencies.</p>
</div>
