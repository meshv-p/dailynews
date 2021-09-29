// console.log('3684e6479e9a4ac29fd01258fe97dc0e');

//link = https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3684e6479e9a4ac29fd01258fe97dc0e
let api = '3684e6479e9a4ac29fd01258fe97dc0e';
let link = `https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=${api}`;
let title, content;
let spinner = document.getElementById('spinner');
let spin = `<div class="spinner-border text-primary" role="status">
<span class="visually-hidden">Loading...</span>
</div>`;

    

//start xhr
let xhr = new XMLHttpRequest();

xhr.open('GET', link, true);

xhr.onprogress = function () {
    // console.log("on progress");
}

xhr.onreadystatechange = function () {
    // console.log("ready state" + this.readyState);

    if (this.readyState == 4) {
        spinner.style.display = "none";
    }

}

xhr.onload = function () {
    if (this.status === 200) {
        let obj = JSON.parse(this.responseText);
      //  console.log(obj.articles[0].content);
        // title = obj.articles[2].title;
        // content = obj.articles[2].content;

        //showing news
        let accordionExample = document.getElementById('accordionExample');
        let notes = '';
        let loop = obj.articles;
        //    console.log(obj.articles);
        loop.forEach(function (e, index) {

         let article =   `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapseOne">
               ${e['title']}
              </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>
                ${e['content'].slice(0,196)} ... <a href="${e['url']}" class="text-muted" target="_blank">Read more</a>
                </strong>
                
                </div>
            </div>
          </div>`;
            notes +=  article;
        });
        // console.log(notes);
        accordionExample.innerHTML = notes;

    }
    else {
        //  document.getElementById('d').innerHTML = "Some error occured..";
        console.log("Some error occured..");
    }
}

xhr.send();



