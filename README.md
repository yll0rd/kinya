# Kinya

Welcome to **Kinya** — an Angular-based modern web application built to help tourists, internationals, and anyone interested in learning the Kinyarwanda language. Designed with simplicity and structure in mind, the app offers a beginner-friendly and immersive language learning experience.

🌐 **Live Site:** [kinya.vercel.app](https://kinya.vercel.app)

---

## 📁 Project Structure

```
yll0rd-kinya/
├── README.md                  # Project documentation
├── angular.json               # Angular workspace configuration
├── package.json               # Project dependencies and scripts
├── tsconfig*.json             # TypeScript configurations
├── .editorconfig, .postcssrc  # Editor and CSS tool configurations
├── public/                    # Static assets
└── src/                       # Main application code
    ├── index.html             # HTML entry point
    ├── main.ts                # App bootstrap file
    ├── styles.css             # Global styles
    └── app/                   # Core app folder
        ├── app.component.*   # Root component
        ├── app.routes.ts     # App routing configuration
        ├── components/       # Reusable UI and home modules
        │   └── shared/       # Navbar, footer, theme toggle, and UI primitives
        ├── pages/            # Page-level components (home, login, signup, etc.)
        └── services/         # Injectable services (e.g., theme toggle)
```

---

## 🚀 Features

- 🧭 **Structured Navigation** — Responsive navbar and footer
- 🌗 **Dark Mode Toggle** — Accessible from anywhere in the app
- 🏠 **Home Dashboard** — Personalized lessons, progress, and recommendations
- 📚 **Lessons** — Structured, beginner-friendly lessons
- 📖 **Lesson Detail** — Interactive views for deep-dive lessons
- 👤 **User Authentication** — Simple login and signup system
- 📈 **Progress Tracking** — Visual feedback on learning status

---

## 🛠️ Tech Stack

- **Frontend**: Angular 17+  
- **Styling**: CSS, Tailwind (via UI primitives)  
- **Component Library**: Spartan-ng UI components
- **Deployment**: Vercel  

---

## 🧑‍💻 Running Locally

To get the app running locally:

```bash
# Clone the repository
git clone https://github.com/yll0rd/kinya.git
cd kinya

# Install dependencies
pnpm install

# Start the development server
pnpm start
```

The app will be running at `http://localhost:4200`.

---

## 📦 Scripts

| Script           | Description                 |
|------------------|-----------------------------|
| `pnpm start`     | Runs the app locally        |
| `pnpm build`     | Builds the app for prod     |
| `pnpm test`      | Runs unit tests             |

---

## 📁 Folder Highlights

- `src/app/components/home/` — Dashboard widgets: continue learning, your progress, recommended lessons.
- `src/app/components/shared/` — Navbar, footer, and helm-based UI components (e.g., buttons, cards, forms).
- `src/app/pages/` — Login, signup, lesson explorer, and profile pages.
- `src/app/services/` — Services for app-level logic like theme management.

---

## 🤝 Contributing

We welcome contributions! Please fork the repository and submit a pull request.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## ✨ Author

Built with ❤️ by `yll0rd`. Visit [kinya.vercel.app](https://kinya.vercel.app) and start your Kinyarwanda learning journey today!