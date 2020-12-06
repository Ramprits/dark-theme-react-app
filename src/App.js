import { useEffect } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import IndexPage from "./pages/Index.js";
import ContactPage from "./pages/Contact.js";
import ServicesPage from "./pages/Services.js";
import LoginPage from "./pages/Login.js";
import RegisterPage from "./pages/Register.js";
import NotfoundPage from "./pages/Notfound.js";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./firebase/firebase-config.js";
import { setUser } from "./redux/user/user.actions.js";
const history = createBrowserHistory();

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getCurrentUser().then((user) => {
      dispatch(
        setUser({
          email: user.email,
          displayName: user.displayName,
          emailVerified: user.emailVerified,
        })
      );
    });
    return () => {};
  }, []);
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route exact path="/services">
          <ServicesPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/register" component={RegisterPage}></Route>
        <Route exact path="/notfound">
          <NotfoundPage />
        </Route>
      </Switch>
    </Router>
  );
}
