// Library Info
var libBooks = JSON.parse(localStorage.getItem("libBooks"))
// Search
var bookSearch = localStorage.getItem("bookSearch").toLowerCase();
var bookSearchTitle = localStorage.getItem("bookSearchTitle");
var bookSearchAuthor = localStorage.getItem("bookSearchAuthor");
var bookSearchId = localStorage.getItem("bookSearchId");
var bookSearchDate = localStorage.getItem("bookDateSearch");
var bookSearchTypeFiction = localStorage.getItem("bookTypeSearchFiction");
var bookSearchTypeNonFiction = localStorage.getItem("bookTypeSearchNonFiction");
var bookSearchTypeGraphicNovel = localStorage.getItem("bookTypeSearchGraphicNovel");
// Results
let results = [];

function displaySpecificResult(){
    for(i=0;i<libBooks.length;i++){
        var accepted;
        console.log(libBooks[i][0])
        if(bookSearchTitle === "true" && bookSearch === libBooks[i][0].toLowerCase()){
            accepted = true;
        }  else {
            accepted = false;
        }
        console.log(i, accepted)
        if(bookSearchAuthor === "true" && bookSearch === libBooks[i][1].toLowerCase()){
            accepted = true;
        }
        console.log(i, accepted)
        if(bookSearchId === "true" && bookSearch === libBooks[i][2]){
            accepted = true;
        }
        console.log(i, accepted)
        if(bookSearchTitle === "false" && bookSearchAuthor === "false" && bookSearchId === "false"){
            if(bookSearch === libBooks[i][0].toLowerCase() || bookSearch ===libBooks[i][1].toLowerCase() || bookSearch === libBooks[i][2]){
                accepted = true;
            } else {
                accepted = false;
            }
        }
        console.log(i, accepted)
        if(bookSearchDate !== "na" && bookSearchDate !== libBooks[i][3] && accepted){
            accepted = false;
        }
        console.log(i, accepted)
        if(bookSearchTypeFiction === "true" && libBooks[i][4] !== "fiction" && accepted){
            accepted = false;
        }
        console.log(i, accepted)
        if(bookSearchTypeNonFiction === "true" && libBooks[i][4]  !== "nonfiction" && accepted){
            accepted = false;
        }
        console.log(i, accepted)
        if(bookSearchTypeGraphicNovel === "true" && libBooks[i][4]  !== "graphicnovel" && accepted){
            accepted = false;
        }
        console.log(i, accepted)
        if (accepted){
            results.push(libBooks[i]);
        }
        console.log(i, accepted)
        console.log()
    }
    for(i=0;i<results.length;i++){
        var rdiv = document.createElement('div');
        rdiv.id = 'block';
        rdiv.className = 'resultd';
        document.getElementsByTagName('body')[0].appendChild(rdiv);
        var title = document.createElement('p')
        rdiv.appendChild(title);
        title.innerHTML = results[i][0];
        var author = document.createElement('p')
        rdiv.appendChild(author);
        author.innerHTML = results[i][1];
        var id = document.createElement('p')
        rdiv.appendChild(id);
        id.innerHTML = results[i][2];
        var type = document.createElement('p')
        rdiv.appendChild(type);
        type.innerHTML = results[i][3];
        var date = document.createElement('p')
        rdiv.appendChild(date);
        date.innerHTML = results[i][4];
        var status = document.createElement('p')
        rdiv.appendChild(status);
        if(results[i][5]){
            status.innerHTML = "Checked Out"
        } else {
            status.innerHTML = "Available"
        }
        
    }
    var nr = document.createElement('p');
    nr.innerHTML = "No more results :("
    document.getElementsByTagName('body')[0].appendChild(nr);
}