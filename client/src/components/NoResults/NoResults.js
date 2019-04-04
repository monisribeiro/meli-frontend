import React from 'react';
import './NoResults.scss'


const noresults = ( props ) => {
    return (
		<div className="NoResults">{props.message}</div>
    );
};

export default noresults;