import React from "react"
import "./SP.scss"
import { BiRightArrow } from "react-icons/bi"
import { BiLeftArrow } from "react-icons/bi"
import { BiUpArrow } from "react-icons/bi"
import { BiDownArrow } from "react-icons/bi"
import { BsFillPlayCircleFill } from "react-icons/bs"
import Soundcloud from "../Tools/Soundcloud/Soundcloud"
import { Consoles } from "../../App"
import DPad from "../Tools/DPad/DPad"

const SPLogo = require("../../assets/imgs/gameboy-color-logo.png")
const R = require("../../assets/imgs/r-png.png")

interface SPProps {
	switchComponent: (name: Consoles) => void
}

const SP = ({ switchComponent }: SPProps) => {
	return (
		<div className='full-wrapper'>
			<div className='sp-container-1'>
				<div className='dots-container'>
					<div className='dots'></div>
					<div className='middle-dot'></div>
					<div className='dots'></div>
				</div>
				<div className='sp-screen-container'>
					<div className='sp-pi-container'>
						<div className='sp-icon-container'></div>
						<div className='sp-screen-n-logo'>
							<div className='sp-screen'>
								<Soundcloud />
							</div>
							<div className='sp-gameboy-label'>
								<img className='sp-logo' src={SPLogo} alt='gbLogo' />
							</div>
						</div>
					</div>
				</div>
				<div className='dots-container'>
					<div className='dots'></div>
					<div className='dots'></div>
				</div>
			</div>
			<div className='sp-container-2'>
				<div className='divider'>
					<div className='rect'></div>
					<div className='rect'></div>
				</div>
				<div className='sp-controller-area'>
					<div className='sp-nintendo-logo'>
						Nintendo
						<img className='sp-trademark' src={R} alt='trademark' />
					</div>
					<div className='sp-button-container'>
						<div className='sp-dpad-container'>
							<DPad />
						</div>
						<div className='sp-action-btns-container'>
							<div className='sp-action-btn sp-b-btn'>B</div>
							<div className='sp-action-btn sp-a-btn'>A</div>
						</div>
					</div>
					<div className='sp-option-btns-container'>
						<div
							onClick={() => {
								switchComponent(Consoles.GBA)
							}}
							className='sp-option-btn sp-pause-btn'></div>
						<div onClick={() => switchComponent(Consoles.DS)} className='sp-option-btn sp-select-btn'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SP
