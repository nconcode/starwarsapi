import React from 'react';

const Card = ({ name, birth_year, height }) => {
	return (
		<div className='tc bg-white-70 dib br3 pa3 ma2 grow'>
			<img alt='Star Wars Characters' src='https://image.businessinsider.com/5dceb1907eece53e71466e02?width=2500&format=jpeg&auto=webp' height="200" width="200" />
			<div>
				<h2>{name}</h2>
				<p>{birth_year}</p>
				<p>{height}</p>
			</div>
		</div>
		);
}

export default Card;