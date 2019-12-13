import React from 'react';
import Card from './Card';

const CardList = ({people}) => {
	return (
	    <div>
	     	{people.map((user, i)  => {
		return (<Card 
		key={i} 
		name={people[i].name}
		birth_year={people[i].birth_year}
		height={people[i].height}
		/>
);
	})}
	    </div>
	);
}

export default CardList;