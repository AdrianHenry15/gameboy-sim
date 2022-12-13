import React from "react"
import "../styles/Soundcloud.scss"

const Soundcloud = () => {
	return (
		<>
			<iframe
				className='music-container'
				width='100%'
				height='100%'
				scrolling='no'
				frameBorder='no'
				allow='autoplay'
				src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1203060361&color=%23c5c3c3&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'></iframe>
			<div className='music-frame'>
				<a className='frame-profile' href='https://soundcloud.com/theadrianhenry' title='Adrian Henry' target='_blank'>
					Adrian Henry
				</a>{" "}
				·{" "}
				<a
					className='frame-song'
					href='https://soundcloud.com/theadrianhenry/design'
					title='Design | Beat For Sale'
					target='_blank'>
					Design | Beat For Sale
				</a>
			</div>
		</>
	)
}

export default Soundcloud
