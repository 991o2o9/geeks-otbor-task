import React, { useEffect, useState } from 'react'

const PokemomnsCards = ({ elem }) => {
	const [url, setUrl] = useState()
	const fetchUrl = async () => {
		const response = await fetch(elem.url)
		const result = await response.json()
		setUrl(result)
	}
	useEffect(() => {
		fetchUrl()
	}, [])
	console.log(url)
	return (
		<div className='section-cards'>
			{url && (
				<div className='cards'>
					<span>{elem.name}</span>
					<img src={url.sprites.front_default} alt='' />
				</div>
			)}
		</div>
	)
}

export default PokemomnsCards
