const URL = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=a7912003a9a04585b9b4ccd2646523bb';
const searchURL = 'https://newsapi.org/v2/everything?q=';
const API_KEY = '&apiKey=a7912003a9a04585b9b4ccd2646523bb';
let news = document.getElementById('news');
let search = document.getElementById('search');
const progressBar = `<div class="progress"><div class="indeterminate"></div></div>`;

document.addEventListener("DOMContentLoaded", function(){
    getNews()
    search.addEventListener('keyup', function(event){
        if(search.value === "") {
            getNews()
        } else {
            searchNews(search.value)
        }
    })
});

function getNews() {
    fetch(URL)
        .then(news.innerHTML = progressBar)
        .then(function (response) {
            return response.json()
        })
        .catch(function (err) {
            console.log(err)
        })
        .then(showNews)
}

function searchNews(newsName) {
    fetch(searchURL + newsName + API_KEY)
        .then(news.innerHTML = progressBar)
        .then(function(response) {
            return response.json();
        })
        .catch(function(err){
            console.log(err)
        })
        .then(showNews)
}

function showNews(data) {
    let newsData = '';
    if(data.articles == "") {
        news.innerHTML = "<h3>Artikel tidak ditemukan</h3>";
    } else {
        data.articles.forEach((item) => {
            newsData+=
            `<article>
                <img src="${item.urlToImage}" alt="Gambar tidak ditemukan">
                <h3>${item.title}</h3>
                <p class="author">${item.author} - ${item.publishedAt}</p>
                <p class="description">${item.description} <a href="${item.url}" target="_blank"><button>Read More..</button></a></p>
            </article>`
        });
        news.innerHTML = newsData;
    }
}