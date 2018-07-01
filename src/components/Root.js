import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';
import PropTypes from 'prop-types';

class Root extends Component {
    constructor(props) {
        super(props);
        this.allItems = this.allItems.bind(this);
    }

    allItems() {
        const {items} = this.props;
        const all = items.map(item => item.qty).reduce((a,b) => a + b);
        return <span>{all}</span>;
    }
    render() {
        return (
            <div className="app">
                <div className="header">
                    <img src={require("../image/cart.png")}
                         className="cart-img"
                         alt="корзина"
                    />
                    <div className="cart-label">{this.allItems()}</div>
                </div>
                <Cart className="cart"/>
            </div>
        );
    }
}

Root.propTypes = {
    items: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    items: state.cart.items
});

export default connect(mapStateToProps)(Root);
