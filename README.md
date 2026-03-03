![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Project](https://img.shields.io/badge/Project-Social%20Media-6f42c1?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Legacy-darkblue?style=for-the-badge)

# 🐶 Dogs — Social Network for Dogs

Dogs is a frontend application built with **React** as part of the React
Complete course by **Origamid**.

The project simulates a social network focused on dogs, where users can
create accounts, post photos, comment, and interact with other users.

This application was developed to practice modern React concepts,
component architecture, routing, authentication, and API consumption.

> [!WARNING]
> **Note:** This is a legacy project and is no longer under active development. It remains available for learning and reference purposes.

---

## 🎓 Course & Certification

<p>

[**🔗 Certificate for the Origamid React Complete Course**](https://origamid.com/certificate/47a29594)

</p>

<p>

[**🔗 Certificate for the Origamid Redux with React Course**](https://origamid.com/certificate/52615c8a)

</p>

---

## 🎬 Demo

https://github.com/user-attachments/assets/91532820-bae3-472e-bb01-b59df30d585b

---

## 🚀 Technologies Used

| Technology                                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)                | JavaScript library used to build reusable UI components and create dynamic user interfaces.     |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | Core programming language responsible for application logic, interactivity, and state handling. |
| ![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css3&logoColor=white)     | Scoped CSS solution that prevents style conflicts by locally scoping class names.               |
| ![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)                | Predictable state management library used to centralize and control global application state.   |
| ![Victory](https://img.shields.io/badge/Victory-FF4154?style=for-the-badge&logo=chartdotjs&logoColor=white)       | React-based data visualization library used to create interactive and customizable charts.      |

---

## 🎯 Purpose

This project was built to demonstrate:

- Component-based architecture
- React Hooks (useState, useEffect, useContext)
- Authentication flow with JWT
- Protected routes
- Form handling and validation
- Image upload
- API consumption
- Responsive layout
- Basic data visualization (statistics dashboard)

---

## 🧩 Core Features

### 👤 Authentication

- User registration
- Login with token-based authentication
- Persistent login using localStorage
- Protected routes

### 🖼️ Photo Feed

- Infinite scroll feed
- Photo detail modal
- Comment system
- Delete own posts

### 📊 User Profile

- User-specific photo list
- Statistics dashboard with views count

### 📤 Photo Upload

- Upload dog photos
- Add weight and age information
- Image preview before submission

---

## 📂 Project Structure

```bash
dogs/
├── public/
├── src/
│   ├── Assets/             # Images, icons, and other static assets
│   ├── components/         # Reusable UI components
│   ├── Hooks/              # Custom React hooks
│   ├── store/              # Redux global state configuration
│   │   └── helper/         # Auxiliary functions for store logic
│   ├── App.css
│   ├── App.jsx             # Root application component
│   ├── index.jsx           # Application entry point (React DOM render)
│   └── UserContext.jsx     # User authentication/context management
└── package.json
```

---

## 🛠️ Installation & Usage

### 1️⃣ Clone the repository

```bash
git clone https://github.com/MatheusTG/dogs.git
cd dogs
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

The application will be available at:

    http://localhost:5173

---

## 🔐 Authentication Flow

- After login, the API returns a JWT token.
- The token is stored locally.
- Protected routes validate authentication state.
- Logout removes the token and resets the session.

---

## 📋 Functional Requirements

- [x] Users must be able to register and login.
- [x] Users must be able to upload dog photos.
- [x] Users must be able to comment on photos.
- [x] Users must be able to delete their own photos.
- [x] Users must be able to view statistics of their posts.
- [x] Only authenticated users can access protected pages.

---

## 📐 Non-Functional Requirements

- [x] Responsive interface
- [x] Component reusability
- [x] Clean folder structure
- [x] Modular CSS styling
- [x] Optimized rendering using React best practices

---

## 📄 License

This project is licensed under the MIT License.

You are free to use, modify, and distribute this software, provided that
the original copyright and license notice are included in all copies or
substantial portions of the software.

<img src="https://github.com/MatheusTG/MatheusTG/blob/main/images/banner.svg" />
