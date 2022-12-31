import React from 'react';
import './OrderDetail.css'

const OrderDetail = ({ orderDetail }) => {
	console.log(orderDetail)
	return (
		<div className="receipt">
			<h2 className="name"> Xiaomi Ecommerce </h2>
			<p className="greeting"> Thank you for your order! </p>
			<h3 className="greeting"> Name: {orderDetail.buyer.lastname}  {orderDetail.buyer.firstname} </h3>
			<h3 className="greeting"> Phone: {orderDetail.buyer.phone} </h3>
			<div className="order">
				<p> Order No : {orderDetail.orderId} </p>
				<p> Date : {orderDetail.date} </p>
			</div>
			<hr/>
			<div>
				<h3> Details </h3>
				<div className="product">
					<div className="info">
						<h4> Product: {orderDetail.items[0].title} <span> $ {orderDetail.items[0].price} </span></h4>
						<p> Quantity: {orderDetail.items[0].quantity} </p>
					</div>
				</div>
			</div>

			<div>
				<h3> Total: $ <span> {orderDetail.total} </span> </h3>
			</div>
		</div>
	)
};

export default OrderDetail;

{/* <div className='king'>
	<div className='card'>
		<div className='description'>
			<h1>{orderDetail.items[0].title}</h1>
			<h2>$ {orderDetail.items[0].price}</h2>
			<h5>Quantity: {orderDetail.items[0].quantity}</h5>
			<h5>Total: $ <span> {orderDetail.total} </h5>
		</div>
	</div>
</div> */}