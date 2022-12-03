import React from "react"
import "./GameAndWatch.scss"
import Soundcloud from "../Tools/Soundcloud/Soundcloud"
import { Consoles } from "../../App"
import DPad from "../Tools/DPad/DPad"

const GameAndWatchLogo = require("../../assets/imgs/oggameboy-logo.png")
const R = require("../../assets/imgs/r-png.png")

interface GameAndWatchProps {
	switchComponent: (name: Consoles) => void
}

const GameAndWatch = ({ switchComponent }: GameAndWatchProps) => {
	return (
		<div className='gnw-container'>
			<div className='gnw-nintendo-logo'>
				Nintendo
				<img className='gnw-trademark' src={R} alt='trademark' />
			</div>
			<div className='gnw-container-internal'>
				<div className='dpad-n-options'>
					<div className='gnw-dpad-container'>
						<DPad />
					</div>
				</div>
				<div className='gnw-screen-container'>
					<div className='gnw-pi-container'>
						<div className='gnw-screen-n-logo'>
							<div className='gnw-screen'>
								<Soundcloud />
							</div>
							<div className='gnw-gameboy-label'>
								<img className='gnw-logo' src={GameAndWatchLogo} alt='gbLogo' />
							</div>
						</div>
					</div>
				</div>
				<div className='gnw-controller-area'>
					<div className='gnw-icon-container'>
						<div className='gnw-icon-indicators'>
							<div className='gnw-power-light'></div>
						</div>
						<div className='gnw-power-label'>POWER</div>
					</div>
					<div className='gnw-option-btns-container'>
						<div
							onClick={() => {
								switchComponent(Consoles.DS)
							}}
							className='gnw-option-btn gnw-pause-btn'></div>
						<div onClick={() => switchComponent(Consoles.OGGAMEBOY)} className='gnw-option-btn gnw-select-btn'></div>
					</div>
					<div className='gnw-button-container'>
						<div className='gnw-action-btns-container'>
							<div className='gnw-action-btn gnw-b-btn'>B</div>
							<div className='gnw-action-btn gnw-a-btn'>A</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GameAndWatch
