import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import NotFound from './components/NotFound/NotFound';
import SearchPlaceholder from './components/SearchPlaceholder/SearchPlaceholder';
import SearchResults from './containers/SearchResults/SearchResults';
import ItemDescription from './containers/ItemDescription/ItemDescription';
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

class App extends Component {
	
	state = {
		categories: []
	}
	
	updateCategories = (newCategories) => {
		this.setState({categories: newCategories});
	}
	
	render() {
		return (
			<BrowserRouter>
				<Searchbar>
				</Searchbar>	
				<div className="MainBody">
					<div className="Categories">
						{this.state.categories.join(' > ')}
					</div>
					<Switch>
						<Route path="/" exact component={SearchPlaceholder} />
						<Route path="/items" exact render={props => <SearchResults {...props} key={this.props.location.search} updateCategories={this.updateCategories}/>} />
						<Route path="/items/:id" exact render={props => <ItemDescription {...props}/>} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</ BrowserRouter>
		)
	}
}

export default withRouter(App);
