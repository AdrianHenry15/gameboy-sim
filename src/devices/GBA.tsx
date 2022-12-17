import "../styles/GBA.scss"
import Soundcloud from "../components/SoundcloudFrame"
import { Consoles } from "../stores/schemas/Enums"
import DPad from "../components/DPad"

const GBALogo = require("../assets/imgs/oggameboy-logo.png")
const R = require("../assets/imgs/r-png.png")

interface GBAProps {
	switchComponent: (name: Consoles) => void
	track: string
	onRightDPadClick: () => void
	onLeftDPadClick: () => void
}

const GBA = (props: GBAProps) => {
	return (
		<div className='gba-container'>
			<label className='gba-nintendo-logo'>
				Nintendo
				<img className='gba-trademark' src={R} alt='trademark' />
			</label>
			<div className='gba-container-internal'>
				<div className='dpad-n-options'>
					<div className='gba-dpad-container'>
						<DPad onLeftDPadClick={() => props.onLeftDPadClick()} onRightClick={() => props.onRightDPadClick()} />
					</div>
					<div className='gba-option-btns-container'>
						<div
							onClick={() => {
								props.switchComponent(Consoles.GBCOLOR)
							}}
							className='gba-option-btn gba-pause-btn'></div>
						<div onClick={() => props.switchComponent(Consoles.SP)} className='gba-option-btn gba-select-btn'></div>
					</div>
				</div>
				<div className='gba-screen-container'>
					<div className='gba-pi-container'>
						<div className='gba-screen-n-logo'>
							<div className='gba-screen'>
								<Soundcloud track={props.track} />
							</div>
							<div className='gba-gameboy-label'>
								<img className='gba-logo' src={GBALogo} alt='gbLogo' />
							</div>
						</div>
					</div>
				</div>
				<div className='gba-controller-area'>
					<div className='gba-icon-container'>
						<div className='gba-icon-indicators'>
							<div className='gba-power-light'></div>
						</div>
						<label className='gba-power-label'>POWER</label>
					</div>
					<div className='gba-button-container'>
						<div className='gba-action-btns-container'>
							<button className='gba-action-btn gba-b-btn'>B</button>
							<button className='gba-action-btn gba-a-btn'>A</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GBA
