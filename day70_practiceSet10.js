/*
    Q1. Use a free api from the internet and feed your with live data
*/
console.log("Hello world");

const APIKEY = '14bfa21dd6fc493e9dd82c9a4f61158f';

let url = `https://newsapi.org/v2/everything?q=apple&from=2023-12-20&to=2023-12-20&sortBy=popularity&apiKey=${APIKEY}`

let news = fetch(url);

news.then((value) => {
    return value.json();
})
    .then((value) => {

        let ihtml = ``;
        for (item in value.articles) {
            let i = value.articles[item];
            console.log(i);


            if (i.description === null) {
                i.description = "Hello";
            }
            else if (i.description.length >= 150) {
                let result = i.description;
                i.description = result.substring(0, 90);
            }
            else {
                i.description = i.description;
            }

            let title = i.title;
            if (title.length >= 51)
                title = title.substring(0, 51);


            ihtml += `
            <div class="card" style="width: 18rem;">
            <img src="${i.urlToImage ? i.urlToImage : 'https://th.bing.com/th/id/R.f768c15607084a0b1e1a7802259d889d?rik=PW1FJqYdFpgi0w&riu=http%3a%2f%2fimg.photobucket.com%2falbums%2fv328%2fClayskater%2fGreetings%2fBanners%2fnews-banner3.jpg&ehk=TrZpgVN4FsukXfmwEcTN1E%2bvltVb0%2bWXUoGFHRCQQo8%3d&risl=&pid=ImgRaw&r=0'}" class="card-img-top" alt="..." height="161">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">
                ${i.description + '...'}
                </p>
                <p>- ${i.author} </p>
                <a href="${i.url}" target="_blank" class="btn btn-primary">Read full news</a>
            </div>
        </div>`
        }

        newscontainer.innerHTML = ihtml;
    })

/*
    Q2. Create a note saving app which stores your note to the local storage.
    
    
    let note = prompt("Enter your note ");
    
    localStorage.setItem("note", note);
    
    console.log("User's note is : ", localStorage.getItem("note"));
    
    if (note == 0)
    localStorage.removeItem("note");
*/