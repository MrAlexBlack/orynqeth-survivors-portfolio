# Deploying the portfolio website

This document is for maintaining the **GitHub Pages site**, not for visitors seeking information about the Unity project.

## Publishing

1. Keep `index.html`, `styles.css`, `script.js`, and `images/` at the root of the `main` branch.
2. Open **Settings → Pages** in the repository.
3. Select **Deploy from a branch**, branch `main`, folder `/(root)`.
4. After deployment, verify the site at https://mralexblack.github.io/orynqeth-survivors-portfolio/.

The site is static and has no build dependencies. To test locally, open `index.html` in a browser or serve the directory with a basic static HTTP server.

## Editorial checklist

- A verified, downloadable Windows release can be linked from the hero section after publication.
- A short gameplay clip can be embedded once recorded and hosted.
- Screenshots of Collection and Statistics that use demo progress must remain identified as illustrative.
- This repository is the website only. Do not call it the game's source-code repository.
- The hero forest illustration (`images/hero-forest-clean.png`) is AI-generated website artwork, not gameplay footage.
- When publishing performance figures, retain the test scope and limitations.
