import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as CustomLink, useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from "@material-ui/icons/Apps";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase/firebase-config";
import { userSignOut } from "../../redux/user/user.actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "inline-flex",
    },
  },
  secondaryButton: {
    marginRight: theme.spacing(2),
  },
  linkBrand: {
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  linkBrandSmall: {
    display: "none",
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      display: "inline-block",
    },
  },
  drawer: {
    width: 256,
    flexShrink: 0,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  drawerContainer: {
    width: 256,
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Navigation(props) {
  const history = useHistory();
  const classes = useStyles();
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const content = {
    brand: { image: "mui-assets/img/logo-pied-piper-white.png", width: 120 },
    "brand-small": {
      image: "mui-assets/img/logo-pied-piper-white-icon.png",
      width: 32,
    },
    product: "Product",
    contact: "contact",
    "secondary-action": "Sign in",
    "primary-action": "Sign up",
    "primary-sign-out": "Sign out",
    ...props.content,
  };

  let brand = content["brand"].text || "";
  let brandSmall = content["brand-small"].text || "";

  if (content["brand"].image) {
    brand = (
      <img src={content["brand"].image} alt="" width={content["brand"].width} />
    );
  }

  if (content["brand-small"].image) {
    brandSmall = (
      <img
        src={content["brand-small"].image}
        alt=""
        width={content["brand-small"].width}
      />
    );
  }

  const buckets = {
    main: Array.isArray(props.bucketMain) ? props.bucketMain : [],
  };

  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, open });
  };
  const handleSignOut = () => {
    auth.signOut();
    dispatch(userSignOut());
    history.push("/login");
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Link
            component={CustomLink}
            to="/"
            variant="h5"
            color="inherit"
            underline="none"
            className={classes.linkBrand}
          >
            {brand}
          </Link>
          <Link
            component={CustomLink}
            to="/"
            variant="h5"
            color="inherit"
            underline="none"
            className={classes.linkBrandSmall}
          >
            {brandSmall}
          </Link>
          {currentUser ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                auth.signOut();
                dispatch(userSignOut());
                history.push("/login");
              }}
            >
              {content["primary-sign-out"]}
            </Button>
          ) : (
            <>
              <Button
                color="inherit"
                className={classes.secondaryButton}
                component={CustomLink}
                to="/login"
              >
                {content["secondary-action"]}
              </Button>
              <Button
                variant="contained"
                color="secondary"
                component={CustomLink}
                to="/register"
              >
                {content["primary-action"]}
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem
              button
              key={content["product"]}
              component={CustomLink}
              to="/services"
            >
              <ListItemIcon>
                <LiveHelpIcon />
              </ListItemIcon>
              <ListItemText primary={content["product"]} />
            </ListItem>
            <ListItem
              button
              key={content["contact"]}
              component={CustomLink}
              to="/contact"
            >
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary={content["contact"]} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
        <div className={classes.drawerContainer}>
          <List>
            <ListItem
              button
              key={content["product"]}
              component={CustomLink}
              to="/services"
            >
              <ListItemIcon>
                <LiveHelpIcon />
              </ListItemIcon>
              <ListItemText primary={content["product"]} />
            </ListItem>
            <ListItem
              button
              key={content["contact"]}
              component={CustomLink}
              to="/contact"
            >
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary={content["contact"]} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <div>
          {buckets["main"].map((component, idx) => (
            <React.Fragment key={idx}>{component}</React.Fragment>
          ))}
        </div>
      </main>
    </div>
  );
}
