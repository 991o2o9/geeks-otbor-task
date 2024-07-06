import React, { useEffect, useState } from 'react'
import { API } from '../../helper/const'
import PokemomnsCards from './PokemomnsCards'

const PokemonsList = () => {
	const [pokemon, setPokemon] = useState([])

	const fetchApi = async () => {
		const response = await fetch(API)
		const result = await response.json()
		setPokemon(result.results)
	}

	useEffect(() => {
		fetchApi()
	}, [])

	return (
		<div className='pokemons-list'>
			{pokemon.map((elem, index) => (
				<PokemomnsCards key={index} elem={elem} />
			))}
		</div>
	)
}

export default PokemonsList
