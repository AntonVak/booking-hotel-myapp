import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import OrderPage from "./mainPages/order/orderPage";
import Login from "./mainPages/signForm/login";
import RegisterForm from "./mainPages/signForm/registerForm";
import Hotels from "./mainPages/hotels/hotels";
import HomePage from "./mainPages/home/homePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/hotels/:hotelsFav" component={Hotels} />
        <Route path="/order" component={OrderPage} />
        <Route path="/signin" component={Login} />
        <Route path="/signUp" exact component={RegisterForm} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
