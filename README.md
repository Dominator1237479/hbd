# A Birthday Scrapbook ♡

A small birthday surprise made for **Pratyusha Ghosh**.

This project is a personal website built around the feeling of opening a handmade scrapbook. It brings together photographs, little memories, and a birthday letter in one place.

Nothing fancy. Just a collection of moments made into something special.

## ✦ Features

- Envelope-style opening screen
- Scrapbook-inspired birthday book
- Polaroid-style photo memories
- Film strip photo gallery
- Personal birthday letter
- Customizable text and photographs
- Responsive layout

## Built With

- React
- JavaScript
- CSS
- Vite

## Project Structure

```text
BirthdayRaw-main/
│
├── public/
│   └── assets/
│       ├── decorations/
│       ├── icons/
│       ├── photos/
│       └── textures/
│
├── src/
│   ├── data/
│   │   └── birthdayContent.js
│   │
│   ├── main.jsx
│   └── styles.css
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Personalizing the Website

Most of the personal content is managed from one file:

`src/data/birthdayContent.js`

You can edit:

- Recipient's name
- Birthday heading
- Cover message
- Introduction
- Opening photograph and caption
- Three memory sections
- Five film strip photographs
- Birthday letter
- Sign-off and signature

### Adding Photos

Place your photographs inside:

`public/assets/photos/`

Then add their filenames to `birthdayContent.js`.

For example:

```js
openingPhoto: "cover.jpg",

memories: [
  {
    image: "memory-01.jpg",
    label: "01 · A day to keep",
    caption: "Your caption",
    note: "Your memory"
  }
],

filmPhotos: [
  "film-01.jpg",
  "film-02.jpg",
  "film-03.jpg",
  "film-04.jpg",
  "film-05.jpg"
],
```

Leave an image path empty if you want to keep the default photo placeholder.

## Run Locally

Make sure Node.js is installed.

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Build for Production

```bash
npm run build
```

The production files will be generated inside the `dist` folder.

## Deployment

You can deploy this project using Vercel.

Connect your GitHub repository, select Vite as the framework, and deploy.

---

*A little website for a person worth celebrating.*

Made with care. ♡