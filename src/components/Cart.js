import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Item from "./Item";
import PromoForm from "./PromoForm";

class Cart extends Component {
   constructor(props) {
       super(props);
       this.getSum = this.getSum.bind(this);
   }

    getSum() {
        const { items } = this.props;
        const map = items.map(item => item.qty * item.price );
        const total = map.reduce((a,b) => a + b);
        return total;
    }

    render() {
        const {items} = this.props;
        const childElements =  items.map(item => {
            return (
                 <Item item={item}
                       className="item"
                       key={item.id}
                 />
         )
        });

        return (
            <div>
                <table>
                    <caption>Ваша корзина</caption>
                    <thead>
                    <tr>
                        <th>Товар</th>
                        <th>Описание</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th>Удалить</th>
                    </tr>
                    </thead>
                    <tbody>
                    {childElements}
                    </tbody>
                    <tfoot className="tfoot">
                    <tr>
                        <td colSpan={2} className="promo-form">
                        <PromoForm/>
                        </td>
                        <td></td>
                        <td>
                            <p>Сумма заказа:</p>
                            <p className="promo">Промокод:</p>
                            <p>Всего:</p>
                        </td>
                        <td>
                            <p>{this.getSum()} руб.</p>
                            <p className="promo" style={this.props.promo? {opacity: '1'} : {opacity: '0'}}>-1800 руб.</p>
                            <p>{this.props.promo? (this.getSum() -1800) : (this.getSum())} руб.</p>
                        </td>
                    </tr>
                    </tfoot>
                </table>
                <button type="button" className="create-order">Оформить заказ</button>
            </div>
        );
    }
}

Cart.propTypes = {
    items: PropTypes.array.isRequired,
    promo: PropTypes.bool
};

const mapStateToProps = state => ({
    items: state.cart.items,
    promo: state.cart.promo
});

export default connect(mapStateToProps)(Cart);
