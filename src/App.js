import { useEffect } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import IndexPage from "./pages/Index.js";
import ContactPage from "./pages/Contact.js";
import ServicesPage from "./pages/Services.js";
import LoginPage from "./pages/Login.js";
import RegisterPage from "./pages/Register.js";
import NotfoundPage from "./pages/Notfound.js";
import { useDispatch, useSelector } from "react-redux";
import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
} from "./firebase/firebase-config.js";
import { setUser } from "./redux/user/user.actions.js";
const history = createBrowserHistory();

export default function App() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(setUser(userAuth));
      }
    });
    return () => {
      unsubscribe();
    };
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
        <Route
          exact
          path="/login"
          render={() => (currentUser ? <Redirect to="/" /> : <LoginPage />)}
        ></Route>
        <Route
          exact
          path="/register"
          render={() => (currentUser ? <Redirect to="/" /> : <RegisterPage />)}
        ></Route>
        <Route exact path="/notfound">
          <NotfoundPage />
        </Route>
      </Switch>
    </Router>
  );
}
