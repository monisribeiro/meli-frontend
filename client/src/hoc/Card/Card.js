import React from 'react';


const card = ( props ) => {
    return (
		<div className="Card">
			<div className="CardContent">
				{props.children}
			</div>
		</div>
    );
};

export default card;