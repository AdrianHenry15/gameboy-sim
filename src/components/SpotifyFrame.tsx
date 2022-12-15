const SpotifyFrame = () => {
	return (
		<>
			<iframe
				src='https://open.spotify.com/embed/album/085jWa6hJW0fumsJfzviiQ?utm_source=generator'
				width='100%'
				height='100%'
				frameBorder='0'
				allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
				loading='lazy'></iframe>
			<div className='music-frame'></div>
		</>
	)
}

export default SpotifyFrame
