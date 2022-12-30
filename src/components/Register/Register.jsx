import React, {useState, Fragment} from 'react';

import './Register.css'

import { useCartContext } from "../../context/CartContext";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import OrderContainer from '../../containers/OrderContainer/OrderContainer';

import * as Yup from 'yup';

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


const Form = () => {
	const [goToPayment, setGoToPayment] = useState(false);
	const [customer, setCustomer] = useState();
	const [orderId, setOrderId] = useState();
	const { cart, totalPrice, clearCart } = useCartContext();

	const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

	const validationSchema = Yup.object().shape({
    lastname: Yup.string()
			.required('Last name is required')
			.min(6, 'First name must be at least 6 characters')
      .max(20, 'First name must not exceed 20 characters'),
    firstname: Yup.string()
      .required('First name is required')
      .min(6, 'First name must be at least 6 characters')
      .max(20, 'First name must not exceed 20 characters'),
		phone: Yup.string()
			.matches(phoneRegExp, 'Phone number is not valid')
			.required('Phone is required'),
		password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
		email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    confirmEmail: Yup.string()
      .required('Confirm Email is required')
      .oneOf([Yup.ref('email'), null], 'Confirm Email does not match'),
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

	const date = new Date();
	const current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
	const current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
	const date_time = current_date+" "+current_time;	

	const order = {
		buyer: customer,
		items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
		total: totalPrice(),
		date: date_time,
	}

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
			.then( ({id} ) => {
				setOrderId(id)}
				)
		clearCart()
  }

	if(orderId) return(<OrderContainer orderId={orderId}/>)
	
	return (
		<Fragment>
			<Paper className='paper'>
				<Box px={3} py={2}>
					<Typography variant="h6" align="center" margin="dense">
						Register
					</Typography>

					<Grid container spacing={1}>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								id="lastname"
								name="lastname"
								label="Last Name"
								fullWidth
								margin="dense"
								{...register('lastname')}
								error={errors.lastname ? true : false}
							/>
							<Typography variant="inherit" color="textSecondary">
								{errors.lastname?.message}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								id="firstname"
								name="firstname"
								label="First name"
								fullWidth
								margin="dense"
								{...register('firstname')}
								error={errors.firstname ? true : false}
							/>
							<Typography variant="inherit" color="textSecondary">
								{errors.firstname?.message}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								id="phone"
								name="phone"
								label="Phone"
								fullWidth
								margin="dense"
								{...register('phone')}
								error={errors.phone ? true : false}
							/>
							<Typography variant="inherit" color="textSecondary">
								{errors.phone?.message}
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
								id="confirmEmail"
								name="confirmEmail"
								label="Confirm Email"
								type="email"
								fullWidth
								margin="dense"
								{...register('confirmEmail')}
								error={errors.confirmEmail ? true : false}
							/>
							<Typography variant="inherit" color="textSecondary">
								{errors.confirmEmail?.message}
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

					<Box mt={3} className='btncont'>
						<Button className='btn'
							variant="contained"
							color="primary"
							onClick={handleSubmit(onSubmit)}
						>
							Register
						</Button>
						{
							goToPayment ? 
								<Button  className='btn'	variant="contained"	color="primary"	onClick={handleClick} >
								Go to Payment 
								</Button>
							 : <p></p>
						}
					</Box>
				</Box>
			</Paper>
		</Fragment>
	);
};

export default Form;
