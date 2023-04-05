var count = 0;
let _data = [];
d3.csv('../assets/data/PerformerData.csv')
    .then(data => {
        data.forEach(d => {
            _data = data;
            count += 1;
        })

        var allHometowns = d3.rollups(data, d => d.length, d => d.Hometown);
        var allPlayTimes = d3.rollups(data, d => d.length, d => d.maxPlayTime);
        var allGenres = d3.rollups(data, d => d.length, d => d.Genre);
        var allDistances = d3.rollups(data, d => d.length, d => d.distanceFromYou);

        const nameContainer = document.getElementById("nameDropdown");

        $(document).ready(function () {
            $(".name_dropdown-content").select2();
        });

        for (let i = 0; i < count; i++) {
            var nameElement = document.createElement('option');
            nameElement.value = _data[i].Name;
            nameElement.innerHTML = _data[i].Name;

            nameContainer.appendChild(nameElement);
        };

        const genreContainer = document.getElementById("genreDropdown");

        $(document).ready(function () {
            $(".genre_dropdown-content").select2();
        });

        for (let i = 0; i < allGenres.length; i++) {
            var genreElement = document.createElement('option');
            genreElement.value = allGenres[i][0];
            genreElement.innerHTML = allGenres[i][0];

            genreContainer.appendChild(genreElement);
        };

        const hometownContainer = document.getElementById("hometownDropdown");

        $(document).ready(function () {
            $(".hometown_dropdown-content").select2();
        });

        for (let j = 0; j < allHometowns.length; j++) {
            var hometownElement = document.createElement('option');
            hometownElement.value = allHometowns[j][0];
            hometownElement.innerHTML = allHometowns[j][0];

            hometownContainer.appendChild(hometownElement);
        };

        const maxPlayTimeContainer = document.getElementById("maxPlayTimeDropdown");

        $(document).ready(function () {
            $(".maxPlayTime_dropdown-content").select2();
        });

        for (let i = 0; i < allPlayTimes.length; i++) {
            var maxPlayTimeElement = document.createElement('option');
            maxPlayTimeElement.value = allPlayTimes[i][0];
            maxPlayTimeElement.innerHTML = allPlayTimes[i][0];

            maxPlayTimeContainer.appendChild(maxPlayTimeElement);
        };

        const distanceContainer = document.getElementById("distanceDropdown");

        $(document).ready(function () {
            $(".distance_dropdown-content").select2();
        });

        for (let i = 0; i < allDistances.length; i++) {
            var distanceElement = document.createElement('option');
            distanceElement.value = allDistances[i][0];
            distanceElement.innerHTML = allDistances[i][0];

            distanceContainer.appendChild(distanceElement);
        };



    })

    .catch(error => console.error(error));

function performerDropdown() {
    document.getElementById("nameDropdown").classList.toggle("show");
    document.getElementById("hometownDropdown").classList.toggle("show");
    document.getElementById("maxPlayTimeDropdown").classList.toggle("show");
    document.getElementById("genreDropdown").classList.toggle("show");
    document.getElementById("distanceDropdown").classList.toggle("show");

};

performerDropdown();

$("select.name_dropdown-content, select.hometown_dropdown-content, select.maxPlayTime_dropdown-content, select.genre_dropdown-content, select.distance_dropdown-content").change(updatePerformer);

function updatePerformer() {
    var performerName = $('select.name_dropdown-content').val();
    var performerHometown = $('select.hometown_dropdown-content').val();
    var performerPlayTime = $('select.maxPlayTime_dropdown-content').val();
    var performerGenre = $('select.genre_dropdown-content').val();
    var performerDistance = $('select.distance_dropdown-content').val();


    $('.c-container')
        .find('.card-container')
        .hide()
        .filter(function () {
            var okName = true;
            var okPerformer = true;
            var okPlayTime = true;
            var okGenre = true;
            var okDistance = true;

            if (performerName !== "All Performers") {
                okName = $(this).attr('data-name') === performerName;
            }

            if (performerHometown !== "All Hometowns") {
                okPerformer = $(this).attr('data-hometown') === performerHometown;
            }

            if (performerPlayTime !== "All Play Times") {
                okPlayTime = $(this).attr('data-playtime') === performerPlayTime;
            }

            if (performerGenre !== "All Genres") {
                okGenre = $(this).attr('data-genre') === performerGenre;
            }

            if (performerDistance !== "All Distances") {
                okDistance = $(this).attr('data-distance') === performerDistance;
            }



            return okName && okPerformer && okPlayTime && okGenre && okDistance;

        }).fadeIn('fast');

}










