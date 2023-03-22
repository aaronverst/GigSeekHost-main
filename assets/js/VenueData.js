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
    })

    .catch(error => console.error(error));










