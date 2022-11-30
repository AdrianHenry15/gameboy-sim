import React from "react"
import "./Gameboy.scss"
import { BiRightArrow } from "react-icons/bi"
import { BiLeftArrow } from "react-icons/bi"
import { BiUpArrow } from "react-icons/bi"
import { BiDownArrow } from "react-icons/bi"
import { BsFillPlayCircleFill } from "react-icons/bs"

const GameboyLogo = require("../assets/imgs/gameboy-color-logo.png")
const R = require("../assets/imgs/r-png.png")
const DPad = require("../assets/imgs/dpad.png")

const Gameboy = () => {
	return (
		<div className='gameboy-container'>
			<div className='screen-container'>
				<div className='pi-container'>
					<div className='icon-container'>
						<div className='power-light'></div>
						<div className='arrow-ind'>
							<BiRightArrow />
						</div>
						<div className='arrow-ind'>
							<BiRightArrow />
						</div>
						<div className='arrow-ind'>
							<BiRightArrow />
						</div>
					</div>
					<div className='power-label'>POWER</div>
				</div>
				<div className='gameboy-label'>
					<img className='logo' src={GameboyLogo} alt='gbLogo' />
				</div>
				<div className='screen'>
					<iframe
						className='music-container'
						width='100%'
						height='100%'
						scrolling='no'
						frameBorder='no'
						allow='autoplay'
						src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1203060361&color=%23c5c3c3&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'></iframe>
					<div className='music-frame'>
						<a className='frame-profile' href='https://soundcloud.com/theadrianhenry' title='Adrian Henry' target='_blank'>
							Adrian Henry
						</a>{" "}
						·{" "}
						<a className='frame-song' href='https://soundcloud.com/theadrianhenry/design' title='Remixes' target='_blank'>
							Remixes
						</a>
					</div>
				</div>
			</div>
			<div className='controller-area'>
				<div className='nintendo-logo'>
					Nintendo
					<img className='trademark' src={R} alt='trademark' />
				</div>
				<div className='button-container'>
					<div className='dpad-container'>
						<div className='dpad-btn left-dpad'>
							<div className='dpad-arrow left-dpad-arrow'>
								<BiLeftArrow />
							</div>
						</div>
						<div className='dpad-btn right-dpad'>
							<div className='dpad-arrow right-dpad-arrow'>
								<BiRightArrow />
							</div>
						</div>
						<div className='dpad-arrow circle-dpad'>
							<BsFillPlayCircleFill />
						</div>
						<div className='dpad-btn up-dpad'>
							<div className='dpad-arrow up-dpad-arrow'>
								<BiUpArrow />
							</div>
						</div>
						<div className='dpad-btn down-dpad'>
							<div className='dpad-arrow down-dpad-arrow'>
								<BiDownArrow />
							</div>
						</div>
					</div>
					<div className='action-btns-container'>
						<div className='action-btn b-btn'>B</div>
						<div className='action-btn a-btn'>A</div>
					</div>
					<div className='option-btns-container'>
						<div className='option-btn pause-btn'></div>
						<div className='option-btn select-btn'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Gameboy
