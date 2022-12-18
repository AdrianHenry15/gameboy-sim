import "../styles/GBColor.scss"
import { BiRightArrow } from "react-icons/bi"
import Soundcloud from "../components/SoundcloudFrame"
import { Consoles } from "../stores/schemas/Enums"
import DPad from "../components/DPad"
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri"

const GBColorLogo = require("../assets/imgs/gameboy-color-logo.png")
const R = require("../assets/imgs/r-png.png")

interface GBColorProps {
	switchComponent: (name: Consoles) => void
	track: string
	onRightDPadClick: () => void
	onLeftDPadClick: () => void
}

const GBColor = (props: GBColorProps) => {
	return (
		<div className='gc-container'>
			<div className='gc-screen-container'>
				<div className='gc-pi-container'>
					<div className='gc-icon-container'>
						<div className='gc-icon-indicators'>
							<div className='gc-power-light'></div>
							<div className='gc-arrow-ind'>
								<BiRightArrow />
							</div>
							<div className='gc-arrow-ind'>
								<BiRightArrow />
							</div>
							<div className='gc-arrow-ind'>
								<BiRightArrow />
							</div>
						</div>
						<label className='gc-power-label'>POWER</label>
					</div>
					<div className='gc-screen-n-logo'>
						<div className='gc-screen'>
							<Soundcloud track={props.track} />
						</div>
						<div className='gc-gameboy-label'>
							<img className='gc-logo' src={GBColorLogo} alt='gbLogo' />
						</div>
					</div>
				</div>
			</div>
			<div className='gc-controller-area'>
				<label className='gc-nintendo-logo'>
					Nintendo
					<img className='gc-trademark' src={R} alt='trademark' />
				</label>
				<div className='gc-button-container'>
					<div className='gc-dpad-container'>
						<DPad onLeftDPadClick={() => props.onLeftDPadClick()} onRightClick={() => props.onRightDPadClick()} />
					</div>
					<div className='gc-action-btns-container'>
						<button className='gc-action-btn gc-b-btn'>B</button>
						<button className='gc-action-btn gc-a-btn'>A</button>
					</div>
				</div>
				<div className='gc-option-btns-container'>
					<div
						onClick={() => {
							props.switchComponent(Consoles.OGGAMEBOY)
						}}
						className='gc-option-btn gc-pause-btn'>
						<RiArrowDropLeftLine className='gc-left-arrow' />
					</div>
					<div onClick={() => props.switchComponent(Consoles.GBA)} className='gc-option-btn gc-select-btn'>
						<RiArrowDropRightLine className='gc-right-arrow' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default GBColor
