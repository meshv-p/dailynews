// console.log('3684e6479e9a4ac29fd01258fe97dc0e');
//maan - 3684e6479e9a4ac29fd01258fe97dc0e
//meshv - e217c1e1f57e46289989fd685a5f108b
//link = https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3684e6479e9a4ac29fd01258fe97dc0e
// let api = 'e217c1e1f57e46289989fd685a5f108b';
let source = 'bbc-news'
let category = 'sport';
let pgno = 1;
let link = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${pgno}&pagesize=10&apiKey=${api}`;
console.log(link);
let title, content;
let spinner = document.getElementById('spinner');
let accordionExample = document.getElementById('accordionExample');
let notes = '';
let notes2 = '';
let spin = `<div class="spinner-border text-primary" role="status">
<span class="visually-hidden">Loading...</span>
</div>`;
let number = 1;

document.getElementById('science').addEventListener('click',()=>{
    category = "science";
})


function loaddata() {


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
            console.log(obj);
            // title = obj.articles[2].title;
            // content = obj.articles[2].content;

            //showing news
            let accordionExample = document.getElementById('accordionExample');
            let loop = obj.articles;
            // console.log(obj.articles.);
            //    console.log(obj.articles);
            loop.forEach(function (e ) {

                let article = `<div class="accordion-item" >
            <h2 class="accordion-header" id="heading${number}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${number}" aria-expanded="true" aria-controls="collapseOne">
              <b>Breaking News ${number }:&nbsp&nbsp </b> ${e['title']}
              </button>
            </h2>
            <div id="collapse${number}" class="accordion-collapse collapse " aria-labelledby="heading${number}" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>
                ${e['content']} ... <a href="${e['url']}" target="_blank">Read more</a>
                </strong>
                
                </div>
            </div>
          </div>`;
                notes += article;
                number++;
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
    
}

loaddata();
// let page = document.documentElement.scrollHeight;
// let m = window.scrollY;
// console.log(m);

function loaddata1() {
    pgno++;
    link = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${pgno}&pagesize=10&apiKey=${api}`;

   //start xhr
   let xhr = new XMLHttpRequest();

   xhr.open('GET', link, true);

   xhr.onprogress = function () {
       // console.log("on progress");
   }

   xhr.onreadystatechange = function () {
       // console.log("ready state" + this.readyState);

       if (this.readyState == 4) {
        document.getElementById('endspinner').classList.remove('spinner-border');

       }

   }

   xhr.onload = function () {
       if (this.status === 200) {
           let obj = JSON.parse(this.responseText);
           console.log(obj);
           // title = obj.articles[2].title;
           // content = obj.articles[2].content;

           //showing news
           let accordionExample = document.getElementById('accordionExample');
           let loop = obj.articles;
           // console.log(obj.articles.);
           //    console.log(obj.articles);
           loop.forEach(function (e ) {

               let article = `<div class="accordion-item">
           <h2 class="accordion-header" id="heading${number}">
             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${number}" aria-expanded="true" aria-controls="collapseOne">
             <b>Breaking News ${number}:&nbsp&nbsp </b> ${e['title']}
             </button>
           </h2>
           <div id="collapse${number}" class="accordion-collapse collapse " aria-labelledby="heading${number}" data-bs-parent="#accordionExample">
             <div class="accordion-body">
               <strong>
               ${e['content']} ... <a href="${e['url']}" target="_blank">Read more</a>
               </strong>
               
               </div>
           </div>
         </div>`;
               notes2 += article;
               number++;
           });
           // console.log(notes);
          let d = notes.concat(notes2);
          accordionExample.innerHTML = d;

       }
       else {
           //  document.getElementById('d').innerHTML = "Some error occured..";
           console.log("Some error occured..");
       }
   }

   xhr.send();
   
}



window.addEventListener('scroll', () => {
    if (scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        console.log('i am at bottom');
        document.getElementById('endspinner').classList.add('spinner-border');
        console.log('spinner added');
        loaddata1();
    }
})
