import React, { Component } from 'react';
import {validatePromo} from '../actions/cartActions';
import { connect } from 'react-redux';

class PromoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.validatePromo = this.validatePromo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    validatePromo() {
        const {value} = this.state;
        const bool = value === '123456';
        this.props.validatePromo(bool);
        if (value === '123456') {
            this.setState({value: ''});
        }
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <form >
                <label className="label-promo" htmlFor={'#input'}>
                    Есть промокод?</label>
                <div className="promo-container">
                    <input type="text"
                           name="promo"
                           value={this.state.value}
                           onChange={this.handleChange}
                           placeholder="Введите промокод"
                           id="input"/>
                <button type="button"
                        onClick={this.validatePromo}
                        className="use-promo"
                >
                    Применить
                </button>
                </div>
            </form>
        );
    }
}

export default connect(null, {validatePromo})(PromoForm);
