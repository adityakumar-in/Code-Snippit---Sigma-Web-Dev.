# Steps to Install Tailwind CSS

Follow these steps to set up Tailwind CSS in your project.

## Step 1: Install Tailwind CSS

Run the following commands to install Tailwind CSS and initialize the configuration:

```bash
npm install -D tailwindcss
npx tailwindcss init
```

## Step 2: Configure Tailwind CSS

Edit the `tailwind.config.js` file to include the paths to your HTML and JavaScript files:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Step 3: Create the CSS File

Create a `src` folder if it doesn't exist, and inside it, create a file named `input.css`. Add the following Tailwind directives to this file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Step 4: Add Build Script

Open `package.json` and add the following build script inside the `scripts` section, below the existing scripts:

```json
"build": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
```

**Note:** Ensure that you do not remove any quotation marks.

## Step 5: Start the Tailwind CSS Build Process

Run the following command in your terminal to start the Tailwind CSS build process and watch for changes:

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

**Note:** Use `npm` or `npx` commands within the terminal.

## Step 6: View Changes

Open your live server to view the changes and start using Tailwind CSS in your project.