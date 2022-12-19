import "../styles/DeviceControls.scss"

//icons
import { BiDownArrow, BiLeftArrow, BiRightArrow, BiUpArrow } from "react-icons/bi"
import { BsFillPlayCircleFill } from "react-icons/bs"
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri"

const DeviceControls = () => {
	return (
		<div className='device-controller-btns-container'>
			{/* Up */}
			<div className='device-btn-wrapper'>
				<button className='device-btn device-up'>
					<div className='device-arrow'>
						<BiUpArrow />
					</div>
				</button>
				<span className='device-description'>Find Stream/Playlist</span>
			</div>

			{/* Left */}
			<div className='device-btn-wrapper'>
				<button className='device-btn device-left'>
					<div className='device-arrow'>
						<BiLeftArrow />
					</div>
				</button>
				<span className='device-description'>Find Song</span>
			</div>

			{/* Down */}
			<div className='device-btn-wrapper'>
				<button className='device-btn device-down'>
					<div className='device-arrow'>
						<BiDownArrow />
					</div>
				</button>
				<span className='device-description'>Find Stream/Playlist</span>
			</div>

			{/* Right */}
			<div className='device-btn-wrapper'>
				<button className='device-btn device-right'>
					<div className='device-arrow'>
						<BiRightArrow />
					</div>
				</button>
				<span className='device-description'>Find Song</span>
			</div>

			{/* Middle DPad */}
			<div className='device-btn-wrapper'>
				<div className='device-arrow device-circle'>
					<BsFillPlayCircleFill />
				</div>
				<span className='device-description'>Play/Pause Music</span>
			</div>

			{/* Left/Start Button */}
			<div className='device-option-btns-container'>
				<div className='device-options'>
					<div className='device-option-wrapper'>
						<RiArrowDropLeftLine className='device-left-arrow' />
						<div className='device-option-btn-1'></div>
						<RiArrowDropRightLine className='device-left-arrow' />
					</div>
					<div className='device-option-wrapper'>
						<RiArrowDropLeftLine className='device-left-arrow' />
						<div className='device-option-btn-2'></div>
						<RiArrowDropRightLine className='device-left-arrow' />
					</div>
					<div className='device-option-wrapper'>
						<RiArrowDropLeftLine className='device-left-arrow' />
						<div className='device-option-btn-3'></div>
						<RiArrowDropRightLine className='device-left-arrow' />
					</div>
				</div>
				<span className='device-description'>Find Gameboy</span>
			</div>

			{/* A */}
			<div className='device-btn-wrapper'>
				<button className='device-action-btn'>A</button>
				<span className='device-description'>Select Stream/Playlist/Song</span>
			</div>

			{/* B */}
			<div className='device-btn-wrapper'>
				<button className='device-action-btn'>B</button>
				<span className='device-description'>Deselect Stream/Playlist</span>
			</div>

			{/* X */}
			<div className='device-btn-wrapper'>
				<button className='device-action-btn'>X</button>
				<span className='device-description'>TBD</span>
			</div>

			{/* Y */}
			<div className='device-btn-wrapper'>
				<button className='device-action-btn'>Y</button>
				<span className='device-description'>TBD</span>
			</div>
		</div>
	)
}

export default DeviceControls
