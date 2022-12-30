import React from 'react'
import Item from '../../components/Item/Item'
import '../../pages/Initial/Initial.css'

const ItemList = ({ products }) => {
	return (
		<div className='itemList'>
				{products.map((product) =>
						<Item key={product.id} product={product} />
				)}
		</div>
  )
}

export default ItemList
