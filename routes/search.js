import views from "../controller/views";

export default class extends views {
	constructor() {
		super();
		this.setTitle("Search");
	}
	async getView() {
		return `
            <form id="form">
                <input type="search" id="query" name="q" placeholder="Search City">
                <button>Search</button>
            </form>
        `;
	}
}
