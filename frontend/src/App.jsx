// import './App.css'
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route, useLocation, useNavigate, useParams } from "react-router-dom";
import CourseSection from "./pages/Course/CourseSection";
import Blogs from "./pages/Blog/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Category from "./components/Category";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import CreateCourse from "./pages/Course/CreateCourse";
import UpdateCourse from "./pages/Course/UpdateCourse";
import { useEffect } from "react";
import ProtectedRoute from "./auth/ProtectedRoute";
import Profile from "./pages/Profile/Profile";
import BlogCardDetails from "./pages/Blog/BlogCardDetails";
import CreateBlog from "./pages/Blog/CreateBlog";
// import CourseData from "../public/coursedata.json";
import StudentDashboard from "./pages/Dashboard/StudentDashboard";
import InstructorDashboard from "./pages/Dashboard/InstructorDashboard";
import CourseDetails from "./pages/Course/CourseDetails";
// import CourseCurriculum from "./pages/Course/CourseCurriculum";
import Quiz from "./pages/Quiz/Quiz";
import Shop from "./pages/Shop";
import ChangePassword from "./pages/Password/ChangePassword";
import EditProfile from "./pages/Profile/EditProfile";
import ForgetPassword from "./pages/Password/ForgetPassword";
import ResetPassword from "./pages/Password/ResetPassword";
import AddLecture from "./pages/Dashboard/AddLecture";
import Checkout from "./pages/Payment/Checkout";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import CheckoutSuccess from "./pages/Payment/CheckoutSuccess";
import CheckoutFail from "./pages/Payment/CheckoutFail";
import DisplayLectures from "./pages/Dashboard/DisplayLectures";
import LoadingSpinner from "./components/LoadingSpinner";
import Favourites from "./pages/Favourites";
// import { useSelector } from "react-redux";

function App() {
  const navigate = useNavigate();

  // const [searchCourse, setSearchCourse] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const [loading, setLoading] = useState(true);

  // const courseData = useSelector((state) => state?.courses?.courses?.courses);
  // const filterCourseBasedOnCategoryOrTitle = courseData?.filter(
  //   (course) =>
  //     course.category.toLowerCase().includes(searchCourse.toLowerCase()) ||
  //     course.title.toLowerCase().includes(searchCourse.toLowerCase())
  // );

  // console.log("search course: ", searchCourse)
  // console.log("filter Course: ", filterCourseBasedOnCategoryOrTitle)

  // Simulate a loading delay
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  //--------------------------- // For manually routing (type on browser) => Need when guestLogin

  // const { isAuthenticated } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   navigate('/login');
  // }, [(pathname === '/profile' || pathname === '/courses') && !isAuthenticated])

  //----------------------------

  useEffect(() => {
    const topToCourseSectionScroll = window.innerWidth > 768 ? 1290 : 1840;
    if (searchQuery.length >= 1) {
      navigate("/courses");
      window.scroll({
        top: pathname !== "/courses" ? topToCourseSectionScroll : 110,
        behavior: "smooth",
      });
    }
  }, [navigate, pathname, searchQuery.length]);


  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Header
            // searchCourse={searchCourse}
            // setSearchCourse={setSearchCourse}
            setSearchQuery={setSearchQuery}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route
              path="/courses"
              element={
                <ProtectedRoute>
                  <CourseSection
                    // filterCourseBasedOnCategoryOrTitle={
                    //   filterCourseBasedOnCategoryOrTitle
                    // }
                    searchQuery={searchQuery}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/create-course"
              element={
                <ProtectedRoute>
                  <CreateCourse />
                </ProtectedRoute>
              }
            />
            <Route
              path="/update-course/:id"
              element={
                <ProtectedRoute>
                  <UpdateCourse />
                </ProtectedRoute>
              }
            />
            <Route
              path="/course-details/:id"
              element={
                <ProtectedRoute>
                  <CourseDetails />
                </ProtectedRoute>
              }
            />
            {/* <Route path='/course-curriculum' element={<CourseCurriculum />} /> */}
            <Route
              path="/add-lecture"
              element={
                <ProtectedRoute>
                  <AddLecture />
                </ProtectedRoute>
              }
            />
            <Route
              path="/display-lectures"
              element={
                <ProtectedRoute>
                  <DisplayLectures />
                </ProtectedRoute>
              }
            />
            <Route
              path="/checkout/:courseId"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/checkout-success"
              element={
                <ProtectedRoute>
                  <CheckoutSuccess />
                </ProtectedRoute>
              }
            />
            <Route
              path="/checkout-fail"
              element={
                <ProtectedRoute>
                  <CheckoutFail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/quiz"
              element={
                <ProtectedRoute>
                  <Quiz />
                </ProtectedRoute>
              }
            />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog-details/:id" element={<BlogCardDetails />} />
            <Route
              path="/create-blog"
              element={
                <ProtectedRoute>
                  <CreateBlog />
                </ProtectedRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="/update-profile" element={<EditProfile />} />
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student-dashboard"
              element={
                <ProtectedRoute>
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/instructor-dashboard"
              element={<InstructorDashboard />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

// 25/09/24
// Scroll
// Carousel
// TestimonialsCarousel
// Sidebar

// import { useState } from "react";
// import Header from "./header";
// import Hero from "./hero";

// export default function App() {
//   const [countDec, setCountDec] = useState(0);
//   const [countInc, setCountInc] = useState(0);
//   return (
//     <>
//       <Header />
//         {/* <div>
//           <p>You clicked negative {countDec} times</p>
//           <button type="button" onClick={() => setCountDec(countDec - 1)}>Click me</button>
//         </div>
//         <div>
//           <p>You clicked positive {countInc} times</p>
//           <button type="button" onClick={() => setCountInc(countInc + 1)}>Click me</button>
//         </div> */}
//       {/* <div>
//         <Link href={'/error'}>Error</Link>
//       </div> */}
//       {/* <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQlBLySoMdXp4xftK6JLwspzsigFm9iTM5aZPhQvjFeqpxU1FZ" alt="" height={100}/>
//       <Image src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQt_iZ-voY4mZhTacQwhtYofGKdzwHwXbwfhC7LL9lPij2A9tK7" alt="" height={100}/> */}
//       {/* <Image src="https://s3.envato.com/files/312040899/Preview/02_LMS-Home.jpg" alt="image1" width="320" height="320" />
//       <Image src="https://s3.envato.com/files/505940709/Screenshot/02_Home_LMS.jpg" alt="image2" width="320" height="320"/>
//       <Image src="https://s3.envato.com/files/468874927/02_home-02.png" alt="image3" width="320" height="320" />
//       <Image src="https://s3.envato.com/files/451634924/screenshots/01_Home-1.png" alt="image4" width="320" height="320"/>
//       <Image src="https://s3.envato.com/files/505885360/Screenshots/01_Homepage.jpg" alt="image5" width="320" height="320" />
//       <Image src="https://s3.envato.com/files/316231699/eShikkha_Figma_Preview/02_Home.jpg" alt="image6" width="320" height="320" />
//       <Image src="https://s3.envato.com/files/441905414/03_home_v2.jpg" alt="image7" width="320" height="320" />
//       <Image src="https://s3.envato.com/files/441905414/02_home_v1.jpg" alt="image8" width="320" height="320" />
//       <Image src="https://s3.envato.com/files/494824625/previews/05_home.png" alt="image9" width="320" height="320" />
//       <Image src="https://s3.envato.com/files/494824625/previews/03_home.png" alt="image10" width="320" height="320" /> */}
//       <Hero />
//       <div className="flex">
//       {/* <video src="https://cdn.dribbble.com/userupload/8821410/file/original-a43ed3576e845f158a25765140cce801.mp4" autoPlay muted loop style={{ width: '400px', height: '400px' }}/> */}
//       {/* <video src="https://cdn.dribbble.com/userupload/13540644/file/original-020e5afec3b51c1ef21a46463054bcbe.mp4"autoPlay muted loop style={{ width: '400px', height: '400px' }} /> */}
//       {/* <video src="https://cdn.dribbble.com/userupload/8821415/file/original-c6f867f003d0615678ac3f8cc96e3396.mp4" autoPlay muted loop style={{ width: '300px', height: '300px' }}/> */}
//       </div>
//     </>
//   );
// }

// Skill Grow Link

// skillgro.netlify.app

// https://preview.themeforest.net/item/skillgro-online-courses-education-react-nextjs-template/full_screen_preview/54075226?_ga=2.212656212.1926523651.1726733216-909028074.1724309693

// https://themeforest.net/search/course?srsltid=AfmBOooyLxCwkt5YiHQQ3mdaxuO_9aGRbjLG1eIMOZk4itGimEzDQ0zP
