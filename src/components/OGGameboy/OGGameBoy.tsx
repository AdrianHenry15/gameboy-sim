import React from "react"
import "./OGGameboy.scss"
import { BiRightArrow } from "react-icons/bi"
import { BiLeftArrow } from "react-icons/bi"
import { BiUpArrow } from "react-icons/bi"
import { BiDownArrow } from "react-icons/bi"
import { BsFillPlayCircleFill } from "react-icons/bs"
import Soundcloud from "../Tools/Soundcloud/Soundcloud"
import { Consoles } from "../../App"
import DPad from "../Tools/DPad/DPad"

const OGGameboyLogo = require("../../assets/imgs/gameboy-color-logo.png")
const R = require("../../assets/imgs/r-png.png")

interface OGGameboyProps {
	switchComponent: (name: Consoles) => void
}

const OGGameboy = ({ switchComponent }: OGGameboyProps) => {
	return (
		<div className='ogg-container'>
			<div className='ogg-screen-container'>
				<div className='ogg-pi-container'>
					<div className='ogg-icon-container'>
						<div className='ogg-icon-indicators'>
							<div className='ogg-power-light'></div>
							<div className='ogg-arrow-ind'>
								<BiRightArrow />
							</div>
							<div className='ogg-arrow-ind'>
								<BiRightArrow />
							</div>
							<div className='ogg-arrow-ind'>
								<BiRightArrow />
							</div>
						</div>
						<div className='ogg-power-label'>POWER</div>
					</div>
					<div className='ogg-screen-n-logo'>
						<div className='ogg-screen'>
							<Soundcloud />
						</div>
						<div className='ogg-gameboy-label'>
							<img className='ogg-logo' src={OGGameboyLogo} alt='gbLogo' />
						</div>
					</div>
				</div>
			</div>
			<div className='ogg-controller-area'>
				<div className='ogg-nintendo-logo'>
					Nintendo
					<img className='ogg-trademark' src={R} alt='trademark' />
				</div>
				<div className='ogg-button-container'>
					<div className='ogg-dpad-container'>
						<DPad />
					</div>
					<div className='ogg-action-btns-container'>
						<div className='ogg-action-btn ogg-b-btn'>B</div>
						<div className='ogg-action-btn ogg-a-btn'>A</div>
					</div>
				</div>
				<div className='ogg-option-btns-container'>
					<div
						onClick={() => {
							switchComponent(Consoles.GAMEANDWATCH)
						}}
						className='ogg-option-btn ogg-pause-btn'></div>
					<div onClick={() => switchComponent(Consoles.GBCOLOR)} className='ogg-option-btn ogg-select-btn'></div>
				</div>
			</div>
		</div>
	)
}

export default OGGameboy
