import React, { Component } from 'react';
import './ItemDescription.scss';
import Card  from '../../hoc/Card/Card';
import Loading from '../../components/Loading/Loading';
import ItemDetails from '../../components/ItemDescription/ItemDetails/ItemDetails';
import NoResults from '../../components/NoResults/NoResults';

class ItemsDescription extends Component {	

	state = {
		item: undefined
	}
	
	html = '';

	componentDidMount() {	
		this.callItemApi()
		  .then(res => {
			  if(res.item) {
				this.setState({item: res.item});
				this.html = <ItemDetails item={this.state.item}></ItemDetails>;
			  } else { 
				this.setState({item: {}});
				this.html = <NoResults message="Item não foi encontrado!"></NoResults>;
			  }
			  this.forceUpdate();
		  })
		  .catch(err => console.log(err));
	}	
	
	callItemApi = async () => {
		const response = await fetch('/api/items/' + this.props.match.params.id);
		const body = await response.json();
		if (response.status !== 200) throw Error(body.message);

		return body;
	};
	
	render () {
		
		if (this.state.item) { 
			return (
				<div className="ItemDescription">
					<div className="Categories">
						Categories
					</div>
					<Card>
						{this.html}
					</Card>
				</div>
			);
		} else { 
			return (					
				<Card>
					<Loading></Loading>
				</Card>
			)
		}
	}
};

export default ItemsDescription;