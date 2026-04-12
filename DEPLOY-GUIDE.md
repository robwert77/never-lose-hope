# How to Put This Website Online (Free) with GitHub Pages

You need: a computer or phone with internet, and a free GitHub account.
Total time: about 10 minutes.

---

## Step 1 — Create a GitHub Account (skip if you have one)

1. Go to **https://github.com/signup**
2. Enter your email, create a password, and pick a username
3. Verify your email address

---

## Step 2 — Create a New Repository

1. Once logged in, click the **+** button in the top-right corner
2. Click **New repository**
3. Fill in the details:
   - **Repository name:** `never-lose-hope` (or any name you want — this becomes part of the URL)
   - **Description:** `Toronto crisis resources website`
   - **Public** must be selected (required for free GitHub Pages)
   - Check the box **Add a README file**
4. Click **Create repository**

---

## Step 3 — Upload Your Files

1. In your new repository, click the **Add file** button, then **Upload files**
2. Drag and drop (or browse to select) these three files:
   - `index.html`
   - `style.css`
   - `script.js`
3. Scroll down and click **Commit changes**

---

## Step 4 — Turn On GitHub Pages

1. In your repository, click the **Settings** tab (gear icon, top menu)
2. In the left sidebar, click **Pages**
3. Under **Source**, select:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes. Refresh the page.

---

## Step 5 — Visit Your Live Site

After GitHub Pages is enabled, your site will be live at:

```
https://YOUR-USERNAME.github.io/never-lose-hope/
```

Replace `YOUR-USERNAME` with your actual GitHub username.

For example, if your username is `janedoe`, the URL would be:
`https://janedoe.github.io/never-lose-hope/`

---

## Optional: Use a Custom Domain

If you own a domain name (like `neverlosehope.ca`), you can connect it:

1. Go to **Settings > Pages**
2. Under **Custom domain**, type your domain and click **Save**
3. At your domain registrar, add a **CNAME** record pointing to `YOUR-USERNAME.github.io`
4. Wait up to 24 hours for DNS to propagate
5. Check **Enforce HTTPS** once it becomes available

---

## Updating the Site Later

To change anything on the site:

1. Go to your repository on GitHub
2. Click the file you want to edit (e.g., `index.html`)
3. Click the **pencil icon** (Edit this file)
4. Make your changes
5. Click **Commit changes**

The site updates automatically within a minute or two.

---

That's it! Your site is live and free to host forever on GitHub Pages.