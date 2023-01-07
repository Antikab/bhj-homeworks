class User {

	// constructor(payload) {
	constructor({ name, lastname, age }) {
		// this.name = payload.name
		// this.name = payload.lastname
		// this.name = payload.age

		this.name = name
		this.lastname = lastname
		this.age = age
	}

	fullName() {
		return `${this.name} ${this.lastname}`
	}

	static test() {
		return 'это статический метод'
	}
}