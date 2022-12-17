import { observable } from "mobx"
import { Consoles } from "./schemas/Enums"
import { IConsoleStore } from "./schemas/IConsoleStore"
import { IMusicStore } from "./schemas/IMusicStore"

export class GlobalStateStore {
	constructor(base?: Partial<GlobalStateStore>) {
		Object.assign(this, base)
	}
}
