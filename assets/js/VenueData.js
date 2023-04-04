var count = 0;
let nameData = [];
d3.csv('../assets/data/VenueData.csv')
    .then(data => {
        data.forEach(d => {
            _data = data;
            count += 1;
            d.Capacity = +d.Capacity;
        })



        for (let i = 0; i < count; i++) {
            nameData[i] = data[i];
        };

        console.log(nameData);

        const nameContainer = document.getElementById("nameDropdown");

        for (let i = 0; i < count; i++) {
            var nameElement = document.createElement('option');
            nameElement.value = nameData[i].Name;
            nameElement.innerHTML = nameData[i].Name;

            nameContainer.appendChild(nameElement);
        };

    })

    .catch(error => console.error(error));

function Dropdown() {
    document.getElementById("nameDropdown").classList.toggle("show");
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

$("select.name_dropdown-content").change(updateVenue);
$("#myInput").on("keyup", updateVenue);

function updateVenue() {
    var venueName = $('select.name_dropdown-content').val();
    var search = $("#myInput").val();


    $('.c-container')
        .find('.card-container')
        .hide()
        .filter(function () {
            var okName = true;


            if (venueName !== "Name") {
                okName = $(this).attr('data-name') === venueName;
                console.log(okName);
            }
            else {
                okName = true;
            }

            return okName;

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










