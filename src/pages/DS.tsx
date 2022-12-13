import React from "react"
import { Consoles } from "../App"

interface DSProps {
	switchComponent: (name: Consoles) => void
}

const DS = ({ switchComponent }: DSProps) => {
	return <div>DS</div>
}

export default DS
