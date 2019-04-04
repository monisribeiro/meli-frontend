import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Card  from '../../hoc/Card/Card';
import Loading from '../../components/Loading/Loading';
import NoResults from '../../components/NoResults/NoResults';
import ListItem from '../../components/SearchResults/ListItem/ListItem';
import './SearchResults.scss';


class SearchResults extends Component {
	
	searchResultsHtml = '';
	results = [];
	
	componentDidUpdate(prevProps) {
		if(this.props.location.search !== prevProps.location.search) {
			this.searchResultsHtml = '';
			this.makeCall();
		}
	}
	
	componentDidMount() {		
		this.makeCall()
	}
	
	makeCall = () => {
		this.callSearchApi()
		  .then(res => {
			  this.results = res;
			  if(!res.items.length) { 
				var message = `Não encontramos resultados para: <b>${this.props.location.search.split('search=')[1]}</b> 
				<br /> Tente pesquisar novamente!`
				this.searchResultsHtml = <NoResults message={message}></NoResults>
			  } else { 
				this.searchResultsHtml = res.items.map(item => {
					return ( 
						<li key={item.id}>
							<ListItem item={item}></ListItem>
						</li>
					);
				});
			  }
			  this.forceUpdate();
		  })
		  .catch(err => console.log(err));
	}
  
	callSearchApi = async () => {
		const response = await fetch('/api/items?q=' + this.props.location.search.split('search=')[1]);
		const body = await response.json();
		if (response.status !== 200) throw Error(body.message);

		return body;
	};
	  
    render() {
		if(this.searchResultsHtml !== '') {
			return (
				<div className="SearchResults">
					<div className="Categories">
						{this.results.categories.join(' > ')}
					</div>
					<Card>
						<ul className="List">
							{this.searchResultsHtml}
						</ul>
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

export default withRouter(SearchResults);