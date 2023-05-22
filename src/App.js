import './App.css';
import Login from './Pages/Authentication/Login/Login';
import Home from './Pages/Home/Home/Home';
import NavigationBar from './Pages/Home/Shared/NavigationBar/NavigationBar';
import Register from './Pages/Authentication/Register/Register';
// import "react-toastify/dist/ReactToastify.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Loading from './Pages/Loading/Loading';
import PasswordReset from './Pages/Authentication/PsswordReset/PasswordReset';
import RequireAuth from './Pages/Authentication/Utilities/RequireAuth/RequireAuth';
import Items from './Pages/Items/Items';
import ManageItem from './Pages/ManageItem/ManageItem';
import Error from './Pages/Error/Error';
import About from './Pages/Home/About/About';
import Blog from './Pages/Home/Blog/Blog';
import AddItem from './Pages/AddItem/AddItem';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import MyItems from './Pages/MyItems/MyItems';
import AllItems from './Pages/AllItems/AllItems';
import Footer from './Pages/Home/Shared/Footer/Footer';



function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/items"
          element={
            <RequireAuth>
              <AllItems></AllItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage-inventories"
          element={
            <RequireAuth>
              <ManageInventories></ManageInventories>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/item/:id"
          element={
            <RequireAuth>
              <ManageItem></ManageItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/password-reset"
          element={<PasswordReset></PasswordReset>}
        ></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>

      {/*Toasify Credentails */}

      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
