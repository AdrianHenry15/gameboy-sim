import "../styles/GBColor.scss"
import { BiRightArrow } from "react-icons/bi"
import Soundcloud from "../components/Soundcloud"
import { Consoles } from "../App"
import DPad from "../components/DPad"

const GBColorLogo = require("../assets/imgs/gameboy-color-logo.png")
const R = require("../assets/imgs/r-png.png")

interface GBColorProps {
	switchComponent: (name: Consoles) => void
}

const GBColor = ({ switchComponent }: GBColorProps) => {
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
						<div className='gc-power-label'>POWER</div>
					</div>
					<div className='gc-screen-n-logo'>
						<div className='gc-screen'>
							<Soundcloud />
						</div>
						<div className='gc-gameboy-label'>
							<img className='gc-logo' src={GBColorLogo} alt='gbLogo' />
						</div>
					</div>
				</div>
			</div>
			<div className='gc-controller-area'>
				<div className='gc-nintendo-logo'>
					Nintendo
					<img className='gc-trademark' src={R} alt='trademark' />
				</div>
				<div className='gc-button-container'>
					<div className='gc-dpad-container'>
						<DPad />
					</div>
					<div className='gc-action-btns-container'>
						<div className='gc-action-btn gc-b-btn'>B</div>
						<div className='gc-action-btn gc-a-btn'>A</div>
					</div>
				</div>
				<div className='gc-option-btns-container'>
					<div
						onClick={() => {
							switchComponent(Consoles.OGGAMEBOY)
						}}
						className='gc-option-btn gc-pause-btn'></div>
					<div onClick={() => switchComponent(Consoles.GBA)} className='gc-option-btn gc-select-btn'></div>
				</div>
			</div>
		</div>
	)
}

export default GBColor
