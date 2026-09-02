# Vehicles — SnowRunner

A static website (no backend, no database) for browsing SnowRunner
vehicles sorted into categories. Designed in a minimalist iOS style
and ready to be installed as an app on a phone's home screen (PWA —
Progressive Web App).

**Important:** this is a *view-only* version. Visitors cannot add,
edit, or delete vehicles from the interface — the only way to change
the content is by editing the `data.js` file in the source code.

---

## 1. File structure

```
index.html      – page structure
style.css       – look and feel (minimalist iOS style)
app.js          – logic (display only, no editing)
data.js         – ⭐ EDIT VEHICLES AND CATEGORIES HERE ⭐
manifest.json   – PWA configuration (icon, app name)
sw.js           – offline mode / installability support
icons/          – app icons
images/         – put vehicle photos here
README.md       – this file
```

## 2. How to add / change vehicles

Open the **`data.js`** file and edit the two lists:

- `CATEGORIES` — category names (order = display order).
- `VEHICLES` — the vehicle list. Each entry looks like this:

```js
{
  id: "my_vehicle",              // unique identifier, no spaces
  name: "Vehicle name",
  category: "Scouts",            // must match a name from CATEGORIES
  unlocked: true,                // true = available from the start, false = must be unlocked
  region: "",                    // fill in only when unlocked = false
  image: "images/my_vehicle.jpg" // optional, leave "" if no photo
}
```

## 3. How to add photos

Drop `.jpg` / `.png` files into the `images/` folder and enter their
path in that vehicle's `image` field (e.g. `images/scania_74p.jpg`).
If the file doesn't exist or the field is left empty, the app shows a
default icon instead of a photo — nothing breaks.

## 4. Publishing on GitHub Pages

1. Create a new repository on GitHub (e.g. `snowrunner-vehicles`).
2. Upload all the files from this folder to it (keeping the folder
   structure — `index.html` must be in the root of the repository).
3. Go to **Settings → Pages** in the repository.
4. Under "Build and deployment", choose **Deploy from a branch**,
   branch **main**, folder **/ (root)** → **Save**.
5. After a moment, GitHub will show the site's address, usually in
   the format:
   `https://your-username.github.io/snowrunner-vehicles/`
6. Every change to the files (e.g. in `data.js`) followed by pushing
   it (`git push`) automatically updates the live site within 1–2
   minutes.

## 5. Installing as an app on your phone

**iPhone / iPad (Safari):**
Open the site → tap the **Share** button (square with an arrow) →
**Add to Home Screen**. The app launches full-screen, with no
browser address bar.

**Android (Chrome):**
Open the site → menu (⋮) → **Add to Home screen** / **Install app**.

**Computer (Chrome/Edge):**
An install icon will appear on the right side of the address bar.

## 6. Updates

Because the site also works offline (thanks to `sw.js`), after
uploading a new version of the data you may sometimes need to
manually refresh the app (pull down / force refresh) for the new
version of `data.js` to be fetched.
