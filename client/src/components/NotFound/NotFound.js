import React from 'react';
import Card from '../../hoc/Card/Card';
import './NotFound.scss';


const notfound = ( props ) => {
    return (
		<Card>
			<div className="NotFound">
				<h2>Hm, não encontramos essa página :(</h2>
				<h2><a href="/">Página Inicial</a></h2>
			</div>
		</Card>
    );
};

export default notfound;