import { useState } from "react"
import "./App.css"
import GBColor from "./devices/GBColor"
import GBA from "./devices/GBA"
import OGGameBoy from "./devices/OGGameBoy"
import GameAndWatch from "./devices/GameAndWatch"
import SP from "./devices/SP"
import DS from "./devices/DS"
import Enter from "./pages/Enter"
import { Consoles } from "./stores/schemas/Enums"
import Track from "./data/Tracks.json"
import NavBar from "./components/NavBar"

const App = () => {
	let [device, setDevice] = useState(Consoles.SP)
	let [enter, setEnter] = useState(false)
	let [scTrack, setScTrack] = useState(Track.soundcloud_originals[0].src)

	const focusComponent = (name: Consoles) => {
		setDevice(name)
	}

	const enterApplication = () => {
		setEnter(true)
	}

	const nextTrack = () => {
		let songs = Track.soundcloud_originals
		for (let i = 0; i < songs.length; i++) {
			let song = songs[i]
			if (song.id <= 1) {
				song.id += 1
				return setScTrack(song.src)
			}
			setScTrack(song.src)
		}
	}

	const previousTrack = () => {
		let songs = Track.soundcloud_originals
		for (let i = 0; i < songs.length; i++) {
			let song = songs[i]
			if (song.id > 1) {
				song.id -= 1
				return setScTrack(song.src)
			}
			setScTrack(song.src)
		}
	}

	const renderConsole = (): JSX.Element => {
		switch (device) {
			case Consoles.GAMEANDWATCH:
				return (
					<GameAndWatch
						onLeftDPadClick={previousTrack}
						onRightDPadClick={nextTrack}
						track={scTrack}
						switchComponent={focusComponent}
					/>
				)
			case Consoles.OGGAMEBOY:
				return (
					<OGGameBoy
						onLeftDPadClick={previousTrack}
						onRightDPadClick={nextTrack}
						track={scTrack}
						switchComponent={focusComponent}
					/>
				)
			case Consoles.GBCOLOR:
				return (
					<GBColor
						onLeftDPadClick={previousTrack}
						onRightDPadClick={nextTrack}
						track={scTrack}
						switchComponent={focusComponent}
					/>
				)
			case Consoles.GBA:
				return <GBA onLeftDPadClick={previousTrack} onRightDPadClick={nextTrack} track={scTrack} switchComponent={focusComponent} />
			case Consoles.SP:
				return <SP onLeftDPadClick={previousTrack} onRightDPadClick={nextTrack} track={scTrack} switchComponent={focusComponent} />
			case Consoles.DS:
				return <DS onLeftDPadClick={previousTrack} onRightDPadClick={nextTrack} track={scTrack} switchComponent={focusComponent} />
			default:
				return <div></div>
		}
	}

	return (
		<div className='App'>
			{enter && (
				<div className='screen-container'>
					<NavBar device={device} />
					<div className='device-container'>{renderConsole()}</div>
				</div>
			)}
			{!enter && <Enter enterApplication={enterApplication} />}
		</div>
	)
}

export default App
