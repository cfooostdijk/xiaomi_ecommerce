import React from 'react';
import './OrderDetail.css'

const OrderDetail = ({ orderDetail }) => {
	console.log(orderDetail)
	return (
		<div className="receipt">
			<h2 className="name"> Xiaomi Ecommerce </h2>
			<p className="greeting"> Thank you for your order! </p>

			{/* <p className="greeting"> {orderDetail.buyer.lastname} </p> */}
			{/* <p className="greeting"> {orderDetail.buyer.phone} </p> */}
			
			<div className="order">
				<p> Order No : {orderDetail.orderId} </p>
				<p> Date : {orderDetail.date} </p>
			</div>
			<hr/>

			<div className="details">
				<h3> Details </h3>
				<div className="product">
					<div className="info">
						{/* <h4> {orderDetail.items[0].title} </h4> */}
						{/* <p> {orderDetail.items[0].quantity} </p> */}
					</div>
				</div>
				{/* <p> $ {orderDetail.items[0].price} </p> */}
			</div>

			<div className="totalprice">
				<p className="tot"> Total <span> {orderDetail.total} </span> </p>
			</div>
		</div>
	)
};

export default OrderDetail;
