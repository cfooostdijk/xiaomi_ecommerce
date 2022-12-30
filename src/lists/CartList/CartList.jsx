import React from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../../components/ItemCart/ItemCart";
import '../../pages/Initial/Initial.css'

import BackToProducts from "../../components/Buttons/BackToProducts/BackToProducts";
import GoToCheckout from '../../components/Buttons/GoToCheckout/GoToCheckout';
import TrashAllItems from "../../components/Buttons/TrashAllItems/TrashAllItems";


const CartList = () => {
	const { cart, totalPrice, clearCart } = useCartContext();

	return (
		<>
			<div className='cartList'>
				<BackToProducts />
				<div> { cart.map(product => <ItemCart key={product.id} product={product} /> )}</div>
				<div className='totalAmount'>Total: $ {totalPrice()}</div>
				<GoToCheckout />
				<p onClick={() => clearCart()} ><TrashAllItems /></p>
			</div>
		</>
	)
};

export default CartList;
