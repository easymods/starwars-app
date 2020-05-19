export class SwapiService {

    _apiBase = 'https://swapi.dev/api/';

    async getResource(url) {
        const response = await fetch(`${this._apiBase}${url}`);
        if(!response.ok) {
            throw new Error(`Could not fetch ${url}`, `${response.status}`)
        }

        return await response.json();
    }

    // PEOPLE
    async getAllPeople() {
        const res = await this.getResource(`people/`);
        return res.results;
    }

    // getPerson(id) {
    //     return this.getResource(`people/${id}`);
    // }

    // PLANETS
    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    getPlanet(id) {
        return this.getResource(`planets/${id}/`);
    }

    // STRASHIPS
    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    // getStraship(id) {
    //     return this.getResource(`starships/${id}`);
    // }

}

