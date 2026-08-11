# Priyanka P. - Developer Portfolio

A complete, modern, premium personal portfolio website for Priyanka P., tailored for her profile as an AI & Data Science student specializing in Machine Learning and Full-Stack Development.

## Tech Stack
- React.js
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Features
- **Premium Design:** Modern editorial aesthetic with a custom color scheme.
- **Dynamic Content:** Fully driven by localized data files for easy management.
- **Interactive UI:** Framer motion-powered smooth scroll reveals, filtering, and modal popups.
- **Responsive:** Fluid and optimized for all devices.
- **Dark Mode:** Clean dark interface to match developer aesthetics.

## Folder Structure
- `public/`: Static assets like favicon and `resume.pdf`.
- `src/assets/`: Place your project and certificate images here.
- `src/components/`: Reusable React components.
- `src/data/`: Content files for easy editing.
- `src/index.css`: Global styles and Tailwind configuration.

## Installation & Development

To get started locally:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Create a production build:**
   ```bash
   npm run build
   ```

## Vercel Deployment
This project is Vite & React based and is ready for 1-click Vercel deployment:
1. Push the code to a GitHub repository.
2. Import the repository into Vercel.
3. Vercel will automatically detect Vite and run `npm run build`.

## Customization Guide

All portfolio content is isolated in `src/data/` for easy updates.

- **Personal Information:** Edit `src/data/portfolioData.js` to change your name, role, bio, social links, email, and languages.
- **Projects:** Add or edit projects in `src/data/projects.js`. Ensure you include GitHub and Live URLs if they exist.
- **Skills:** Categorize and list your skills in `src/data/skills.js`.
- **Education:** Update your academic history in `src/data/education.js`.
- **Experience:** Add work experience, roles, and impact metrics in `src/data/experience.js`.
- **Certifications:** Add certificates in `src/data/certifications.js` and place images in `public/` or `src/assets/`.
- **Achievements:** List achievements and awards in `src/data/achievements.js`.
- **Resume:** Place your resume PDF in `public/resume.pdf`.
