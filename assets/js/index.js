const cardData = [
    {
        name: 'card 1',
        body: 'this is card body 1'
    },
    {
        name: 'card 2',
        body: 'this is card body 2'
    },
    {
        name: 'card 3',
        body: 'this is card body 3'
    },
    {
        name: 'card 4',
        body: 'this is card body 4'
    },
    {
        name: 'card 5',
        body: 'this is card body 5'
    },
    {
        name: 'card 5',
        body: 'this is card body 5'
    },
    {
        name: 'card 6',
        body: 'this is card body 6'
    },
    {
        name: 'card 7',
        body: 'this is card body 7'
    },
    {
        name: 'card 8',
        body: 'this is card body 8'
    },
]

const postcontainer = document.querySelector('.card-container');

const cardMethods = () => {
    cardData.map((postData) => {
        const postElement = document.createElement('div');
        postElement.classList.add('our-venue');
        postElement.innerHTML = `
            <div class="our-venue">
              <div class="picture">
                <img class="img-fluid" src="https://picsum.photos/130/130?image=1027">
              </div>
              <div class="team-content">
                <h3 class="name">Michele Miller</h3>
                <h4 class="title">Web Developer</h4>
              </div>
              <ul class="social">
                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a>
                </li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
              </ul>
            </div>
        `
        postcontainer.appendChild(postElement)
    })
}
cardMethods()








