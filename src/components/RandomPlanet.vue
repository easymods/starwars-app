<template>
<div class="container d-flex justify-content-center mb-5">
    <div class="card mb-12 container-fluid">
    <div class="row">
        <div class="col-md-3">
            <img height="100%" display="inline-block" :src="img" class="card-img" alt="...">
        </div>
        <div class="col-md-7">
        <div class="card-body">
            <h5 class="card-title">{{name}}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Population: {{population}}</li>
                <li class="list-group-item">Rotation Period: {{rotationPeriod}}</li>
                <li class="list-group-item">Diameter: {{diameter}}</li>
            </ul>
        </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import {SwapiService} from '@/api/api.js'
const swpService = new SwapiService()
    export default {
        data() {
            return {
                name: null,
                population: null,
                rotationPeriod: null,
                diameter: null,
                img: null,
            }
        },
        methods: {
            updatePlanet() {
                const randomId = Math.floor(Math.random() * 10) + 2;
                const imgURL = `https://starwars-visualguide.com/assets/img/planets/${randomId}.jpg`
                this.img = imgURL;
                swpService
                    .getPlanet(randomId)
                    .then((planet) => {
                        this.name = planet.name;
                        this.population = planet.population;
                        this.rotationPeriod = planet.rotation_period;
                        this.diameter = planet.diameter;
                    })
            }
        },
        mounted() {
            this.updatePlanet();
        },
        created() {
            setInterval(this.updatePlanet, 5000);
        },

    }
</script>

<style lang="scss" scoped>

</style>