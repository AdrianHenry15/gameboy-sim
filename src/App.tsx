import { useState } from "react"
import "./App.css"
import GBColor from "./pages/consoles/GBColor"
import GBA from "./pages/consoles/GBA"
import OGGameBoy from "./pages/consoles/OGGameBoy"
import GameAndWatch from "./pages/consoles/GameAndWatch"
import SP from "./pages/consoles/SP"
import DS from "./pages/consoles/DS"
import Enter from "./pages/Enter"

export enum Consoles {
	GAMEANDWATCH,
	OGGAMEBOY,
	GBCOLOR,
	GBA,
	SP,
	DS,
}

function App() {
	let [console, setConsole] = useState(Consoles.SP)
	let [enter, setEnter] = useState(false)

	const focusComponent = (name: Consoles) => {
		setConsole(name)
	}

	const enterApplication = () => {
		setEnter(true)
	}

	const renderConsole = (): JSX.Element => {
		if (console === Consoles.GAMEANDWATCH) {
			return <GameAndWatch switchComponent={focusComponent} />
		} else if (console === Consoles.OGGAMEBOY) {
			return <OGGameBoy switchComponent={focusComponent} />
		} else if (console === Consoles.GBCOLOR) {
			return <GBColor switchComponent={focusComponent} />
		} else if (console === Consoles.GBA) {
			return <GBA switchComponent={focusComponent} />
		} else if (console === Consoles.SP) {
			return <SP switchComponent={focusComponent} />
		} else if (console === Consoles.DS) {
			return <DS switchComponent={focusComponent} />
		} else {
			return <div></div>
		}
	}

	return <div className='App'>{enter ? renderConsole() : <Enter enterApplication={enterApplication} />}</div>
}

export default App
