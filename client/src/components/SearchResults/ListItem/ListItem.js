import React from 'react';
import './ListItem.scss';
import  shipping from "../../../assets/ic_shipping.png";
import { Link } from "react-router-dom";


const listitem = ( props ) => {
    return (
		<div className="ListItem">
			<img src={props.item.picture} alt={props.item.title} className="Thumbnail"/>
			<Link className="ItemLink" to={`/items/${props.item.id}`} >
				<h2>
					$ {props.item.price.amount.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
					{props.item.free_shipping ? <img height="14" className="Icon" src={shipping} alt="shipping"/> : null}
				</h2>
				<p>{props.item.title}</p>
				<p>{props.item.condition}</p>
			</Link>
			<div className="State">
				<p>{props.item.seller_address.state.name}</p>
			</div>
		</div>
    );
};

export default listitem;