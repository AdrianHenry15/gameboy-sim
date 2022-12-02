import React from "react"
import "./GBA.scss"
import { BiRightArrow } from "react-icons/bi"
import { BiLeftArrow } from "react-icons/bi"
import { BiUpArrow } from "react-icons/bi"
import { BiDownArrow } from "react-icons/bi"
import { BsFillPlayCircleFill } from "react-icons/bs"
import Soundcloud from "../Tools/Soundcloud/Soundcloud"
import { Consoles } from "../../App"
import DPad from "../Tools/DPad/DPad"

const GBColorLogo = require("../../assets/imgs/gameboy-color-logo.png")
const R = require("../../assets/imgs/r-png.png")

interface GBAProps {
	switchComponent: (name: Consoles) => void
}

const GBA = ({ switchComponent }: GBAProps) => {
	return (
		<div className='gba-container'>
			<div className='gba-nintendo-logo'>
				Nintendo
				<img className='gba-trademark' src={R} alt='trademark' />
			</div>
			<div className='gba-container-internal'>
				<div className='dpad-n-options'>
					<div className='gba-dpad-container'>
						<DPad />
					</div>
					<div className='gba-option-btns-container'>
						<div
							onClick={() => {
								switchComponent(Consoles.GBCOLOR)
							}}
							className='gba-option-btn gba-pause-btn'></div>
						<div onClick={() => switchComponent(Consoles.SP)} className='gba-option-btn gba-select-btn'></div>
					</div>
				</div>
				<div className='gba-screen-container'>
					<div className='gba-pi-container'>
						<div className='gba-screen-n-logo'>
							<div className='gba-screen'>
								<Soundcloud />
							</div>
							<div className='gba-gameboy-label'>
								<img className='gba-logo' src={GBColorLogo} alt='gbLogo' />
							</div>
						</div>
					</div>
				</div>
				<div className='gba-controller-area'>
					<div className='gba-icon-container'>
						<div className='gba-icon-indicators'>
							<div className='gba-power-light'></div>
						</div>
						<div className='gba-power-label'>POWER</div>
					</div>
					<div className='gba-button-container'>
						<div className='gba-action-btns-container'>
							<div className='gba-action-btn gba-b-btn'>B</div>
							<div className='gba-action-btn gba-a-btn'>A</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GBA
