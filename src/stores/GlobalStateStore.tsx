import { observable } from "mobx"

export class GlobalStateStore {
	constructor(base?: Partial<GlobalStateStore>) {
		Object.assign(this, base)
	}
}
