import React, { useState } from "react"
import "./App.css"
import GBColor from "./components/GBColor/GBColor"
import GBA from "./components/GBA/GBA"
import OGGameBoy from "./components/OGGameboy/OGGameBoy"

export enum Consoles {
	GAMEANDWATCH,
	OGGAMEBOY,
	GBCOLOR,
	GBA,
	SP,
}

function App() {
	let [console, setConsole] = useState(Consoles.GBA)

	const focusComponent = (name: Consoles) => {
		setConsole(name)
	}

	const renderConsole = (): JSX.Element => {
		const selectedConsole = console
		if (selectedConsole === Consoles.GBCOLOR) {
			return <GBColor switchComponent={focusComponent} />
		} else if (selectedConsole === Consoles.OGGAMEBOY) {
			return <OGGameBoy switchComponent={focusComponent} />
		} else if (selectedConsole === Consoles.GBA) {
			return <GBA switchComponent={focusComponent} />
		} else {
			return <div></div>
		}
	}

	return <div className='App'>{renderConsole()}</div>
}

export default App
