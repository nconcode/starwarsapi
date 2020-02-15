import React from 'react';

const Card = ({ name, birth_year, height }) => {
	return (
		<div className='tc bg-white-70 dib br3 pa3 ma2 grow'>
			<img alt='Star Wars Characters' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png' height="200" width="200" />
			<div>
				<h2>{name}</h2>
				<p>{birth_year}</p>
				<p>{height}</p>
			</div>
		</div>
		);
}

export default Card;