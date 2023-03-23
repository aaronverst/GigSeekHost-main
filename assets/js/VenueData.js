var count = 0;
d3.csv('../assets/data/VenueData.csv')
    .then(data => {
        data.forEach(d => {
            _data = data;
            count += 1;
            d.Capacity = +d.Capacity;
        })

        let cardData = [];

        for (let i = 0; i < count; i++) {
            cardData[i] = data[i];
        };

        console.log(cardData);


        const nameContainer = document.querySelector('.search-venue');

        const nameMethods = () => {
            cardData.map((nameData) => {
                const nameElement = document.createElement('div');
                nameElement.classList.add('dropdown-content');
                nameElement.innerHTML = `
                <a href="#Name0">${nameData.Name}</a>           
        `
                nameContainer.appendChild(nameElement);
            })
        }
        nameMethods()

    })

    .catch(error => console.error(error));

function Dropdown() {
    document.getElementById("nameDropdown").classList.toggle("show");
};

function nameFilterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("nameInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("nameDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
};










