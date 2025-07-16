🛍️ Product Hub
A modern, beautifully designed e-commerce admin and user system built with React, Tailwind CSS, React Hook Form, Redux Toolkit, and json-server for a fully functional product management and shopping experience.

🚀 Features
✅ Modern, clean, white-themed UI with Tailwind CSS
✅ Product List with images, name, price, and description
✅ Add to Cart functionality for users
✅ Role-based routing and protected routes using React Router DOM
✅ Admin and User authentication (Sign Up / Sign In) with role-based feature control
✅ User/Admin data stored in json-server (db.json)
✅ CRUD operations for products (admin only)
✅ React Hook Form for all forms (login, signup, product forms)
✅ Redux Toolkit for clean, efficient state management (auth, products, cart)
✅ React Router DOM for SPA routing and protected route structures
✅ React Toastify for clean, animated notifications
✅ Axios for API requests
✅ nanoid for generating unique IDs
✅ Uses hardcoded initial products while supporting CRUD via API
✅ Fully responsive and mobile-friendly

🛠️ Tech Stack
Frontend:

React

Tailwind CSS

React Hook Form

Redux Toolkit

React Router DOM

React Toastify

Axios

nanoid

Backend:

json-server with db.json for:

Users (Admin/User roles)

Product storage

Cart data if needed


🚩 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/yourusername/product-hub.git
cd product-hub
2️⃣ Install Dependencies
npm install
3️⃣ Run the Backend
npx json-server db.json 
4️⃣ Run the React App
npm start
🔑 Authentication & Roles
Sign Up / Sign In:

Users and Admins can register and login.

Role (user / admin) is stored in db.json.

JWT-free basic auth with localStorage for token simulation.

Role-Based Routing:

Admin: Access to product CRUD operations.

User: Access to product browsing and add-to-cart functionality.

🛒 Add to Cart
Users can add products to the cart.

Cart is managed with Redux Toolkit for persistent cart state across the app.

