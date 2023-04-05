var count = 0;
let _data = [];
d3.csv('../assets/data/VenueData.csv')
    .then(data => {
        data.forEach(d => {
            _data = data;
            count += 1;
            d.Capacity = +d.Capacity;
        })

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

        for (let i = 0; i < count; i++) {
            var locationElement = document.createElement('option');
            locationElement.value = _data[i].Location;
            locationElement.innerHTML = _data[i].Location;

            locationContainer.appendChild(locationElement);
        };



    })

    .catch(error => console.error(error));

function Dropdown() {
    document.getElementById("nameDropdown").classList.toggle("show");
    document.getElementById("locationDropdown").classList.toggle("show");
};

Dropdown();


function nameFilterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("nameDropdown");
    a = div.getElementsByTagName("option");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
};

function locationFilterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("locationDropdown");
    a = div.getElementsByTagName("option");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
};

$("select.name_dropdown-content, select.location_dropdown-content").change(updateVenue);
// $("select.location_dropdown-content").change(updateVenue);

function updateVenue() {
    var venueName = $('select.name_dropdown-content').val();
    var venueLocation = $('select.location_dropdown-content').val();


    $('.c-container')
        .find('.card-container')
        .hide()
        .filter(function () {
            var okName = true;
            var okLocation = true;

            if (venueName !== "All Venues") {
                okName = $(this).attr('data-name') === venueName;
                console.log(okName);
                console.log(venueName);

            }

            if (venueLocation !== "All Locations") {
                okLocation = $(this).attr('data-location') === venueLocation;
                console.log(okLocation);
                console.log(venueLocation);
            }


            return okName && okLocation;

        }).fadeIn('fast');

    $('.name_dropdown')
        .find('#myInput')
        .hide()
        .filter(function () {
            var okSearch = true;

            if (search !== '') {
                okSearch = $(this).text().toUpperCase().indexOf(search) > -1;
                console.log(okSearch);
            }
            else {
                okSearch = true;
            }

            return okSearch;
        })

}










