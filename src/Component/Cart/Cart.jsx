import React from 'react';
import "./Cart.css";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Cart() {
    const classes = useStyles();

    const [books, setBooks] = React.useState([])
    const [details, setDetails] = React.useState(false);
    const [summary, setSummary] = React.useState(false);
    const [count, setCount] = React.useState(1);
    const [value, setValue] = React.useState();
    const [removeBook, setRemoveBook] = React.useState([])

    const handleDetails = () => {
        setDetails(true);
    };

    const handleSummary = () => {
        setSummary(true);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const decrement = () =>{
        setCount(count-1);
    }

    const increment = () =>{
        setCount(count+1);
    }

    return(
        <div className="cart">
          <div className="item-details">
            <span className="heading">
              My cart({count})
            </span>
            <div className="book-quantity">
            {books.map((data,i) => (
                <div key={i} className="books-count">
                  <div className="pic1">
                    <img src="../assets/Image.png"  />
                  </div>
                  <div className="book-title">
                    <div className="details">
                        <div className="book-titleCart">{data.product_id.description}</div>
                        <div className="author">{data.product_id.author}</div>
                        <div className="price">Rs.{data.product_id.price}</div>
                    </div>
                    <div className="counter">
                      <div className="plus-minus">
                        <button className="minus-button" onClick={decrement}>-</button>
                        <span className="show-number">{count}</span>
                        <button className="plus-button" onClick={increment}>+</button>
                        </div>
                        <div>
                           <button className="remove" onClick={() => removeBook(data.product_id)}>Remove</button></div>
                        </div>
                        </div>
                    </div>
            ))}
                <div className="place-order">
                    <button className="order-button" onClick={handleDetails}>PLACE ORDER</button>
                </div>
                </div>
                </div>
                <div>
                {!details ?
                    <div className="customer-details">
                        <span>Customer details</span>
                    </div>
                    :
                    <div className="details-open">
                        <span>Customer details</span>
                        <form>
                            <div className="name-phone">
                                <TextField
                                    size="small"
                                    id="outlined-basic"
                                    label="Name"
                                    variant="outlined"
                                />
                                <div className="mr">
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        label="Phone Number"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                            <div className="pin">
                                <TextField
                                    size="small"
                                    id="outlined-basic"
                                    label="Pincode"
                                    variant="outlined"
                                />
                                <div className="mr">
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        label="Locality"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                            <div className="address">
                                <TextField
                                    size="small"
                                    id="outlined-multiline-static"
                                    label="Address"
                                    multiline
                                    fullWidth
                                    rows={3}
                                    variant="outlined"
                                />
                            </div>
                            <div className="pin">
                                <TextField
                                    size="small"
                                    id="outlined-basic"
                                    label="City/Town"
                                    variant="outlined"
                                />
                                <div className="mr">
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        label="Landmark"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                            <div className="radio-buttons">
                                <span>Type</span>
                                <div className="radio" onChange={handleChange}>
                                    <FormControlLabel  size="small" value="Home" control={<Radio />} label="Home" />
                                    <FormControlLabel  size="small" value="Work" control={<Radio />} label="Work" />
                                    <FormControlLabel  size="small" value="Other" control={<Radio />} label="Other" />
                                </div>
                            </div>
                            <div className="continue-button">
                            <button className="order-button" onClick={handleSummary}>CONTINUE</button>
                            </div>
                        </form>
                    </div>
                };
                <div>
                {!summary ?
                    <div className="summary">
                        <span>Order Summary</span>
                    </div>
                    :
                    <div className="details-open">
                            <div className="continue-button">
                                <span>Order summary</span>
                            <button className="order-button">CHECKOUT</button>
                            </div>
                    </div>
                }
            </div>
        </div>
        </div>
    );
} 
