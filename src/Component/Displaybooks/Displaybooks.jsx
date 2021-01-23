import React from "react";
import { Button } from "@material-ui/core";
import "./Displaybooks.css";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Service from '../../Service/userService';
import Appbar from "../Appbar/Appbar";

const service = new Service();

const theme = createMuiTheme({

    palette: {
        primary:{
            main: '#fff',
        },
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
        },
      },

  });


export default function DisplayBooks(){

    const [books,setBooks]= React.useState([]);

    const getAllBooks = () => {
        service.getBooks().then((data) => {
            let array = data.data.result;
            console.log(array);
            setBooks(array);
        }).catch(error => {
            console.log(error);
        })
      }

    React.useEffect(() => { 
        getAllBooks();
      }, [] )

    return(
        <div className="display-book">
            <div className="headerPart">
                <span>Books<span className="length">({books.length} items)</span></span>
            </div>
            <div className="books">
                {books.map((data,i) => (  
                    <div key={i} className="main">
                        <div className="book-image">
                            <div className="image">
                                <img src="/assets/Image.png" />
                            </div>
                        </div>
                        <div className="description">
                            <div className="book-title">
                                <div><small className="book-title">{data.description}</small></div>
                                <div><small className="author">{data.author}</small></div>
                                <div><small className="price">Rs.{data.price}</small></div>
                            </div>
                            <div className="buttons">
                                <button className="add-button">ADD TO BAG</button>
                                <button className="wish-button">WISHLIST </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
} 