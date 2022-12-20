import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/nav/Header";
import RegisterComplete from "./pages/auth/RegisterComplete";
import ForgotPassword from "./pages/auth/ForgotPassword";
import History from "./pages/user/History";
import UserRoute from "./components/routes/UserRoute";
import AdminRoute from "./components/routes/AdminRoute";
import Password from "./pages/user/Password";
import Wishlist from "./pages/user/Wishlist";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CategoryCreate from "./pages/admin/category/CategoryCreate";
import CategoryUpdate from "./pages/admin/category/CategoryUpdate";
import SubCreate from "./pages/admin/sub/SubCreate";
import SubUpdate from "./pages/admin/sub/SubUpdate";
import ProductCreate from "./pages/admin/product/ProductCreate";
import AllProducts from "./pages/admin/product/AllProducts";
import ProductUpdate from "./pages/admin/product/ProductUpdate";
import NutritionEmergency from "./pages/admin/nutrition/NutritionEmergency";
import NutritionSpecific from "./pages/admin/nutrition/NutritionEmergency";
import CreateAnnouncement from "./pages/admin/announcement/CreateAnnouncement";
import School from "./pages/admin/facility/School";
import Evacuation from "./pages/admin/facility/Evacuation";


import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { currentUser } from "./functions/auth";

const App = () => {
  const dispatch = useDispatch();

  //check firebase auth state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        console.log("user", user);

        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => console.log(err));
      }
    });
    // cleanup
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/complete" element={<RegisterComplete />} />
        <Route path="/forgot/password" element={<ForgotPassword />} />
        <Route path="/user">
          <Route index element={<UserRoute />} />
          <Route path="announcement" element={<History />} />
          <Route path="chatbox" element={<Password />} />
          <Route path="dashboard" element={<Wishlist />} />
          <Route path="incident" element={<Password />} />
          <Route path="profile" element={<Wishlist />} />
          <Route path="safety" element={<Wishlist />} />
        </Route>
        <Route path="/admin">
          <Route index element={<AdminRoute />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="category" element={<CategoryCreate />} />
          <Route path="category/:slug" element={<CategoryUpdate />} />
          <Route path="sub" element={<SubCreate />} />
          <Route path="sub/:slug" element={<SubUpdate />} />
          <Route path="product" element={<ProductCreate />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="product/:slug" element={<ProductUpdate />} />
          <Route path="nutritionemergency" element={<NutritionEmergency />} />
          <Route path="nutritionspecific" element={<NutritionSpecific />} />
          <Route path="createannouncement" element={<CreateAnnouncement />} />
          <Route path="facilityschool" element={<School />} />
          <Route path="facilityevacuation" element={<Evacuation />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
