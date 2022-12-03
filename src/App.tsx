import React, { useState } from "react"
import "./App.css"
import GBColor from "./components/GBColor/GBColor"
import GBA from "./components/GBA/GBA"
import OGGameBoy from "./components/OGGameboy/OGGameBoy"
import GameAndWatch from "./components/GameAndWatch/GameAndWatch"
import SP from "./components/SP/SP"
import DS from "./components/DS/DS"

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

	const focusComponent = (name: Consoles) => {
		setConsole(name)
	}

	const renderConsole = (): JSX.Element => {
		const selectedConsole = console
		if (selectedConsole === Consoles.GAMEANDWATCH) {
			return <GameAndWatch switchComponent={focusComponent} />
		} else if (selectedConsole === Consoles.OGGAMEBOY) {
			return <OGGameBoy switchComponent={focusComponent} />
		} else if (selectedConsole === Consoles.GBCOLOR) {
			return <GBColor switchComponent={focusComponent} />
		} else if (selectedConsole === Consoles.GBA) {
			return <GBA switchComponent={focusComponent} />
		} else if (selectedConsole === Consoles.SP) {
			return <SP switchComponent={focusComponent} />
		} else if (selectedConsole === Consoles.DS) {
			return <DS switchComponent={focusComponent} />
		} else {
			return <div></div>
		}
	}

	return <div className='App'>{renderConsole()}</div>
}

export default App
