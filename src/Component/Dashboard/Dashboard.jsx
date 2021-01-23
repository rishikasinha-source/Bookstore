import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import Appbar from "../Appbar/Appbar";
import Books from "../Displaybooks/Displaybooks";



const useStyles = makeStyles((theme) => ({
    dashboardMain:{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    }
}))    

export default function Dashboard(props) {
    const classes = useStyles();

    return (
        <div className={classes.dashboardMain}>
            <Appbar />
            <Books />
           
        
        </div>
    )
}