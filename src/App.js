import './App.css';
import Home from './Pages/Home/Home/Home';
import NavigationBar from './Pages/Home/Shared/NavigationBar/NavigationBar';


function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Home></Home>

      
      <h1>Welcome to Royal Truckings BD LTD</h1>
      <p className="text-info">The Website is under Development,keep Patience and Stay with us</p>
    </div>
  );
}

export default App;
