import React, { Component } from 'react';
import {incrementQty} from "../actions/cartActions";
import {decrementQty} from "../actions/cartActions";
import {deleteItem} from "../actions/cartActions";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Item extends Component {
    constructor(props) {
        super(props);

        this.handleIncrementItem = this.handleIncrementItem.bind(this);
        this.handleDecrementItem = this.handleDecrementItem.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleDecrementItem() {
        const { item } = this.props;
        if (item.qty > 1 ) {
            this.props.decrementQty(item);
        }
    }

    handleIncrementItem() {
        const item = this.props.item;
        this.props.incrementQty(item);
    }

    handleDeleteItem(){
        const item = this.props.item;
        this.props.deleteItem(item);
    }

    render() {
        const { item } = this.props;
        return (
                <tr>
                    <td>
                        <img src={item.image}
                             width="100"
                             height="125"
                             alt="img"
                        />
                    </td>
                    <td>{item.desc}</td>
                    <td>
                        <span onClick={this.handleDecrementItem}
                              className="decrement">-</span>
                        <span> {item.qty } </span>
                        <span onClick={this.handleIncrementItem}
                              className="increment">+</span>
                    </td>
                    <td>{item.price}</td>
                    <td onClick={this.handleDeleteItem}
                        className="delete">X</td>
                </tr>
        );
    }
}

Item.propTypes = {
    incrementQty: PropTypes.func.isRequired,
    decrementQty: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};

export default connect(null, {incrementQty, decrementQty, deleteItem})(Item);
