import "../styles/DS.scss"
import Soundcloud from "../components/SoundcloudFrame"
import { Consoles } from "../stores/schemas/Enums"
import DPad from "../components/DPad"

const SPLogo = require("../assets/imgs/gameboy-color-logo.png")
const R = require("../assets/imgs/r-png.png")

interface DSProps {
	switchComponent: (name: Consoles) => void
	track: string
	onRightDPadClick: () => void
	onLeftDPadClick: () => void
}

const DS = (props: DSProps) => {
	return (
		<div className='full-wrapper'>
			<div className='ds-container-1'>
				<div className='ds-screen-container'>
					<div className='ds-pi-container'>
						<div className='ds-icon-container'></div>
						<div className='ds-screen-n-logo'>
							<div className='ds-screen'>
								<Soundcloud track={props.track} />
							</div>
							<div className='ds-gameboy-label'>
								<img className='ds-logo' src={SPLogo} alt='gbLogo' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='ds-container-2'>
				<div className='ds-divider'>
					<div className='rect'></div>
					<div className='rect'></div>
				</div>
				<div className='ds-wrapper'>
					<div className='ds-controller-area'>
						<div className='ds-button-container'>
							<div className='ds-dpad-container'>
								<DPad onLeftDPadClick={() => props.onLeftDPadClick()} onRightClick={() => props.onRightDPadClick()} />
							</div>
							<div className='ds-screen-container'>
								<div className='ds-pi-container'>
									<div className='ds-icon-container'></div>
									<div className='ds-screen-n-logo'>
										<div className='ds-screen'>
											<Soundcloud track={props.track} />
										</div>
										<div className='ds-gameboy-label'>
											<img className='ds-logo' src={SPLogo} alt='gbLogo' />
										</div>
									</div>
								</div>
							</div>
							<div className='ds-action-btns-n-options-container'>
								<div className='action-btns'>
									<div className='btns-1'>
										<button className='ds-action-btn ds-b-btn'>B</button>
										<button className='ds-action-btn ds-a-btn'>A</button>
									</div>
									<div className='btns-1'>
										<button className='ds-action-btn ds-x-btn'>X</button>
										<button className='ds-action-btn ds-y-btn'>Y</button>
									</div>
								</div>
								<div className='ds-option-btns-container'>
									<div
										onClick={() => {
											props.switchComponent(Consoles.SP)
										}}
										className='ds-option-btn ds-pause-btn'></div>
									<div
										onClick={() => props.switchComponent(Consoles.GAMEANDWATCH)}
										className='ds-option-btn ds-select-btn'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DS
