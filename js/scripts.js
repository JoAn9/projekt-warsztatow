var article = document.querySelectorAll('.article-box');

function showArticle(e) {
    e.preventDefault();
    this.classList.toggle('active');
}
function hideArticleTitle(e) {
    e.preventDefault();
    var title = this.querySelector('.title');
    title.style.display = "none";
}

function showArticleTitle(e) {
    e.preventDefault();
    var title = this.querySelector('.title');
    title.style.display = "block";
}

for (var i=0; i<article.length; i++) {
    article[i].addEventListener('click', showArticle);
}
for (var i=0; i<article.length; i++) {
    article[i].addEventListener('mouseover', hideArticleTitle);
}

for (var i=0; i<article.length; i++) {
    article[i].addEventListener('mouseout', showArticleTitle);
}

var previous = document.querySelector('.main-slider-prev');
var next = document.querySelector('.main-slider-next');
var sliders = document.querySelectorAll('.main-slider-slide');

var counter = 0;

next.addEventListener('click', function () {

    sliders[counter].classList.remove('active');
    counter++;

    if(counter === 3) {
        counter = 0;
    }
    sliders[counter].classList.add('active');
});

previous.addEventListener('click', function () {
    sliders[counter].classList.remove('active');
    counter--;

    if(counter < 0) {
        counter = 2;
    }
    sliders[counter].classList.add('active');
});

var buttonOrder = document.querySelector('.green_button');
console.log(buttonOrder);

buttonOrder.addEventListener('click', function (e) {
    e.preventDefault();
});

var listArrow = document.querySelectorAll('.list_arrow');

for(var i=0;i<listArrow.length;i++) {
    listArrow[i].addEventListener('click', function() {
        var listPanel = this.nextElementSibling;
        listPanel.classList.toggle('show-list');
    });


}
