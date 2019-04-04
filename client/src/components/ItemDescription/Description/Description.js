import React from 'react';
import './Description.scss';


const description = ( props ) => {
    return (
		<div className="Description">
			<h1>Descrição do Produto</h1>
			<p>{props.description}</p>
		</div>
    );
};

export default description;