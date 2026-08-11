# Premium Developer Portfolio

A sleek, modern, and data-driven personal portfolio designed with a cyberpunk/glassmorphism aesthetic. This portfolio is built with pure Vanilla HTML, CSS, and Javascript. It relies on a centralized data object (`data.js`) to dynamically render the entire UI, making it incredibly easy to update without touching any HTML markup.

## ✨ Features

- **100% Data-Driven:** Add projects, skills, certifications, and experience simply by updating arrays in `data.js`.
- **Premium Glassmorphism UI:** Custom CSS classes (`.bento-card`, `.hologram-card`) combined with Tailwind utilities for a stunning visual experience.
- **Fail-Safe Assets:** Built-in Unsplash fallbacks for missing images ensure the layout never breaks.
- **Zero Dependencies:** No React, No Vue, No `npm install`, and no build steps. 
- **Light/Dark Mode:** Full support for both themes with modern tokenized CSS variables.
- **Fully Responsive:** Custom grid systems that adapt perfectly from mobile screens to ultrawide monitors.

## 🛠️ Tech Stack

- **Structure:** HTML5
- **Styling:** TailwindCSS (via CDN) & Custom CSS Variables (`styles.css`)
- **Logic:** Vanilla JavaScript (`script.js`)
- **Icons:** Feather Icons (Client-side rendering)
- **Data Source:** `data.js`

## 🚀 Getting Started

Since this project has **no build step**, getting it running locally is instantaneous:

1. Clone the repository:
   ```bash
   git clone https://github.com/priyankapanneer/portfolio_priyanka.git
   ```
2. Open the folder and double-click `index.html` to open it in your browser. 
3. (Optional) Run a live server using VS Code's **Live Server** extension for hot-reloading.

## 📝 How to Update Your Content

You never need to edit `index.html` or `script.js` to update your portfolio. Everything is controlled via `data.js`.

### To Add a New Project:
Open `data.js` and add an object to the `projects` array:
```javascript
{
  id: 3,
  title: "My Awesome App",
  description: "A description of the app.",
  image: "link-to-image.jpg",
  technologies: ["React", "Firebase"],
  githubUrl: "https://github.com/..."
}
```

### To Update Your Profile Photo:
Replace `profile.png` in the root folder with your new photo, or update the `profileImage` URL in `data.js`.

### To Update Your Resume:
Replace `Priyanka_Resume.pdf` in the root folder with your latest resume PDF, and ensure `resumeUrl` in `data.js` points to it.

## 🌐 Deployment

This project is perfectly suited for free static hosting platforms:

- **GitHub Pages:** Just go to repository Settings > Pages > Deploy from branch (`main`).
- **Vercel / Netlify:** Drag and drop the folder, or link the GitHub repository. It will deploy instantly.
