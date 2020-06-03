import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import '../Containers/App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			people: [],
	        searchfield: ''
		}
	}

componentDidMount() {
		const urls = [
			'https://swapi.dev/api/people/',
			'https://swapi.dev/api/people/?page=2', 
			'https://swapi.dev/api/people/?page=3',
			'https://swapi.dev/api/people/?page=4',
			'https://swapi.dev/api/people/?page=5',
			'https://swapi.dev/api/people/?page=6',
			'https://swapi.dev/api/people/?page=7'
		]
		
		Promise.all(urls.map(async url => {
			const response = await fetch(url);
			const morePeople = await response.json();
			var combinedArrayOfPeople = this.state.people;
			combinedArrayOfPeople.push(morePeople.results);
			
			var sortedArrayOfPeople = combinedArrayOfPeople
				.flat()
				.sort((a, b) => a.name.localeCompare(b.name));
			
			this.setState({people: sortedArrayOfPeople})
		}))
		.catch(error => 
			console.log('Error during fetching of people:', error)
		);
	}

onSearchChange = (event) => {
	this.setState({ searchfield: event.target.value })
}

	render() {
		const { people, searchfield } = this.state;
		const filteredPeople = people.filter(people => people.name.toLowerCase().includes(searchfield.toLowerCase()));
		return (

	<div className='tc'>
	    <h1>Star Wars Character Database</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<CardList people={filteredPeople} />
		</Scroll>
		</div>
	);
}
}
	
export default App;