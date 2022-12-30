import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import OrderDetail from "../../components/OrderDetail/OrderDetail";

// import ErrorPage from "../../pages/ErrorPage/ErrorPage";
// import Spinner from "../../assets/Spinners/Spinner";
// import OrderDetail from '../../components/OrderDetail/OrderDetail';

const Order = ({ orderId }) => {

	const [orderDetail, setOrderDetail] = useState([])
  // const [valid, setValid] = useState(true);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  // }, []);
console.log(orderId)

useEffect(() => {
	const querydb = getFirestore();
	const queryDoc = doc(querydb, 'orders', orderId);
	
	getDoc(queryDoc)
		.then(order => { setOrderDetail({ orderId: order.id, ...order.data() } )})
	}, [orderId])

	return (
		<OrderDetail orderDetail={orderDetail} />
	)
}


//   if (valid === false) {
//     return (
//       <> { loading ? <Spinner /> : <ErrorPage /> } </>
//     )
//   } else {
//     return (
//       <> { loading ? <Spinner /> : <OrderDetail order={order} /> } </>
//     )
//   }
// };

export default Order;
