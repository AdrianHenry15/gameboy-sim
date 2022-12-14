import "../styles/Enter.scss"

interface EnterProps {
	enterApplication: () => void
}

const Enter = ({ enterApplication }: EnterProps) => {
	return (
		<div className='enter-container'>
			<button onClick={() => enterApplication()} className='enter-btn-container'>
				<label className='enter-label' htmlFor='enter'>
					Enter
				</label>
			</button>
		</div>
	)
}

export default Enter
