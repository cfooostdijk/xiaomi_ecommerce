import React from 'react';
import styles from './styles/Order.module.css';

const Order = ({order, id}) => {
	return (
		<div className={styles.order}>que onda{order}{id}</div >
	)
};

export default Order;
