import React, {useState} from 'react';
import styles from './styles/Checkout.module.css';
import { useCartContext } from "../../context/CartContext";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import {Link} from 'react-router-dom'
import { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useParams } from "react-router-dom"; 

import {
	Paper,
  Box,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Button
} from '@mui/material';
import Order from '../../containers/Order/Order';

const Checkout = () => {
	const [goToPayment, setGoToPayment] = useState(false);
	const [customer, setCustomer] = useState();
	const { cart, totalPrice, totalProducts } = useCartContext();
	const {id} = useParams();

	const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
  });

	const {
		register,
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(validationSchema)
	});

	const onSubmit = (data) => {
		setCustomer(data);
		setGoToPayment(true);
	};

	const order = {
		buyer: customer,
		items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
		total: totalPrice(),
	}

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
      .then(({ id }) => console.log(id))
  }

	return (
		<Fragment>
			<Paper className={styles.paper}>
				<Box px={3} py={2}>
					<Typography variant="h6" align="center" margin="dense">
						Checkout register
					</Typography>

					<Grid container spacing={1}>
						<Grid item xs={12} sm={12}>
							<TextField
								required
								id="fullname"
								name="fullname"
								label="Full Name"
								fullWidth
								margin="dense"
								{...register('fullname')}
								error={errors.fullname ? true : false}
							/>
							<Typography variant="inherit" color="textSecondary">
								{errors.fullname?.message}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								id="username"
								name="username"
								label="Username"
								fullWidth
								margin="dense"
								{...register('username')}
								error={errors.username ? true : false}
							/>
							<Typography variant="inherit" color="textSecondary">
								{errors.username?.message}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								id="email"
								name="email"
								label="Email"
								fullWidth
								margin="dense"
								{...register('email')}
								error={errors.email ? true : false}
							/>
							<Typography variant="inherit" color="textSecondary">
								{errors.email?.message}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								id="password"
								name="password"
								label="Password"
								type="password"
								fullWidth
								margin="dense"
								{...register('password')}
								error={errors.password ? true : false}
							/>
							<Typography variant="inherit" color="textSecondary">
								{errors.password?.message}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								id="confirmPassword"
								name="confirmPassword"
								label="Confirm Password"
								type="password"
								fullWidth
								margin="dense"
								{...register('confirmPassword')}
								error={errors.confirmPassword ? true : false}
							/>
							<Typography variant="inherit" color="textSecondary">
								{errors.confirmPassword?.message}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={
									<Controller
										control={control}
										name="acceptTerms"
										defaultValue="false"
										inputRef={register()}
										render={({ field: { onChange } }) => (
											<Checkbox
												color="primary"
												onChange={e => onChange(e.target.checked)}
											/>
										)}
									/>
								}
								label={
									<Typography color={errors.acceptTerms ? 'error' : 'inherit'}>
										I have read and agree to the Terms *
									</Typography>
								}
							/>
							<br />
							<Typography variant="inherit" color="textSecondary">
								{errors.acceptTerms
									? '(' + errors.acceptTerms.message + ')'
									: ''}
							</Typography>
						</Grid>
					</Grid>

					<Box mt={3} className={styles.btncont}>
						<Button className={styles.btn}
							variant="contained"
							color="primary"
							onClick={handleSubmit(onSubmit)}
						>
							Register
						</Button>
						{
							goToPayment ? <Link to='/payment' element={<Order order={order} id={id} />}><Button  className={styles.btn}	variant="contained"	color="primary"	onClick={handleClick} >
							Go to Payment </Button></Link> : <p></p>
						}
					</Box>
				</Box>
			</Paper>
		</Fragment>
	);
};

export default Checkout;
