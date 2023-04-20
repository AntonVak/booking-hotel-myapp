import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import HotelPage from "./mainPages/hotels/hotelPage";
import OrderPage from "./mainPages/order/orderPage";
import Login from "./mainPages/signForm/login";
import HomePage from "./mainPages/home/homePage";
import RegisterForm from "./mainPages/signForm/registerForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/hotels" component={HotelPage} />
        <Route path="/order" component={OrderPage} />
        <Route path="/signin" component={Login} />
        <Route path="/signUp" exact component={RegisterForm} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
