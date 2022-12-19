import React from 'react'
import Item from '../../components/Item/Item'
import styles from './styles/ItemList.module.scss';

const ItemList = ({ products }) => {
	return (
		<div className={styles.container}>
				{products.map((product) =>
						<Item key={product.id} product={product} />
				)}
		</div>
  )
}

export default ItemList
