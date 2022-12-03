import React from "react"
import "./GameAndWatch.scss"
import Soundcloud from "../Tools/Soundcloud/Soundcloud"
import { Consoles } from "../../App"
import DPad from "../Tools/DPad/DPad"

const GameAndWatchLogo = require("../../assets/imgs/gamenwatch.png")
const R = require("../../assets/imgs/r-png.png")

interface GameAndWatchProps {
	switchComponent: (name: Consoles) => void
}

const GameAndWatch = ({ switchComponent }: GameAndWatchProps) => {
	return (
		<div className='gnw-container'>
			<div className='gnw-container-internal'>
				<div className='dpad-n-logo'>
					<img src={GameAndWatchLogo} className='gnw-logo'></img>
					<div className='gnw-dpad-container'>
						<DPad />
					</div>
				</div>
				<div className='gnw-screen-container'>
					<div className='mario-bros'>SUPER MARIO BROS.</div>
					<div className='gnw-pi-container'>
						<div className='gnw-screen-n-logo'>
							<div className='gnw-screen'>
								<Soundcloud />
							</div>
							<div className='gnw-nintendo-logo'>
								Nintendo
								<img className='gnw-trademark' src={R} alt='trademark' />
							</div>
						</div>
					</div>
				</div>
				<div className='gnw-controller-area'>
					<div className='gnw-option-btns-container'>
						<div
							onClick={() => {
								switchComponent(Consoles.DS)
							}}
							className='gnw-option-btn gnw-pause-btn'></div>
						<div onClick={() => switchComponent(Consoles.OGGAMEBOY)} className='gnw-option-btn gnw-select-btn'></div>
						<div className='gnw-option-btn special-option'></div>
					</div>
					<div className='gnw-button-container'>
						<div className='gnw-action-btns-container'>
							<div className='gnw-single-btn-container'>
								<div className='gnw-action-btn gnw-b-btn'></div>
								<span className='b-btn btn-label'>B</span>
							</div>
							<div className='gnw-single-btn-container'>
								<div className='gnw-action-btn gnw-a-btn'></div>
								<span className='a-btn btn-label'>A</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GameAndWatch
