import { Consoles } from "../stores/schemas/Enums"
import "../styles/Navbar.scss"
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
	return (
		<nav className='navbar'>
			<div className='icon-container'>
				<img src={switchDeviceIcons()} className={props.device === Consoles.GAMEANDWATCH ? "icon gnw-icon" : "icon"}></img>
			</div>
			<div className='device-controls-container'></div>
			<div className='shopping-cart'></div>
		</nav>
	)
}

export default NavBar
