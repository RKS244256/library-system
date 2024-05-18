// Library Info
var libTitles = JSON.parse(localStorage.getItem("bookTitles"));
var libAuthors = JSON.parse(localStorage.getItem("bookAuthors"));
var libIds = JSON.parse(localStorage.getItem("bookIDs"));
var libDatePubs = JSON.parse(localStorage.getItem("bookDate"));
var libTypes = JSON.parse(localStorage.getItem("bookType"));
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
    for(i=0;i<libTitles.length;i++){
        accepted = true;
        console.log(libTitles[i])
        if(bookSearchTitle === "true" && bookSearch !== libTitles[i].toLowerCase()){
            accepted = false;
        }
        console.log(i, accepted)
        if(bookSearchAuthor === "true" && bookSearch === libAuthors[i].toLowerCase()){
            accepted = true;
        }
        console.log(i, accepted)
        if(bookSearchId === "true" && bookSearch === libIds[i]){
            accepted = true;
        }
        console.log(i, accepted)
        if(bookSearchTitle === "false" && bookSearchAuthor === "false" && bookSearchId === "false"){
            if(bookSearch === libTitles[i].toLowerCase() || bookSearch === libAuthors[i].toLowerCase() || bookSearch === libIds[i]){
                accepted = true;
            } else {
                accepted = false;
            }
        }
        console.log(i, accepted)
        if(bookSearchDate !== "na" && bookSearchDate !== libDatePubs[i] && accepted){
            accepted = false;
        }
        console.log(i, accepted)
        if(bookSearchTypeFiction === "true" && libTypes[i] !== "fiction" && accepted){
            accepted = false;
        }
        console.log(i, accepted)
        if(bookSearchTypeNonFiction === "true" && libTypes[i] !== "nonfiction" && accepted){
            accepted = false;
        }
        console.log(i, accepted)
        if(bookSearchTypeGraphicNovel === "true" && libTypes[i] !== "graphicnovel" && accepted){
            accepted = false;
        }
        console.log(i, accepted)
        if (accepted){
            var result = [libTitles[i], libAuthors[i], libIds[i], libDatePubs[i], libTypes[i]];
            results.push(result);
        }
        console.log(i, accepted)
        console.log()
    }
    for(i=0;i<results.length;i++){
        var rdiv = document.createElement('div');
        rdiv.id = 'block';
        document.getElementsByTagName('body')[0].appendChild(rdiv);
        var title = document.createElement('p');
        rdiv.appendChild(title);
        title.innerHTML = results[i][0];
        var author = document.createElement('p');
        rdiv.appendChild(author);
        author.innerHTML = results[i][1];
        var id = document.createElement('p');
        rdiv.appendChild(id);
        id.innerHTML = results[i][2];
        var type = document.createElement('p');
        rdiv.appendChild(type);
        type.innerHTML = results[i][3];
        var date = document.createElement('p');
        rdiv.appendChild(date);
        date.innerHTML = results[i][4];
    }
}