# 📚 Learning Management System (LMS)

A modern, full-featured Learning Management System (LMS) designed to facilitate online learning, course management, student progress tracking, and more.

## 🚀 Features

- 👨‍🏫 Instructor dashboard for course creation and management
- 💳 Secure payment integration (Razorpay, Stripe, etc.)
- 🔐 Authentication and role-based access control
- 🧩 Modular and scalable code architecture

## 🛠 Tech Stack

### Frontend
- React.js with Redux Toolkit
- React Router DOM
- TailwindCSS (or other styling framework)
- Axios for API calls

### Backend
- Node.js + Express.js (or NestJS)
- MongoDB + Mongoose (or Prisma with PostgreSQL)
- JWT-based Authentication
- Cloudinary for image/video uploads




## 📂 Project Structure

lms/
│
├── client/ # React frontend
│ ├── src/
│ └── ...
│
├── server/ # Node backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── ...
│
├── uploads/ # Media uploads
├── .env # Environment variables
├── README.md
└── package.json




## ⚙️ Setup Instructions

### 1. Clone the Repository
git clone https://github.com/NikhilSinghwal101/Learning-Management-System.git

cd lms

2. Install Dependencies
# Backend
cd server
npm install

# Frontend
cd ../client
npm install

3. Setup Environment Variables
Create a .env file in both client/ and server/ with required variables. Example for backend:
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
RAZORPAY_KEY_ID=...
RAZORPAY_SECRET=...

4. Run the Application
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm start
