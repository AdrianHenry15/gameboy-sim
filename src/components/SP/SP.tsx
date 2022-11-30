import React from "react"
import { Consoles } from "../../App"

interface SPProps {
	switchComponent: (name: Consoles) => void
}

const SP = ({ switchComponent }: SPProps) => {
	return <div>SP</div>
}

export default SP
