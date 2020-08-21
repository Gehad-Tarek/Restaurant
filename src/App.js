import React from 'react';
import './style.scss';
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './HomePage/Home';
import MenuPage from './InternalPages/menu/Menu';
import Login from './InternalPages/login/Login';
import ContactUs from './InternalPages/contact-us/ContactUs';
import AboutUs from './InternalPages/about-us/AboutUs';
import Register from './InternalPages/login/register/Register';
import ForgetPassword from './InternalPages/login/forget-password/ForgetPassword';
// import No from './No';


// const Home = props => <h1>Hoooome</h1>

export default function App() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Router >
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/ay7aga" component={No} /> */}
          <Route path="/menu" component={MenuPage} />
          <Route path="/login" component={Login} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/register" component={Register} />
          <Route path="/forget-password" component={ForgetPassword} />
        </Switch>
      </Router>
    </>
  );
}