import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Product__wiew from "./pages/Product__wiew";

const Layout = lazy(() => import("./components/Layout/Layout"));
const LayoutAbout = lazy(() => import("./components/LayoutAbout/LayoutAbout"));
const About = lazy(() => import("./pages/About"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Home__2 = lazy(() => import("./pages/Home__2"));
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const ListSidebar = lazy(() => import("./pages/list__sidebar"));
const LayoutHeader = lazy(() =>
  import("./components/LayoutHeader/LayoutHeader")
);
const Account = lazy(() => import("./pages/Account"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const Orders = lazy(() => import("./AccountPages/Orders"));
const Dashboard = lazy(() => import("./AccountPages/Dashboard"));
const TrackYourOrders = lazy(() => import("./AccountPages/TrackYourOrders"));
const MyAddress = lazy(() => import("./AccountPages/MyAddress"));
const AccountDetails = lazy(() => import("./AccountPages/AccountDetails"));
const Logout = lazy(() => import("./AccountPages/Logout"));
const ShopCategory = lazy(() => import("./components/Shop/ShopCategory"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* menu account, wishlist , cart */}
            <Route path="/" element={<LayoutHeader />}>
              <Route
                path="wishlist"
                element={<h1 className="mt-50">Wishlist</h1>}
              ></Route>
              <Route path="account" element={<Account />}></Route>
            </Route>
            {/* about */}
            <Route path="/" element={<LayoutAbout />}>
              <Route index element={<Home />}></Route>
              <Route path="shopcategory" element={<ShopCategory />}></Route>
              <Route path="home" element={<Home__2 />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="shop" element={<ListSidebar />}></Route>
              <Route path="vendors" element={<Product__wiew />}></Route>
              <Route path="megamenu" element={<h1>Mega Menu</h1>}></Route>
              <Route path="blogs" element={<Blogs />}></Route>
              <Route path="/blogs/:id" element={<BlogDetails />} />
              <Route path="pages" element={<h1>Pages</h1>}></Route>
              <Route path="contact" element={<Contact />}></Route>
            </Route>
            {/* header */}
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
            <Route path="account" element={<Account />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="orders" element={<Orders />} />
              <Route path="trackyourorder" element={<TrackYourOrders />} />
              <Route path="myaddress" element={<MyAddress />} />
              <Route path="accountdetails" element={<AccountDetails />} />
              <Route path="logout" element={<Logout />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
