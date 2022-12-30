import React, { useEffect, useState } from "react";
// import { getFirestore, doc, getDoc } from 'firebase/firestore';

// import ErrorPage from "../../pages/ErrorPage/ErrorPage";
// import Spinner from "../../assets/Spinners/Spinner";
// import OrderDetail from '../../components/OrderDetail/OrderDetail';

const Order = ({ orderId }) => {

  // const [order, setOrder] = useState([]);
  // const [valid, setValid] = useState(true);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  // }, []);

  // useEffect(() => {
  //   const querydb = getFirestore();
  //   const queryDoc = doc(querydb, 'orders', id);
  //   getDoc(queryDoc)
  //     .then(order => !order.exists() ? setValid(false) : setOrder({ id: order.id, ...order.data() })
  //   )},
  // [id])

	return (
		<h1>Orden: {orderId}</h1>
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
