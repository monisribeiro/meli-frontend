import React from 'react';


const loading = ( props ) => {
    return (
		<div className="Loading">
			<div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
			Carregando
		</div>
    );
};

export default loading;