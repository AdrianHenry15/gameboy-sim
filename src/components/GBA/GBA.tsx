import React from "react"
import "./GBA.scss"
import { BiRightArrow } from "react-icons/bi"
import { BiLeftArrow } from "react-icons/bi"
import { BiUpArrow } from "react-icons/bi"
import { BiDownArrow } from "react-icons/bi"
import { BsFillPlayCircleFill } from "react-icons/bs"
import Soundcloud from "../Tools/Soundcloud"
import { Consoles } from "../../App"

const GBALogo = require("../../assets/imgs/gba-logo.png")
const R = require("../../assets/imgs/r-png.png")

interface GBAProps {
	switchComponent: (name: Consoles) => void
}

const GBA = ({ switchComponent }: GBAProps) => {
	return (
		<div className='gba-container'>
			<div className='gba-screen-container'>
				<div className='gba-pi-container'>
					<div className='gba-icon-container'>
						<div className='gba-power-light'></div>
						<div className='gba-arrow-ind'>
							<BiRightArrow />
						</div>
						<div className='gba-arrow-ind'>
							<BiRightArrow />
						</div>
						<div className='gba-arrow-ind'>
							<BiRightArrow />
						</div>
					</div>
					<div className='gba-power-label'>POWER</div>
				</div>
				<div className='gba-gameboy-label'>
					<img className='gba-logo' src={GBALogo} alt='gbLogo' />
				</div>
				<div className='gba-screen'>
					<Soundcloud />
				</div>
			</div>
			<div className='gba-controller-area'>
				<div className='gba-nintendo-logo'>
					Nintendo
					<img className='gba-trademark' src={R} alt='trademark' />
				</div>
				<div className='gba-button-container'>
					<div className='gba-dpad-container'>
						<div className='gba-dpad-btn gba-left-dpad'>
							<div className='gba-dpad-arrow gba-left-dpad-arrow'>
								<BiLeftArrow />
							</div>
						</div>
						<div className='gba-dpad-btn gba-right-dpad'>
							<div className='gba-dpad-arrow gba-right-dpad-arrow'>
								<BiRightArrow />
							</div>
						</div>
						<div className='gba-dpad-arrow gba-circle-dpad'>
							<BsFillPlayCircleFill />
						</div>
						<div className='gba-dpad-btn gba-up-dpad'>
							<div className='gba-dpad-arrow gba-up-dpad-arrow'>
								<BiUpArrow />
							</div>
						</div>
						<div className='gba-dpad-btn gba-down-dpad'>
							<div className='gba-dpad-arrow gba-down-dpad-arrow'>
								<BiDownArrow />
							</div>
						</div>
					</div>
					<div className='gba-action-btns-container'>
						<div className='gba-action-btn gba-b-btn'>B</div>
						<div className='gba-action-btn gba-a-btn'>A</div>
					</div>
					<div className='gba-option-btns-container'>
						<div onClick={() => switchComponent(Consoles.GBCOLOR)} className='gba-option-btn gba-pause-btn'></div>
						<div onClick={() => switchComponent(Consoles.SP)} className='gba-option-btn gba-select-btn'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GBA
