d3.csv('../assets/data/VenueData.csv')
    .then(data => {
        data.forEach(d => {
            _data = data;
            count += 1;
            d.Capacity = +d.Capacity;
        })

        let cardData = data;
        cardData.shift();

        const postcontainer = document.querySelector('.card-container');

        const cardMethods = () => {
            cardData.map((postData) => {
                const postElement = document.createElement('div');
                postElement.classList.add('our-venue');
                postElement.setAttribute('href', "../assets/html/performerProfile.html");
                postElement.innerHTML = `
              <a class="nav-link" href="performerProfile.html"</a> 
              <div class="picture">
                <img class="img-fluid" src="https://source.unsplash.com/random/800x800/?img=1">
              </div>
              <div class="team-content">
                <h3 class="name" data-name=${postData.Name}>${postData.Name}</h3>
                <h4 class="title">Location: ${postData.Location} | Desired Genre: ${postData.DesiredGenre}</h4>
                <h4 class="title">Capacity: ${postData.Capacity} | Events Held: ${postData.EventsHeld}</h4>
              </div>
              <ul class="social">
                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
              </ul>
        `
                postcontainer.appendChild(postElement)
            })
        }
        cardMethods();

    });
