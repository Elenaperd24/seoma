import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { accionType } from "../../context/reducer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from "@mui/material/Button";
import imgPc from "../detalleProducto/AppWeb/Static.PNG";
import { useStateValue } from "../../context/Stateprovider";
import swal from "sweetalert";

import './cart.css'


const Cart = () => {
	const [{ user, carro }, dispatch] = useStateValue()
	const [cart, setCart] = useState()
	const [reload, setReload] = useState(false)
	const [priceTotal, setPriceTotal] = useState(0)


	
	useEffect(() => {
		let cont = 0
		console.log(localStorage.getItem("cart"));
	
		if (localStorage.getItem("cart") !== null) {
			let localCart = localStorage.getItem("cart")
			console.log(JSON.parse(localCart));
			setCart(JSON.parse(localCart))
			JSON.parse(localCart).map((item)=>{
				return(
					cont = cont + item.price
				)
			})

			setPriceTotal(cont)
			let largo= JSON.parse(localCart).length
			dispatch({
				type: accionType.CARRO,
				carro: largo
			})
			
			
		}
		else{
			setCart(null)
			setPriceTotal(0)
			
			dispatch({
				type: accionType.CARRO,
				user: 0
			})
		}
	}, [reload])




//setPriceTotal(cont)


const continuealert= ()=>{

	swal({
		title: "Request sent" ,
		icon: "success",
		buttons: "ok"
	})
	localStorage.removeItem("cart")
	setReload(!reload)

}


 const clearCart = () =>{
	console.log("CLEAR");
	localStorage.removeItem("cart")
	setReload(!reload)
} 



	//const [counter, setCounter] = useState(0);

	return (
		<div id="cart">
			<div className="cartContenedor">
				{/* CONTACT */}

				
				
				<div className="cartInfo">
					<h3 className="cartTitle" >Contact information</h3>
					<Box className="cartBox">
						<TextField  fullWidth label="Name" id="Name" value={user.datosUser.name + " " +user.datosUser.lastName } />
					</Box>
					<Box className="cartBox">
						<TextField fullWidth label="" id="Email"  defaultValue={user.datosUser.email} />
					</Box>
					<Box className="cartBox">
						<TextField fullWidth label="Direction" id="Direction" />
					</Box>
					<Box className="cartBox">
						<TextField fullWidth label="Phone Number" id="Phone Number" />
					</Box>
				</div>
			


				
				{/* SHOPPING CART */}
				<div className='shopping-cart'>
					<h3 className="cartTitle">
						My shopping cart
					</h3>


					{/* CART ITEM */}
					{cart?.map((item) => {
						return (
							<div className="cart-item" >
								<div>
									<img src={process.env.PUBLIC_URL + `/img/equipments/${item.image[0]}`} alt="images"></img>
								</div>
								<div >
									<p>{item.name}</p>
								</div>
								<div className="cart-item-max" >
									<Stack direction="row" spacing={1}>
										
										<p style={{
											marginTop: "1vh",
											
										}}></p>
								
									</Stack>
								</div>
								<div className="cart-item-price" >
									<p>${item.price}</p>
								</div>
							</div>

						)
					})
					}



					{/* TOTAL */}
					<div className="cart-total" >
						<div>
							<h5 ><strong>Total</strong></h5>
						</div>
						<div>
							<h5 ><strong>${priceTotal}</strong></h5>
						</div>
					</div>

				</div>
			</div>

			{/* BOTON CONTINUR */}
			<div className="cart-boton">

				<div onClick={continuealert} className="myButton" >Continue</div>

			</div>
			<div className="cart-boton">

				<button onClick={clearCart} className="myButton">Clear Cart</button>

			</div>
		</div>
	);
};

export default Cart;
