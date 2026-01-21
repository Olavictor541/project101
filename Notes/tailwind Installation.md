
## 1. Create the project root

In your terminal:

```bash
cd ~/Documents
mkdir project101
cd project101
```

📁 You are now inside the project root.

---

## 2. Create the project folder structure (intentionally)

Run these commands **one by one**:

```bash
mkdir pages
mkdir styles
```

Your structure is now:

```
project101/
├── pages/
└── styles/
```

This separation matters:

- `pages/` → HTML (auth screens later)
    
- `styles/` → CSS (build artifacts stay isolated)
    

---

## 3. Initialize a Node project (mandatory)

Still inside `project101`:

```bash
npm init -y
```

This creates:

```
package.json
```

Without this file, Tailwind **cannot** work. This is non-negotiable.

---

## 4. Install Tailwind and its dependencies (stable versions)

Run **exactly**:

```bash
npm install -D tailwindcss@3.4.17 postcss@8.4.35 autoprefixer@10.4.16
```

What this does:

- Installs Tailwind CSS
    
- Installs PostCSS (required)
    
- Installs Autoprefixer (browser compatibility)
    

After this finishes, you should have:

```
node_modules/
package-lock.json
```

---

## 5. Verify Tailwind is actually installed (no trust, only proof)

Run:

```bash
ls node_modules | grep tailwind
```

You **must** see:

```
tailwindcss
@tailwindcss
```

If you don’t, stop. Do not continue.

---

## 6. Create Tailwind config files (manually, on purpose)

We will **not** rely on `npx init`.

### 6.1 Create `tailwind.config.js`

In the project root, create a file called:

```
tailwind.config.js
```

Put **exactly this** inside:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Save the file.

---

### 6.2 Create `postcss.config.js`

Create another file in the project root:

```
postcss.config.js
```

Put **exactly this** inside:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Save the file.

---

## 7. Create the Tailwind input CSS file

Inside the `styles` folder, create:

```
styles/input.css
```

Put **only this** inside:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Ignore editor warnings about `@tailwind`. They are expected.

---

## 8. Create a basic HTML file to scan

Inside `pages`, create:

```
pages/index.html
```

Put this inside:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Project 101</title>
    <link rel="stylesheet" href="../styles/output.css" />
  </head>
  <body>
    <h1 class="text-3xl font-bold text-red-600">
      Tailwind Active
    </h1>
  </body>
</html>
```

Save the file.

This HTML is **required** so Tailwind has something to scan.

---

## 9. Add a build script (explicit, professional)

Open `package.json`.

Find `"scripts"` and replace it with:

```json
"scripts": {
  "build:css": "tailwindcss -i ./styles/input.css -o ./styles/output.css"
}
```

Save `package.json`.

---

## 10. Build Tailwind CSS (the critical moment)

From the project root (`project101`), run:

```bash
npm run build:css
```

Now check:

```
styles/output.css
```

✅ It **must** be populated with lots of CSS  
❌ If it’s empty, stop and report immediately

---

## 11. Open the HTML file in your browser

Open:

```
pages/index.html
```

You should see:

- Large text
    
- Bold
    
- Red
    

That confirms:

- Tailwind installed
    
- Build pipeline working
    
- CSS linked correctly
    

---
### 11. Update your build script (single change)

Open `package.json`.

Change your script from:

```bash
"build:css": "tailwindcss -i ./styles/input.css -o ./styles/output.css"
```

to:

```bash
"build:css": "tailwindcss -i ./styles/input.css -o ./styles/output.css --watch" 
```


Save the file.