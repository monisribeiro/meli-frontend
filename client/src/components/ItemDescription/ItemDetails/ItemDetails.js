import React from 'react';
import './ItemDetails.scss';
import Description from '../Description/Description';


const itemdetails = ( props ) => {
    return (
		<div className="ItemDetails">
			<div>
				<a href="javascript:history.back()"> &lt; Voltar à Lista</a>
				<img src={props.item.picture} alt="Item"/>
				<Description description={props.item.description}></Description>
			</div>
			<div className="Options">
				<p>{props.item.condition} - {props.item.sold_quantity} vendidos</p>
				<h2>{props.item.title}</h2>
				<h1 className="BigText">$ {props.item.price.amount.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</h1>
				<button className="ButtonPrimary">Comprar </button>
			</div>
		</div>
    );
};

export default itemdetails;