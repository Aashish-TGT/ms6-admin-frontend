# MS6 Admin Panel Frontend

This is the **Admin Panel Frontend** for the MS6 microservice of a Point-of-Sale (POS) system. It is a modern, responsive dashboard built using **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Recharts**, connected to a Node.js & MySQL backend.

default login id : admin@example.com
password : admin123

## 🔥 Features

- ⚙️ **Authentication**
  - Secure admin login
  - JWT token stored in browser cookies
  - Protected routes & logout functionality

- 📊 **Dashboard UI**
  - Summary cards: Total Users, Clients, Transactions, Logs
  - Recharts-based bar and pie charts for usage & error reports
  - Real-time data integration (API-ready)
  
- 👥 **Users Module**
  - List of all registered users
  - Search, filter & view details (coming soon)

- 🧑‍💼 **Clients Module**
  - Manage POS clients
  - Track client details and subscriptions

- 💸 **Transactions Module**
  - View transaction records
  - Searchable and paginated transaction list

- 🧾 **Logs Module**
  - System logs (info, error, warning)
  - Filter logs by type
  - Pagination support

## 🧱 Tech Stack

| Layer        | Technology                  |
|--------------|------------------------------|
| Frontend     | Next.js (App Router)         |
| Styling      | Tailwind CSS                 |
| Charts       | Recharts                     |
| Language     | TypeScript                   |
| Auth         | JWT, Cookies                 |
| Backend      | Node.js, Express, MySQL (via APIs) |
| Dev Tools    | Postman, VS Code, Git        |

## 📁 Folder Structure

ms6-admin-frontend/
│
├── app/ # App Router structure
│ ├── login/ # Login page (auth)
│ ├── dashboard/ # Dashboard UI
│ ├── users/ # Users page
│ ├── clients/ # Clients page
│ ├── transactions/ # Transactions page
│ └── logs/ # Logs page
│
├── components/ # Reusable UI components
├── lib/ # API helpers, utils
├── styles/ # Tailwind config
├── public/ # Static assets
├── middleware.ts # Auth protection
├── tailwind.config.js # Tailwind settings
├── tsconfig.json # TypeScript config
└── README.md # Project documentation


## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/Aashish-TGT/ms6-admin-frontend.git
cd ms6-admin-frontend

npm install

npm run dev

🔐 Authentication Logic
Admin logs in via /login
default login id : admin@example.com
password : admin123

On success, JWT token is stored in cookies

Protected routes (/dashboard, /users, etc.) require valid token

Logout clears cookies and redirects to login

🧪 Future Enhancements
Connect to real backend APIs

Add user/client editing functionality

Mobile responsiveness

Notifications and error banners

🙌 Author
Made with ❤️ by Aashish 
Intern @ TGT by TerraGrid Tech

📄 License
This project is licensed under the MIT License