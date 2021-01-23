import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { fade, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import CssBaseline from "@material-ui/core/CssBaseline";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "#A03037",
  },
  toolBar:{
    display: "flex",
    justifyContent: "space-around",
  },
  leftOptions:{
    display: "flex",
    width: "50%",
    justifyContent: "space-around",
    alignItems: "center"
  },
  rightOptions:{
      display: "flex",
      alignItems: "center"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#ffff",
    display: "flex",
    justifyContent: "flex-start",
    color: "gray",
    height: "40px",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "70%",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    color: "gray",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Appbar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.AppBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.leftOptions}>
            <img src="/assets/education.png" />
            <Typography variant="h6">Bookshop</Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </div>
          <div className="profile">
            <IconButton> <PersonOutlineOutlinedIcon /> </IconButton>
          </div>
          <div className={classes.rightOptions}>
           Cart <ShoppingCartOutlinedIcon />
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}


