import React, { Component } from 'react';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';
import Order from '../../components/Order/Order';
import axois from '../../axios-orders';
import { connect } from 'react-redux';


class Orders extends Component {
    componentDidMount() {
        this.props.onFetchOrders(this.props.token, this.props.userId);
        // axois.get('/orders.json')
        // .then(res => {
        //     const fetchedOrders = [];
        //     for (let key in res.data) {
        //         fetchedOrders.push({
        //                 ...res.data[key],
        //                 id: key
        //             });
        //     }
        //     this.setState({loading: false, orders: fetchedOrders});
        // })
        // .catch(error => {
        //     this.setState({loading: false});
        // })
    }

    render() {
        let orders = <Spinner />;
        if (!this.props.loading) {
            orders =
                this.props.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price}
                    />
                ))
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchtoProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    };
};

export default connect(mapStateToProps, mapDispatchtoProps)(withErrorHandler(Orders, axois));