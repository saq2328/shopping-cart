import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        const {cartItems} = this.props;

        return (
            <div>
               {cartItems.length === 0 ? (<div className="cart cart-header">Cart is empty</div>)
               :
               (<div className="cart cart-header">You have {cartItems.length} in the cart{" "}</div>)}


                <div className="cart">
                    <ul className="cart-item">
                        {cartItems.map((item)=>(
                        <li key={item._id}>
                             <div>
                                 <img src={item.image} alt={item.title}></img>
                            </div>
                            <div>
                                <div>{item.title}</div>
                                <button onClick = {() => this.props.removeFromCart(item)}>
                                 Remove
                                </button>
                            </div>     
                        </li>
                        ))};
                    </ul>
                </div>
            </div>    
        );   
    }
}





