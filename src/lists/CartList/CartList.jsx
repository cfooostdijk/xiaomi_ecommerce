import React from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../../components/ItemCart/ItemCart";
import '../../pages/Initial/Initial.css'

import BackToProducts from "../../components/Buttons/BackToProducts/BackToProducts";
import GoToRegister from "../../components/Buttons/GoToRegister/GoToRegister";
import TrashAllItems from "../../components/Buttons/TrashAllItems/TrashAllItems";


const CartList = () => {
	const { cart, totalPrice, clearCart } = useCartContext();

	return (
		<>
			<div className='cartList'>
				<BackToProducts />
				<div> { cart.map(product => <ItemCart key={product.id} product={product} /> )}</div>
				<div className='totalAmount'>Total: $ {totalPrice()}</div>
				<GoToRegister />
				<div onClick={() => clearCart()} ><TrashAllItems /></div>
			</div>
		</>
	)
};

export default CartList;
