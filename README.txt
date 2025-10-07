LocRobster Studios Website — Deployment Guide
====================================================

Structure:
-----------
LocRobster_Site/
├── index.html
├── shop.html
├── gallery.html
├── about.html
├── contact.html
├── style.css
├── script.js
└── graphics/, images/, etc. (add your folders here)

View Locally:
-------------
1. Unzip the folder.
2. Double-click `index.html` to open it in your browser.
   - Works fully offline (except the embedded Printify shop).

Upload to GitHub Pages:
-----------------------
1. Create a GitHub repository (example: `locrobster-site`).
2. Drag all files inside the `LocRobster_Site` folder into that repo.
3. In GitHub:
   - Go to **Settings → Pages**.
   - Under “Build and Deployment,” set **Source → Deploy from branch**.
   - Choose the **main** branch and the **root** folder (`/`).
4. Wait 1–2 minutes. Your site will appear at:
   https://YOUR-USERNAME.github.io/REPOSITORY-NAME
   Example: https://locrobster.github.io/locrobster-site

Hosting Elsewhere:
------------------
Upload all files from the `LocRobster_Site` folder into your web host’s public folder (often called `public_html/`).

Adding or Updating Content:
---------------------------
- New thumbnails → place in `images/thumbnails/`
- Full-size photos → place in `images/fullsize/`
- Banner/logo → keep in `graphics/`
- Edit text or links in each `.html` file using any text or code editor.

Credits & Notes:
----------------
This site was custom built for LocRobster Studios — featuring original art, design, and creative content.
For updates or adjustments, always keep a backup of your working version before editing.
