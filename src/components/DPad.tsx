import "../styles/DPad.scss"
import { BiDownArrow, BiLeftArrow, BiRightArrow, BiUpArrow } from "react-icons/bi"
import { BsFillPlayCircleFill } from "react-icons/bs"

const DPad = () => {
	return (
		<>
			<button className='dpad-btn left-dpad'>
				<div className='dpad-arrow left-dpad-arrow'>
					<BiLeftArrow />
				</div>
			</button>
			<button className='dpad-btn up-dpad'>
				<div className='dpad-arrow up-dpad-arrow'>
					<BiUpArrow />
				</div>
			</button>
			<div className='dpad-arrow circle-dpad'>
				<BsFillPlayCircleFill />
			</div>
			<button className='dpad-btn down-dpad'>
				<div className='dpad-arrow down-dpad-arrow'>
					<BiDownArrow />
				</div>
			</button>
			<button className='dpad-btn right-dpad'>
				<div className='dpad-arrow right-dpad-arrow'>
					<BiRightArrow />
				</div>
			</button>
		</>
	)
}

export default DPad
