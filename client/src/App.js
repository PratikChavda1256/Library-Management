import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Auth/Register';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoutes from './components/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminRoute from './components/Routes/AdminRoute';
import CreateCetegory from './pages/Admin/CreateCetegory';
import CreateProduct from './pages/Admin/CreateProduct';
import Profile from './pages/user/Profile';
import Orders from './pages/user/Orders';
import Products from './pages/Admin/Products';
import Search from './pages/Search';
import UpdateProduct from './pages/Admin/UpdateProduct';
import CartPage from './pages/CartPage';
import ProductDetails from './pages/ProductDetails';
import AdminOrders from './pages/Admin/AdminOrders';
import ManagerRoute from './components/Routes/ManagerRoute';
import ManagerDash from './pages/Manager/ManagerDash';
import ManagerProduct from './pages/Manager/ManagerProduct';
import ManageProduct from './pages/Manager/ManageProduct';
import UpdateManagerProduct from './pages/Manager/UpdateManagerProduct';
import ManagerOrder from './pages/Manager/ManagerOrder';
import EmpDash from './pages/employee/EmpDash';
import EmpProduct from './pages/employee/EmpProduct';
import EmpUpdate from './pages/employee/EmpUpdate';
import EmpOrder from './pages/employee/EmpOrder';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<CartPage />} />
        {/* this is meaning is to perform a nested routes first protect rout check and nest rout are perform */}
        <Route path="/dashboard" element={<PrivateRoutes />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/order" element={<Orders />} />

        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCetegory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>
        {/* this is code is manager */}
        <Route path="/dashboard" element={<ManagerRoute />}>
          <Route path="manager" element={<ManagerDash />} />
          <Route path="manager/create-product" element={<ManagerProduct />} />
          <Route path="manager/product/:slug" element={<UpdateManagerProduct />} />
          <Route path="manager/products" element={<ManageProduct />} />
          <Route path="manager/orders" element={<ManagerOrder />} />
        </Route>
        {/* employee */}
        <Route path='/dashboard' element={<ManagerRoute />}>
          <Route path="employee" element={<EmpDash />} />
          <Route path="employee/products" element={<EmpProduct />} />
          <Route path="employee/product/:slug" element={<EmpUpdate />} />
          <Route path="employee/orders" element={<EmpOrder />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
