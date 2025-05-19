import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LayoutAbout from "./components/LayoutAbout/LayoutAbout";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Home__2 from "./pages/Home__2";
import { Contact } from "./pages/Contact";
import Home from "./pages/Home";
import ListSidebar from "./pages/list__sidebar";
import LayoutHeader from "./components/LayoutHeader/LayoutHeader";
import Account from "./pages/Account";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutHeader />}>
            <Route
              path="wishlist"
              element={<h1 className="mt-50"></h1>}
            ></Route>
            <Route path="account" element={<Account />}></Route>
          </Route>

          <Route path="/" element={<LayoutAbout />}>
            <Route index element={<Home />}></Route>
            <Route path="home" element={<Home__2 />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="shop" element={<ListSidebar />}></Route>
            <Route
              path="vendors"
              element={<h1 className="mt-50">Vendors</h1>}
            ></Route>
            <Route
              path="megamenu"
              element={<h1 className="mt-50">Mega Menu</h1>}
            ></Route>
            <Route path="blogs" element={<Blogs />}></Route>
            <Route
              path="pages"
              element={<h1 className="mt-50">Pages</h1>}
            ></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<h1>home</h1>}></Route>
            <Route path="aboutus" element={<h1>About Us</h1>}></Route>
            <Route path="myaccount" element={<h1>My Account</h1>}></Route>
            <Route path="wishlist" element={<h1>Wishlist</h1>}></Route>
            <Route
              path="ordertracking"
              element={<h1>Order Tracking</h1>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
