import React, { Component } from 'react';
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";


export default class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: null
        };
    }
    openModal = (product) => {
        this.setState({ product: null });
    }
    closeModal = () =>{
        this.setState({product: null})
    }
    render() {
        const {product} = this.state;
        return (
            <div>
                <Fade bottom cascade>
                <ul className="products">
                    {this.props.products.map((product) =>(
                        <li key={product._id}>
                            <div className="product">
                                <a href={"#" + product._id} onClick={() => this.openModal(product)}>
                                    <img src={product.image} alt={product.title}></img>
                                    <p>
                                        {product.title}
                                    </p>
                                </a>
                                <div className="product-price">
                                    <div>
                                        {formatCurrency(product.price)}
                                    </div>
                                    <button onClick={() => this.props.addToCart(product)} className="button primary">
                                        Add To Cart
                                    </button>
                                </div>
                            </div> 
                        </li>
                    ))}
                </ul>
                </Fade>
                {product && (
                  <Modal isOpen = {true}
                  onRequestClose={this.closeModal}>
                    <Zoom>
                        <button className="close-modal" onClick={this.closeModal}>x</button>
                        <div>Modal</div>
                    </Zoom>
                  </Modal>)
                }
            </div>
        );
    }
}