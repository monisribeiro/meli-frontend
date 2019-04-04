import React from 'react';
import Card from '../../hoc/Card/Card';
import './SearchPlaceholder.scss';
import logo from '../../assets/Logo_ML@2x.png.png';


const searchplaceholder = ( props ) => {
    return (
        <Card>
			<div className="SearchPlaceholder">
				<img src={logo} alt="Logo"/>
				<h1>Bem vindo ao Mercado Livre!</h1>
				<h2>Faça uma busca para começar a comprar!</h2>
			</div>
        </Card>
    );
};

export default searchplaceholder;