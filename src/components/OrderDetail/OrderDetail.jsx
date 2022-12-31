import React from 'react';
import './OrderDetail.css'

const OrderDetail = ({ orderDetail }) => {
	console.log(orderDetail)
	return (
		<div>
			<h2 className="name"> Thank you for your order! </h2>
			{/* <h3 className="greeting"> {orderDetail.buyer.lastname}  {orderDetail.buyer.firstname} </h3>
			<h3 className="greeting"> {orderDetail.buyer.phone} </h3> */}
			<div className='king'>
				<div className='card'>
					<div className='description1'> 
						<p>Order No : {orderDetail.orderId} </p>
						<p>Date : {orderDetail.date}</p>
					</div>
					<div className='description'>
						{/* <h1>{orderDetail.items[0].title}</h1>
						<h2>$ {orderDetail.items[0].price}</h2>
						<h5>Quantity: {orderDetail.items[0].quantity}</h5> */}
						<h5>Total: $ {orderDetail.total} </h5>
					</div>
				</div>
			</div>
		</div>
	)
};

export default OrderDetail;
