// for target a btn size
import { CardMenu } from "../js/fetchComponents.js";

const btns = document.querySelectorAll(".btn-choix");
const listPanier = JSON.parse(localStorage.getItem("produits")) || []
const listProduct = [];

btns.forEach(btn => {
    btn.addEventListener("click", () => {



        btns.forEach(reset => {
            reset.style.backgroundColor = "";
            const size = reset.querySelector(".size-food");
            const priceSize = reset.querySelector(".price-size");
            size.style.color = "";
            priceSize.style.backgroundColor = "";
        });


        btn.style.backgroundColor = "#181818";
        const size = btn.querySelector(".size-food");
        size.style.color = "white";
        const priceSize = btn.querySelector(".price-size");
        priceSize.style.backgroundColor = "#860000";
    });
});

const imageFetch = document.querySelector(".image-url");
const titleFetch = document.querySelector(".title-food");
const descriptionFetch = document.querySelector(".description-food")
const priceFetch = document.querySelector("#total-price");
const priceSizeFetch = document.getElementsByClassName("priceT");
const btnAddToCard = document.querySelector(".btn-add-to-card");
let priceStock = 0;

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

let produit = null;

//fetch date.json to change all info in details with produit i clicked

fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(e => {
            listProduct.push(e);
            if (e.id == id) {
                produit = e;
                imageFetch.src = e.image;
                titleFetch.textContent = e.name;
                descriptionFetch.textContent = e.description;
                priceFetch.textContent = e.price;
                priceStock = e.price;

                for (let i = 0; i < priceSizeFetch.length; i++) {
                    priceSizeFetch[i].textContent = e.price * (i+1);
                }
            }
        })
    });


const plusPriceValue = document.querySelector('.btn-plus');
// console.log(aMed);

plusPriceValue.addEventListener('click', () => {
    const pluS = document.querySelector('#number-total-food');
    let valuePlus = parseInt(pluS.textContent);
    valuePlus++;
    pluS.textContent = valuePlus;

    const totalPrice = document.querySelector('#total-price');
    let valuePrice = parseFloat(totalPrice.textContent);
    valuePrice += priceStock;


    totalPrice.textContent = valuePrice.toFixed(2);

})


const minusPriceValue = document.querySelector('.btn-minus');

minusPriceValue.addEventListener('click', () => {
    const minuS = document.querySelector('#number-total-food');
    let valueMinus = parseInt(minuS.textContent);
    if (valueMinus > 1) {
        valueMinus--;
        minuS.textContent = valueMinus;
    }

    const totalPrice = document.querySelector('#total-price');
    let valuePrice = parseFloat(totalPrice.textContent);
    if (valuePrice > priceStock) {
        valuePrice -= priceStock;
        totalPrice.textContent = valuePrice.toFixed(2);
    }
});

btnAddToCard.addEventListener("click", () => {
    const nbrTotal = document.querySelector("#number-total-food").textContent;
    const p = listPanier.find(e => e.id == id);

    if (p) {
        p.quantity += Number(nbrTotal);
    } else {

        produit.quantity = Number(nbrTotal);
        listPanier.push(produit);
    }

    alert('you add the product in card go back to buy you food');
    localStorage.setItem("produits", JSON.stringify(listPanier));
});

// fetch food similar (abdessamad)

const SimilarFood = document.getElementById("SimilarFood");
fetch("../data/data.json")
    .then(res => res.json())
    .then(data => {
        data.forEach(d => {
            if (produit.category == d.category) {
                let card = document.createElement("div")
                card.id = d.id
                card.innerHTML = CardMenu(d)
                let btnPanier = card.querySelector("#btnPanier")
                card.addEventListener("click", () => {
                    window.location.href = `../Pages/details.html?id=${d.id}`;
                })
                btnPanier.addEventListener("click", (event) => {
                    event.stopPropagation()
                    let exist = false
                    //
                    listPanier.forEach(p => {
                        if (p.id === d.id) {
                            exist = true
                        }
                    })
                    if (exist) {
                        alert("produit deja en panier")
                    } else {
                        listPanier.push(d)
                        localStorage.setItem("produits", JSON.stringify(listPanier))
                        alert("produit bien ajouter en panier")
                    }

                })
                SimilarFood.append(card)
            }
        })
    })