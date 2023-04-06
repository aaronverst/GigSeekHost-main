let cardData = [];
d3.csv('../assets/data/PerformerData.csv')
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
        postElement.classList.add('card-container');
        postElement.setAttribute('data-name', postData.Name);
        postElement.setAttribute('data-genre', postData.Genre);
        postElement.setAttribute('data-hometown', postData.Hometown);
        postElement.setAttribute('data-playtime', postData.maxPlayTime);
        postElement.setAttribute('data-distance', postData.distanceFromYou);
        postElement.innerHTML = `
            <div class="our-performer" href="../assets/html/performerProfile.html">
              <a class="nav-link" href="performerProfile.html"</a> 
              <div class="picture">
                <img class="img-fluid">
              </div>
              <div class="team-content" }>
                <h3 class="name">${postData.Name}</h3>
                <h4 class="title">Hometown: ${postData.Hometown} | Genre: ${postData.Genre}</h4>
                <h4 class="title">Max Play Time: ${postData.maxPlayTime} | Distance: ${postData.distanceFromYou} miles</h4>
              </div>
              <ul class="social">
                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
              </ul>
            </div>
        `
        postcontainer.appendChild(postElement)
        generatePerformerImage();
      })
    }
    cardMethods();

  });
