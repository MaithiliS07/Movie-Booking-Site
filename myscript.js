//Search box filter code
/*let page = document.querySelectorAll('body');
function search(){
    let searchbox = document.getElementById("search-text").value;
       //Use innerText if all contents are visible
    //Use textContent for including hidden elements
    for (var i = 0; i < page.length; i++) {
        if(page[i].textContent.toLowerCase()
                .includes(search_query.toLowerCase())) {
            page[i].classList.remove("is-hidden");
        } else {
            cards[i].classList.add("is-hidden");
        }
    }
}

//A little delay
let typingTimer;               
let typeInterval = 500;  
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});*/