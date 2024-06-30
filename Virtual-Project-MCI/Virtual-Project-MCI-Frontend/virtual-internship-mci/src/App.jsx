import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/auth/Login";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Register from "./pages/auth/Register";
import Product from "./pages/Product";
import DetailProduct from "./pages/DetailProduct";
import ShoppingCart from "./pages/ShoppingCart";
import Dashboard from "./pages/admin/Dashboard";
import DashboardAdmin from "./pages/admin/Dashboard";
import Faq from "./pages/admin/Faq";
import Profile from "./pages/admin/Profile";
import Review from "./pages/admin/Review";
import MyLikes from "./pages/admin/MyLikes";
import RecentOrder from "./pages/admin/RecentOrder";
import NewsLayout from "./pages/news/News";
import NewsContent from "./pages/news/content/NewsContent";
import JoinUs from "./pages/JoinUs";
import AboutUs from "./Components/AboutUs";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

function MainContent() {
  const location = useLocation();
  const showNavbar =
    location.pathname !== "/login" && location.pathname !== "/register";
  const showFooter =
    !location.pathname.startsWith("/admin") &&
    location.pathname !== "/login" &&
    location.pathname !== "/register";

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<Product />} />
        <Route path='/products/:id' element={<DetailProduct />} />
        <Route path='/products/cart' element={<ShoppingCart />} />
        <Route path='/join-us' element={<JoinUs />} />
        <Route path='/about-us' element={<AboutUsPage />} />

        <Route path='/news' element={<NewsLayout />} />
        <Route path='/news/:id' element={<NewsContent />} />

        <Route path='/admin' element={<DashboardAdmin />} />
        <Route path='/admin/faq' element={<Faq />} />
        <Route path='/admin/profile' element={<Profile />} />
        <Route path='/admin/review' element={<Review />} />
        <Route path='/admin/my-likes' element={<MyLikes />} />
        <Route path='/admin/recent-orders' element={<RecentOrder />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}

export default App;
