var article = document.querySelectorAll('.article-box');
var previous = document.querySelector('.main-slider-prev');
var next = document.querySelector('.main-slider-next');
var sliders = document.querySelectorAll('.main-slider-slide');
var counter = 0;


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

function manageSliderNext() {
    sliders[counter].classList.remove('active');
    counter++;

    if(counter === 3) {
        counter = 0;
    }
    sliders[counter].classList.add('active');
}

function manageSliderPrevious() {
    sliders[counter].classList.remove('active');
    counter--;

    if(counter < 0) {
        counter = 2;
    }
    sliders[counter].classList.add('active');
}

function showList() {
    var listPanel = this.nextElementSibling;
    listPanel.classList.toggle('show-list');
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

next.addEventListener('click', manageSliderNext);

previous.addEventListener('click', manageSliderPrevious);



var buttonOrder = document.querySelector('.green_button');

buttonOrder.addEventListener('click', function (e) {
    e.preventDefault();
});

var listArrow = document.querySelectorAll('.list_arrow');

for(var i=0;i<listArrow.length;i++) {
    listArrow[i].addEventListener('click', showList);
}
