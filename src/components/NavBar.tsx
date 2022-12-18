import { Consoles } from "../stores/schemas/Enums"
import "../styles/Navbar.scss"
import DeviceControls from "./DeviceControls"
// icons
const GBColorIcon = require("../assets/icons/GBColor.png")
const GBAIcon = require("../assets/icons/GBA.png")
const OGGBIcon = require("../assets/icons/OGGB.png")
const DSIcon = require("../assets/icons/GBDS.png")
const SPIcon = require("../assets/icons/GBSP.png")
const GNWIcon = require("../assets/icons/GAW.png")

interface INavbarProps {
	device: Consoles
}

const NavBar = (props: INavbarProps) => {
	// functions

	const switchDeviceIcons = () => {
		switch (props.device) {
			case Consoles.DS:
				return DSIcon
			case Consoles.GAMEANDWATCH:
				return GNWIcon
			case Consoles.GBA:
				return GBAIcon
			case Consoles.GBCOLOR:
				return GBColorIcon
			case Consoles.OGGAMEBOY:
				return OGGBIcon
			case Consoles.SP:
				return SPIcon
		}
	}

	const switchDeviceNames = (): JSX.Element => {
		switch (props.device) {
			case Consoles.DS:
				return (
					<div className='device-name-container'>
						<div className='nav-gameboy'>Gameboy</div>
						<div className='nav-device-name'>DS</div>
					</div>
				)
			case Consoles.GAMEANDWATCH:
				return (
					<div className='device-name-container'>
						<div className='nav-device-name'>Game And Watch</div>
					</div>
				)
			case Consoles.GBA:
				return (
					<div className='device-name-container'>
						<div className='nav-gameboy'>Gameboy</div>
						<div className='nav-device-name'>Advance</div>
					</div>
				)
			case Consoles.GBCOLOR:
				return (
					<div className='device-name-container'>
						<div className='nav-gameboy'>Gameboy</div>
						<div className='nav-device-name'>Color</div>
					</div>
				)
			case Consoles.OGGAMEBOY:
				return (
					<div className='device-name-container'>
						<div className='nav-device-name'>The Original</div>
						<div className='nav-gameboy'>Gameboy</div>
					</div>
				)
			case Consoles.SP:
				return (
					<div className='device-name-container'>
						<div className='nav-gameboy'>Gameboy</div>
						<div className='nav-device-name'>SP</div>
					</div>
				)
		}
	}

	return (
		<nav className='navbar'>
			<div className='icon-container'>
				<img
					alt='gameboy-icons'
					src={switchDeviceIcons()}
					className={props.device === Consoles.GAMEANDWATCH ? "icon gnw-icon" : "icon"}
				/>
				{switchDeviceNames()}
			</div>
			<div className='device-controls-container'>
				<DeviceControls />
			</div>
			<div className='shopping-cart'></div>
		</nav>
	)
}

export default NavBar
