console.clear()

const pics = [
    {
        id: 1,
        name: "Paris",
        img:
            "https://cdn.pixabay.com/photo/2016/01/22/16/42/eiffel-tower-1156146__480.jpg",
        about: "Paris is Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?"

    },
    {
        id: 2,
        name: "New York",
        img:
            "https://media.istockphoto.com/photos/the-majesty-of-manhattan-island-taken-from-a-helicopter-above-the-picture-id1152365479?b=1&k=6&m=1152365479&s=170667a&w=0&h=RktPeuobR8fJfoGk7mIEilGpW8b68y1HTbZlQC2Xkkc=",
        about: "New York is Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?"
    },
    {
        id: 3,
        name: "Madrid",
        img:
            "https://media.istockphoto.com/photos/madrid-city-skyline-gran-via-street-twilight-spain-picture-id1059076792?b=1&k=6&m=1059076792&s=170667a&w=0&h=0TDqwHqRWfNsqH3uTxx3GBzOPxUW--YZLGjWnfKzX2w=",
        about: "Madrid is Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?"

    },
    {
        id: 4,
        name: "Helsinki",
        img:
            "https://media.istockphoto.com/photos/helsinki-finland-picture-id183996236?b=1&k=6&m=183996236&s=170667a&w=0&h=y0DWQ5DSWF8RfCYwaNJIXiLtVy5NHJMGOuY0iZbpEco=",
        about: "Helsinki is Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?"

    },
    {
        id: 5,
        name: "Budapest",
        img:
            "https://media.istockphoto.com/photos/hungarian-parliament-building-in-budapest-picture-id1033912924?b=1&k=6&m=1033912924&s=170667a&w=0&h=Qf4BGFS-9i_Eeb53aFFaGI8iHd7g5c0YHYWNdaOHH1s=",
        about: "Budapest is Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?"

    },

];
// select items
const img = document.getElementById("pic-img");
const city = document.getElementById("city");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const btnColor = document.querySelector('#btnColor');
const colors = ["#9656a1", "#ff8906", "#e53170", "#3da9fc"];

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    const item = pics[currentItem];
    img.src = item.img;
    city.textContent = item.name;
    info.textContent = item.about;
});


function showImg(p) {
    const item = pics[p];
    img.src = item.img;
    city.textContent = item.name;
    info.textContent = item.about;
}

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > pics.length - 1) {
        currentItem = 0;
    }
    showImg(currentItem);
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = pics.length - 1;
    }
    showImg(currentItem);
});

btnColor.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];

});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}