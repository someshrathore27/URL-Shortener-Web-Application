🔗 URL Shortener Web Application

A full-stack URL shortener built with secure JWT authentication, MongoDB-backed persistence, and a modern React + Redux dashboard. The application lets users shorten links, track clicks, generate QR codes, and manage all links in real-time.

🚀 Features

JWT Authentication – Secure user signup and login.
URL Shortening – Generate short, shareable links.
Analytics Dashboard – Track clicks and view per-link timestamps.
QR Code Generation – Instantly create QR codes for shortened links.
Responsive UI – Built with React, Redux, React Query, and Tailwind CSS.
Persistent Storage – MongoDB ensures long-term data storage.
Real-time Management – Update, delete, and manage links instantly.
🛠️ Tech Stack Frontend

React
Redux
React Query
Tailwind CSS
Backend

Node.js
Express.js
JWT Authentication
MongoDB + Mongoose
Other

QR Code Generator
REST API
⚡ Getting Started

Prerequisites

Node.js (v16+)
MongoDB
Clone the Repository bash git clone https://github.com/someshrathore27/URL-Shortener-Web-Application.git cd URL-Shortener-Web-Application

Backend Setup cd backend npm install

Create a .env file in the backend/ directory: MONGODB_URI=your_mongodb_connection_string JWT_SECRET=your_jwt_secret PORT=5000

Run backend: npm start

Frontend Setup: cd frontend npm install npm start

The app should now be running on:

Frontend → http://localhost:3000

Backend API → http://localhost:5000