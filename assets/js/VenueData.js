var count = 0;
let _data = [];
d3.csv('../assets/data/VenueData.csv')
    .then(data => {
        data.forEach(d => {
            _data = data;
            count += 1;
        })

        var allLocations = d3.rollups(data, d => d.length, d => d.Location);
        var allCapacities = d3.rollups(data, d => d.length, d => d.Capacity);
        var allGenres = d3.rollups(data, d => d.length, d => d.DesiredGenre);
        var allEventsHeld = d3.rollups(data, d => d.length, d => d.EventsHeld);

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

        const locationContainer = document.getElementById("locationDropdown");

        $(document).ready(function () {
            $(".location_dropdown-content").select2();
        });

        for (let j = 0; j < allLocations.length; j++) {
            var locationElement = document.createElement('option');
            locationElement.value = allLocations[j][0];
            locationElement.innerHTML = allLocations[j][0];

            locationContainer.appendChild(locationElement);
        };

        const capacityContainer = document.getElementById("capacityDropdown");

        $(document).ready(function () {
            $(".capacity_dropdown-content").select2();
        });

        for (let i = 0; i < allCapacities.length; i++) {
            var capacityElement = document.createElement('option');
            capacityElement.value = allCapacities[i][0];
            capacityElement.innerHTML = allCapacities[i][0];

            capacityContainer.appendChild(capacityElement);
        };

        const desiredGenreContainer = document.getElementById("desiredGenreDropdown");

        $(document).ready(function () {
            $(".desiredGenre_dropdown-content").select2();
        });

        for (let i = 0; i < allGenres.length; i++) {
            var desiredGenreElement = document.createElement('option');
            desiredGenreElement.value = allGenres[i][0];
            desiredGenreElement.innerHTML = allGenres[i][0];

            desiredGenreContainer.appendChild(desiredGenreElement);
        };

        const eventContainer = document.getElementById("eventDropdown");

        $(document).ready(function () {
            $(".event_dropdown-content").select2();
        });

        for (let i = 0; i < allEventsHeld.length; i++) {
            var eventElement = document.createElement('option');
            eventElement.value = allEventsHeld[i][0];
            eventElement.innerHTML = allEventsHeld[i][0];

            eventContainer.appendChild(eventElement);
        };



    })

    .catch(error => console.error(error));

function venueDropdown() {
    document.getElementById("nameDropdown").classList.toggle("show");
    document.getElementById("locationDropdown").classList.toggle("show");
    document.getElementById("capacityDropdown").classList.toggle("show");
    document.getElementById("desiredGenreDropdown").classList.toggle("show");
    document.getElementById("eventDropdown").classList.toggle("show");

};

venueDropdown();

$("select.name_dropdown-content, select.location_dropdown-content, select.capacity_dropdown-content, select.desiredGenre_dropdown-content, select.event_dropdown-content").change(updateVenue);

function updateVenue() {
    var venueName = $('select.name_dropdown-content').val();
    var venueLocation = $('select.location_dropdown-content').val();
    var venueCapacity = $('select.capacity_dropdown-content').val();
    var venueGenre = $('select.desiredGenre_dropdown-content').val();
    var venueEvent = $('select.event_dropdown-content').val();


    $('.c-container')
        .find('.card-container')
        .hide()
        .filter(function () {
            var okName = true;
            var okLocation = true;
            var okCapacity = true;
            var okGenre = true;
            var okEvent = true;

            if (venueName !== "All Venues") {
                okName = $(this).attr('data-name') === venueName;
            }

            if (venueLocation !== "All Locations") {
                okLocation = $(this).attr('data-location') === venueLocation;
            }

            if (venueCapacity !== "All Capacities") {
                okCapacity = $(this).attr('data-capacity') === venueCapacity;
            }

            if (venueGenre !== "All Desired Genres") {
                okGenre = $(this).attr('data-desiredGenre') === venueGenre;
            }

            if (venueEvent !== "All Amounts") {
                okEvent = $(this).attr('data-event') === venueEvent;
            }



            return okName && okLocation && okCapacity && okGenre && okEvent;

        }).fadeIn('fast');

}










