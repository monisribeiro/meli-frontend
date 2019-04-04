import React from 'react';
import logo from '../../assets/Logo_ML@2x.png.png';
import search from '../../assets/ic_Search@2x.png.png';
import './Searchbar.scss';
import { withRouter} from "react-router-dom";



const searchbar = withRouter((props) => {
	
	var searchInput;
	var initialSearch = props.location.search !== '' ? decodeURI(props.location.search.split('search=')[1]) : '';
	
	function keyPressed(event) {
		if(event.keyCode === 13) {
			handleClick();
		}
	}
	
	function handleClick() {
		props.history.push('/items?search=' + searchInput.value);
	}
	
    return (
        <div className="Navbar">
			<div className="NavbarContent">
				<a href="/"><img src={logo} alt="Logo" className="Logo"/></a>
				<input placeholder="Busque produtos, marcas e muito mais..." defaultValue={initialSearch} onKeyDown={keyPressed} ref={(input) => searchInput = input} />
				<button onClick={handleClick} className="ButtonIcon">
					<img src={search} className="Icon" alt="Search"/>
				</button>
			</div>
        </div>
    );
});

export default searchbar;