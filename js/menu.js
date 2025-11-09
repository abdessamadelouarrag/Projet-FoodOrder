


//had fonction katrj3 placeholder sghir f iphone , o tkhlih kbir f pc
const searchFilter = document.getElementById('search_menu') //select input search
const phoneMediaQuery = window.matchMedia('(max-width: 600px)') //media query condition
function updatePlaceholder(e) {
    if (e.matches) {
        searchFilter.placeholder = 'Search';
    } else {
        searchFilter.placeholder = 'Search from menu...';
    }
}
updatePlaceholder(phoneMediaQuery);
phoneMediaQuery.addEventListener('change',updatePlaceholder);