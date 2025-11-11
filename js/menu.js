import { CardMenu } from "../js/fetchComponents.js";


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
const container = document.getElementById("menu_container");

let listProduit = JSON.parse(localStorage.getItem("produits")) || [];
fetch("../data/data.json")
.then(res => res.json())
.then(data => {
    data.forEach(e=> {
        let card = document.createElement("div")
        card.id = e.id
        card.innerHTML = CardMenu(e)
        let btnPanier = card.querySelector("#btnPanier")
        card.addEventListener("click" , ()=>{
            window.location.href = `../Pages/details.html?id=${e.id}`;
        })
        btnPanier.addEventListener("click" , ()=>{
            let exist = false 
            //
            listProduit.forEach(p=>{
                if(p.id === e.id){
                    exist = true
                }
            })
            if(exist){
                alert("produit deja en panier")
            }else{
                listProduit.push(e)
                localStorage.setItem("produits" , JSON.stringify(listProduit))
                alert("produit bien ajouter en panier")
            }
            
        })
        container.append(card)
    })
})