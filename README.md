# Resume Builder

A modern, client-side resume builder with live preview and PDF export. Fill in your details on the left and watch your resume update in real time on the right.

## Features

- **Live preview** — See your resume update as you type
- **Multiple sections** — Personal info, experience, education, skills, and projects
- **PDF export** — Download a print-ready PDF with one click
- **Auto-save** — Your progress is saved to browser local storage
- **Responsive layout** — Works on desktop and mobile

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- html2canvas + jsPDF for PDF generation
- Lucide React for icons

## Usage Tips

- Use line breaks in experience descriptions for bullet points
- Check "I currently work here" to show "Present" as the end date
- Press Enter in the skills field to quickly add skills
- Click **Reset** to clear all saved data and start over
