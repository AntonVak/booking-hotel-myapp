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
        <Route path="/hotels" component={Hotels} />
        <Route path="/hotels/:hotelsFav" component={Hotels} />
        <Route path="/order" component={OrderPage} />
        <Route path="/signin" component={Login} />
        <Route path="/signUp" exact component={RegisterForm} />
        <Route path="/" component={HomePage} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
