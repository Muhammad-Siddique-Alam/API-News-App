var getSearch = document.querySelector("#get-search");

function searchNews() {
  //  p-3 m-1 d-flex justify-content-evenly
  fetch(
    `https://newsapi.org/v2/everything?q=${getSearch.value}&from=2024-05-07&sortBy=publishedAt&apiKey=241657e13a6f4ebeb06fb863d26b3ab1`
  )
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      var getDiv = document.querySelector("#news");

      for (var i = 0; i < data.articles.length; i++) {
        getDiv.innerHTML += `<div class="card " style="width: 18rem;">
  <img src= ${
    data.articles[i].urlToImage
      ? data.articles[i].urlToImage
      : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fdefault-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_33011701.htm&psig=AOvVaw0Zl1zEFyPNvAxCBbi4zbYR&ust=1717854504407000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCwtO_QyYYDFQAAAAAdAAAAABAE"
  } class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.articles[i].title}</h5>
    <p class="card-text">${data.articles[i].content}</p>
                                 </div>
</div>`;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
