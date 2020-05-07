<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark nav-header">
        <div class="container">
            <a class="navbar-brand" href="#">StarWars API</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">People <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Planets</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Starships</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>


<style> 
    .nav-header {
        margin-bottom: 20px;
    }
</style>