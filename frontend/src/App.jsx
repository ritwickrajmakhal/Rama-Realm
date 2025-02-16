import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Landingpage from './pages/Landingpage';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/ContactPage';
import '@fortawesome/fontawesome-free/css/all.min.css';


// importing Admin features
import AdminHomepage from './pages/Admin/AdminHomepage';
import NotificationAdmin from './pages/Admin/NotificationAdmin';
import AdminCourses from './pages/Admin/CoursesAdmin';
import RatingAdmin from './pages/Admin/RatingAdmin';
import RevenueAdmin from './pages/Admin/RevenueAdmin';
import UserManagement from './pages/Admin/UserManagement';
import AdminHelpcenter from './pages/Admin/HelpcenterAdmin';
import CreateCourse from './pages/Admin/CreateCourse';
// importing Learner features
import LearnerHomepage from './pages/Learner/LearnerHomepage';
import CourseDetails from './pages/Learner/CourseDetails';
import Profile from './pages/Learner/Profile';
import Pricing from './Components/Pricing/Pricing';
import Learnerpricing from './pages/Learner/Learnerpricing';
import PageNotFound from './pages/PageNotFound';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

        {/* importing Admin features */}
        <Route path="/Admin" element={<AdminHomepage />} />
        <Route path="/NotificationAdmin" element={<NotificationAdmin />} />
        <Route path="/CoursesAdmin" element={<AdminCourses />} />
        <Route path="/RatingAdmin" element={<RatingAdmin />} />
        <Route path="/RevenueAdmin" element={<RevenueAdmin />} />
        <Route path="/UserManagement" element={<UserManagement />} />
        <Route path="/HelpCenterAdmin" element={<AdminHelpcenter />} />
        <Route path="/CreateCourse" element={<CreateCourse />} />
        {/* importing Admin features */}
        <Route path="/Learner" element={<LearnerHomepage />} />
        <Route path="/Learner/CourseDetails/:id" element={<CourseDetails />} />
        <Route path="/Learner/Profile" element={<Profile />} />
        {/* implementing pricing features */}
        <Route path='/Pricing' element={<Pricing />} />
        <Route path="/learnerpricing" element={<Learnerpricing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
