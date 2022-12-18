import "../styles/Soundcloud.scss"

interface ISoundcloudFrameProps {
	track: string
}

const SoundcloudFrame = (props: ISoundcloudFrameProps) => {
	return (
		<>
			<iframe
				title="Adrian Henry's Songs"
				className='music-container'
				width='100%'
				height='100%'
				scrolling='no'
				frameBorder='no'
				allow='autoplay'
				src={props.track}></iframe>
			<div className='music-frame'>
				<a
					className='frame-profile'
					href='https://soundcloud.com/theadrianhenry'
					title='Adrian Henry'
					rel='noreferrer'
					target='_blank'>
					Adrian Henry
				</a>{" "}
				·{" "}
				<a
					className='frame-song'
					href='https://soundcloud.com/theadrianhenry/design'
					title='Design | Beat For Sale'
					target='_blank'
					rel='noreferrer'>
					Design | Beat For Sale
				</a>
			</div>
		</>
	)
}

export default SoundcloudFrame
