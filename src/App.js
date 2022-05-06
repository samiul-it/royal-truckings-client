import './App.css';
import Login from './Pages/Authentication/Login/Login';
import Home from './Pages/Home/Home/Home';
import NavigationBar from './Pages/Home/Shared/NavigationBar/NavigationBar';
import Register from './Pages/Authentication/Register/Register';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Loading from './Pages/Loading/Loading';
import PasswordReset from './Pages/Authentication/PsswordReset/PasswordReset';
import RequireAuth from './Pages/Authentication/Utilities/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route
          path="/register"
          element={
              <Register></Register>
          }
        ></Route>
        <Route
          path="/password-reset"
          element={<PasswordReset></PasswordReset>}
        ></Route>
      </Routes>

      {/*Toasify Credentails */}

      <ToastContainer />
    </div>
  );
}

export default App;
