import "../styles/OGGameboy.scss"
import Soundcloud from "../components/SoundcloudFrame"
import { Consoles } from "../stores/schemas/Enums"
import DPad from "../components/DPad"
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri"

const OGGameboyLogo = require("../assets/imgs/oggameboy-logo.png")
const TM = require("../assets/imgs/tm-png.png")

interface OGGameboyProps {
	switchComponent: (name: Consoles) => void
	track: string
	onRightDPadClick: () => void
	onLeftDPadClick: () => void
}

const OGGameboy = (props: OGGameboyProps) => {
	return (
		<div className='ogg-container'>
			<div className='ogg-screen-container'>
				<div className='screen-lines red-line'></div>
				<div className='dot-matrix'>DOT MATRIX WITH STEREO SOUND</div>
				<div className='screen-lines blue-line'></div>
				<div className='ogg-pi-container'>
					<div className='ogg-icon-container'>
						<div className='ogg-icon-indicators'>
							<div className='ogg-power-light'></div>
						</div>
						<div className='ogg-power-label'>BATTERY</div>
					</div>
					<div className='ogg-screen-n-logo'>
						<div className='ogg-screen'>
							<Soundcloud track={props.track} />
						</div>
					</div>
				</div>
			</div>
			<div className='ogg-controller-area'>
				<div className='ogg-nintendo-logo'>
					Nintendo
					<img className='ogg-logo' src={OGGameboyLogo} alt='gbLogo' />
					<img className='ogg-trademark' src={TM} alt='trademark' />
				</div>
				<div className='ogg-button-container'>
					<div className='ogg-dpad-container'>
						<DPad onLeftDPadClick={() => props.onLeftDPadClick()} onRightClick={() => props.onRightDPadClick()} />
					</div>
					<div className='ogg-action-btns-container'>
						<div className='btn-imprint'></div>
						<div className='ogg-action-btn ogg-b-btn'>B</div>
						<div className='ogg-action-btn ogg-a-btn'>A</div>
					</div>
				</div>
				<div className='ogg-option-btns-container'>
					<div
						onClick={() => {
							props.switchComponent(Consoles.GAMEANDWATCH)
						}}
						className='ogg-option-btn ogg-pause-btn'>
						<RiArrowDropLeftLine className='ogg-left-arrow' />
					</div>
					<div onClick={() => props.switchComponent(Consoles.GBCOLOR)} className='ogg-option-btn ogg-select-btn'>
						<RiArrowDropRightLine className='ogg-right-arrow' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default OGGameboy
