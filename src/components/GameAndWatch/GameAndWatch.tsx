import React from "react"
import { Consoles } from "../../App"

interface GameAndWatchProps {
	switchComponent: (name: Consoles) => void
}

const GameAndWatch = ({ switchComponent }: GameAndWatchProps) => {
	return <div>GameAndWatch</div>
}

export default GameAndWatch
