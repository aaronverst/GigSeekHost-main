let cardData = [];
d3.csv('../assets/data/VenueData.csv')
  .then(data => {
    data.forEach(d => {
      _data = data;
    })



    for (let i = 0; i < count; i++) {
      cardData[i] = data[i];
    };
    console.log(cardData);
    cardData.shift();

    const postcontainer = document.querySelector('.c-container');

    const cardMethods = () => {
      cardData.map((postData) => {
        const postElement = document.createElement('div');
        //console.log(randomImage())
        postElement.classList.add('card-container');
        postElement.setAttribute('data-name', postData.Name);
        postElement.setAttribute('data-location', postData.Location);
        postElement.setAttribute('data-capacity', postData.Capacity);
        postElement.setAttribute('data-desiredGenre', postData.DesiredGenre);
        postElement.setAttribute('data-event', postData.EventsHeld);
        postElement.innerHTML = `
            <div class="our-venue" href="../assets/html/performerProfile.html">
              <a class="nav-link" href="venueProfile.html"</a> 
              <div class="picture" id="VenueImageHolder">
                <img class="img-fluid">
              </div>
              <div class="team-content" }>
                <h3 class="name">${postData.Name}</h3>
                <h4 class="title">Location: ${postData.Location} | Desired Genre: ${postData.DesiredGenre}</h4>
                <h4 class="title">Capacity: ${postData.Capacity} | Events Held: ${postData.EventsHeld}</h4>
              </div>
              <ul class="social">
                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
              </ul>
            </div>
        `
        //document.getElementById('imageholder') = '../assets/img/icons/killers.jpg';
        postcontainer.appendChild(postElement);
        generateVenueImage();
        console.log(generateVenueImage());
      })
    }
    cardMethods();

  });

