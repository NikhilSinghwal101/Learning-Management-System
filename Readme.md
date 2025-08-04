# 📚 Learning Management System (LMS)

A full-featured Learning Management System (LMS) built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This LMS allows users to explore, purchase, and track courses and resources including books.

-----------------------------------------------------------

## 🔍 Features

### 👩‍🏫 Student & Course Management
- Browse and filter courses by category, price, or level
- Instantly purchase courses via Razorpay (no cart flow)
- Track course progress and access only the purchased content
- View badges, ratings, and progress tracking for completed modules

### 📝 Blog Section
- Read developer-focused educational blogs
- Filter and search by topics such as Web Development, JavaScript, React, etc.
- Easily accessible and designed for self-paced learning

### ❓ Quiz & Assessment
- Attempt quizzes to test your knowledge after completing modules
- View immediate feedback on submissions
- Earn scores and badges based on quiz performance

### 📚 Bookstore
- Searchable, filterable book catalog with categories like React, Python, ML, etc.
- Add books to cart, remove items, and complete checkout
- Secure payment through Razorpay gateway

### 📊 Dashboards
- **Student Dashboard**: Upcoming deadlines, enrolled courses, messages, quiz performance
- **Library Dashboard**: Charts, analytics, overdue tracking, category filtering, export data

### ⚙️ Admin Features (Planned)
- Course and blog creation/editing
- Role-based access (admin, student)
- Book uploads and library inventory management
- Quiz creation and response analysis


------------------------------------------------------------

## 🧰 Tech Stack

**Frontend**:  
- React.js  
- Tailwind CSS  
- Redux (for state management)  
- React Router  
- Toastify (notifications)

**Backend**:  
- Node.js  
- Express.js  
- MongoDB with Mongoose  
- Razorpay SDK

**Other Tools**:  
- Cloudinary (image upload)  
- GitHub for version control  
- Postman (API testing)

-------------------------------------------------------------

## 🚀 Getting Started

### 1. Clone the Repository

git clone https://github.com/NikhilSinghwal101/Learning-Management-System.git
cd Learning-Management-System

2. Setup Frontend
cd frontend
npm install
npm start

3. Setup Backend
cd ../backend
npm install
npm run dev

4. Environment Variables
Create a .env file in /backend and set the following:




env
PORT=5000
MONGO_URI=your_mongodb_connection_string
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret





📁 Folder Structure

LMS/
├── backend/         # Node.js + Express + MongoDB
├── frontend/        # React + Tailwind + Redux
├── .gitignore
├── README.md
└── ...




💳 Razorpay Integration

The app uses Razorpay for handling checkout payments. For testing:

Use test keys from Razorpay Dashboard

Test cards: 4111 1111 1111 1111 with any CVV and future expiry
