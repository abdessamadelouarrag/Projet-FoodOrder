import { CardMenu } from "../js/fetchComponents.js";


//had fonction katrj3 placeholder sghir f iphone , o tkhlih kbir f pc
const searchFilter = document.getElementById('search_menu') //select input search
const phoneMediaQuery = window.matchMedia('(max-width: 600px)') //media query condition
const containerCards = document.querySelector("#menu_container")
const page3 = document.querySelector("#page3")
const page2 = document.querySelector("#page2")
const page1 = document.querySelector("#page1")

const burgerLi = document.querySelector("#burger")
const pizzaLi = document.querySelector("#pizza")
const drinkLi = document.querySelector("#drinks")


const burger = document.querySelector("#burger a")
const pizza = document.querySelector("#pizza a")
const drinks = document.querySelector("#drinks a")




function updatePlaceholder(e) {
    if (e.matches) {
        searchFilter.placeholder = 'Search';
    } else {
        searchFilter.placeholder = 'Search from menu...';
    }
}
updatePlaceholder(phoneMediaQuery);
phoneMediaQuery.addEventListener('change', updatePlaceholder);
const container = document.getElementById("menu_container");

let listProduit = JSON.parse(localStorage.getItem("produits")) || [];
fetch("../data/data.json")
    .then(res => res.json())
    .then(data => {
        for (let e = 0; e < 9; e++) {

            let card = document.createElement("div")
            card.id = data[e].id

            card.innerHTML = CardMenu(data[e])
            let btnPanier = card.querySelector("#btnPanier")

            card.addEventListener("click", () => {
                window.location.href = `../Pages/details.html?id=${data[e].id}`;
            })
            if (data[e].availability == true) {
                console.log("mouad")
                btnPanier.addEventListener("click", (event) => {
                    event.stopPropagation()
                    let exist = false
                    //
                    listProduit.forEach(p => {
                        if (p.id === data[e].id) {
                            exist = true
                        }
                    })
                    if (exist) {
                        alert("produit deja en panier")
                    } else {
                        listProduit.push(data[e])
                        localStorage.setItem("produits", JSON.stringify(listProduit))
                        location.reload()
                        alert("produit bien ajouter en panier")
                    }

                })


            }
            else {
                btnPanier.addEventListener("click", (ev) => {
                    ev.stopPropagation();
                    alert("produit not available")

                })
            }
            container.append(card)


        }
    })
fetch("../data/data.json")
    .then(res => res.json())
    .then(data => {

        //had partie d search
        searchFilter.addEventListener('input', (event) => {
            if (searchFilter.value.length === 0) {

                containerCards.innerHTML = ""
                for (let i = 0; i < 9; i++) {

                    // console.log("mouad")

                    let card = document.createElement("div")
                    card.id = data[i].id
                    card.innerHTML = CardMenu(data[i])

                    card.addEventListener("click", () => {
                        window.location.href = `../Pages/details.html?id=${data[i].id}`;
                    })
                    let btnPanier = card.querySelector("#btnPanier")
                    if (data[i].availability == true) {
                        btnPanier.addEventListener("click", (event) => {
                            event.stopPropagation()
                            let exist = false
                            //
                            listProduit.forEach(p => {
                                if (p.id == data[i].id) {
                                    exist = true
                                }
                            })
                            if (exist) {
                                alert("produit deja en panier")
                            } else {
                                listProduit.push(data[i])
                                localStorage.setItem("produits", JSON.stringify(listProduit))
                                location.reload()
                                alert("produit bien ajouter en panier")
                            }

                        })
                    } else {
                        btnPanier.addEventListener("click", (ev) => {
                            ev.stopPropagation();
                            alert("produit not available")

                        })
                    }


                    container.append(card)
                }
            }
            else {
                containerCards.innerHTML = ""
                const valueSearch = searchFilter.value

                data.filter(element => {
                    if (element.name.toLowerCase().includes(valueSearch.toLowerCase())) {
                        let cardS = document.createElement("div")
                        cardS.id = element.id
                        cardS.innerHTML = CardMenu(element)

                        cardS.addEventListener("click", () => {
                            window.location.href = `../Pages/details.html?id=${element.id}`;
                        })
                        let btnPanier = cardS.querySelector("#btnPanier")
                        if (element.availability == true) {
                            console.log("mouad")
                            btnPanier.addEventListener("click", (event) => {
                                event.stopPropagation()
                                let exist = false
                                //
                                listProduit.forEach(p => {
                                    if (p.id === element.id) {
                                        exist = true
                                    }
                                })
                                if (exist) {
                                    alert("produit deja en panier")
                                } else {
                                    listProduit.push(element)
                                    localStorage.setItem("produits", JSON.stringify(listProduit))
                                    location.reload()
                                    alert("produit bien ajouter en panier")
                                }

                            })
                        } else {
                            btnPanier.addEventListener("click", (ev) => {
                                ev.stopPropagation();
                                alert("produit not available")

                            })
                        }





                        containerCards.append(cardS)

                    }


                })
            }
        })



        burger.addEventListener('click', e => {
            burgerLi.classList.add("burgerHov")
            pizzaLi.classList.remove("pizzaHov")
            drinkLi.classList.remove("drinkHov")
            containerCards.innerHTML = "";
            data.filter(item => {
                if (item.category.toLowerCase().includes(burger.textContent.toLowerCase())) {
                    let cardS = document.createElement("div")
                    cardS.id = item.id
                    cardS.innerHTML = CardMenu(item)
                    containerCards.append(cardS)
                    cardS.addEventListener("click", () => {
                        window.location.href = `../Pages/details.html?id=${item.id}`;
                    })

                    let btnPanier = cardS.querySelector("#btnPanier")
                    if (item.availability == true) {
                        btnPanier.addEventListener("click", (event) => {
                            event.stopPropagation()
                            let exist = false
                            //
                            listProduit.forEach(p => {
                                if (p.id == item.id) {
                                    exist = true
                                }
                            })
                            if (exist) {
                                alert("produit deja en panier")
                            } else {
                                listProduit.push(item)
                                localStorage.setItem("produits", JSON.stringify(listProduit))
                                location.reload()
                                alert("produit bien ajouter en panier")
                            }

                        })
                    }
                    else {
                        btnPanier.addEventListener("click", (ev) => {
                            ev.stopPropagation();
                            alert("produit not available")

                        })
                    }


                }
            })

        })

        pizza.addEventListener('click', e => {
            burgerLi.classList.remove("burgerHov")
            pizzaLi.classList.add("pizzaHov")
            drinkLi.classList.remove("drinkHov")
            containerCards.innerHTML = "";
            data.filter(item => {
                if (item.category.toLowerCase().includes(pizza.textContent.toLowerCase())) {
                    let cardS = document.createElement("div")
                    cardS.id = item.id

                    cardS.innerHTML = CardMenu(item)


                    cardS.addEventListener("click", () => {
                        window.location.href = `../Pages/details.html?id=${item.id}`;
                    })
                    let btnPanier = cardS.querySelector("#btnPanier")
                    if (item.availability == true) {
                        btnPanier.addEventListener("click", (event) => {
                            event.stopPropagation()
                            let exist = false

                            listProduit.forEach(p => {
                                if (p.id == item.id) {
                                    exist = true
                                }
                            })
                            if (exist) {
                                alert("produit deja en panier")
                            } else {
                                listProduit.push(item)
                                localStorage.setItem("produits", JSON.stringify(listProduit))
                                location.reload()
                                alert("produit bien ajouter en panier")
                            }

                        })
                    }
                    else {
                        btnPanier.addEventListener("click", (ev) => {
                            ev.stopPropagation();
                            alert("produit not available")

                        })
                    }
                    containerCards.append(cardS)


                }

            })

        })

        drinks.addEventListener('click', e => {
            burgerLi.classList.remove("burgerHov")
            pizzaLi.classList.remove("pizzaHov")
            drinkLi.classList.add("drinkHov")
            containerCards.innerHTML = "";
            data.filter(item => {
                if (item.category.toLowerCase().includes("Drink".toLowerCase())) {
                    let cardS = document.createElement("div")
                    cardS.id = item.id
                    cardS.innerHTML = CardMenu(item)
                    containerCards.append(cardS)
                    cardS.addEventListener("click", () => {
                        window.location.href = `../Pages/details.html?id=${item.id}`;
                    })
                    let btnPanier = cardS.querySelector("#btnPanier")
                    if (item.availability == true) {
                        btnPanier.addEventListener("click", (event) => {
                            event.stopPropagation()
                            let exist = false
                            //
                            listProduit.forEach(p => {
                                if (p.id == item.id) {
                                    exist = true
                                }
                            })
                            if (exist) {
                                alert("produit deja en panier")
                            } else {
                                listProduit.push(item)
                                localStorage.setItem("produits", JSON.stringify(listProduit))
                                location.reload()
                                alert("produit bien ajouter en panier")
                            }

                        })
                    }
                    else {
                        btnPanier.addEventListener("click", (ev) => {
                            ev.stopPropagation();
                            alert("produit not available")

                        })
                    }
                }
            })

        })



        page1.addEventListener('click', e => {
            page1.classList.add("paginationdef1")
            page1.classList.remove("pagination1")
            page2.classList.add("pagination2")
            page3.classList.add("pagination3")
            containerCards.innerHTML = "";
            for (let j = 0; j < 9; j++) {
                let cardS = document.createElement("div")
                cardS.id = data[j].id
                cardS.innerHTML = CardMenu(data[j])


                cardS.addEventListener("click", () => {
                    window.location.href = `../Pages/details.html?id=${data[j].id}`;
                })


                let btnPanier = cardS.querySelector("#btnPanier")
                if (data[j].availability == true) {

                    btnPanier.addEventListener("click", (even) => {
                        even.stopPropagation()
                        let exist = false
                        //
                        listProduit.forEach(p => {
                            if (p.id === data[j].id) {
                                exist = true
                            }
                        })
                        if (exist) {
                            alert("produit deja en panier")
                        } else {
                            listProduit.push(data[j])
                            localStorage.setItem("produits", JSON.stringify(listProduit))
                            location.reload()
                            alert("produit bien ajouter en panier")
                        }

                    })
                }

                else {
                    btnPanier.addEventListener("click", (ev) => {
                        ev.stopPropagation();
                        alert("produit not available")

                    })
                }
                containerCards.append(cardS)

            }
        })

        page2.addEventListener('click', e => {
            page1.classList.remove("paginationdef1")
            page2.classList.remove("pagination2")
            page1.classList.add("pagination1")
            page3.classList.add("pagination3")
            containerCards.innerHTML = "";
            for (let i = 8; i < 17; i++) {
                let cardS = document.createElement("div")
                cardS.id = data[i].id
                cardS.innerHTML = CardMenu(data[i])
                containerCards.append(cardS)

                cardS.addEventListener("click", () => {
                    window.location.href = `../Pages/details.html?id=${e.id}`;
                })

                let btnPanier = cardS.querySelector("#btnPanier")
                if (data[i].availability == true) {
                    btnPanier.addEventListener("click", (event) => {
                        event.stopPropagation()
                        let exist = false
                        //
                        listProduit.forEach(p => {
                            if (p.id === data[i].id) {
                                exist = true
                            }
                        })
                        if (exist) {
                            alert("produit deja en panier")
                        } else {
                            listProduit.push(data[i])
                            localStorage.setItem("produits", JSON.stringify(listProduit))
                            location.reload()
                            alert("produit bien ajouter en panier")
                        }

                    })
                }
                else {
                    btnPanier.addEventListener("click", (ev) => {
                        ev.stopPropagation();
                        alert("produit not available")

                    })


                }

            }
        })

        page3.addEventListener('click', e => {
            page3.classList.remove("pagination3")
            page2.classList.add("pagination2")
            page1.classList.add("pagination1")
            page1.classList.remove("paginationdef1")
            containerCards.innerHTML = "";
            for (let i = 18; i < 27; i++) {
                let cardS = document.createElement("div")
                cardS.id = data[i].id
                cardS.innerHTML = CardMenu(data[i])


                cardS.addEventListener("click", () => {
                    window.location.href = `../Pages/details.html?id=${e.id}`;
                })

                let btnPanier = cardS.querySelector("#btnPanier")
                if (data[i].availability == true) {
                    btnPanier.addEventListener("click", (event) => {
                        event.stopPropagation()
                        let exist = false
                        //
                        listProduit.forEach(p => {
                            if (p.id === data[i].id) {
                                exist = true
                            }
                        })
                        if (exist) {
                            alert("produit deja en panier")
                        } else {
                            listProduit.push(data[i])
                            localStorage.setItem("produits", JSON.stringify(listProduit))
                            location.reload()
                            alert("produit bien ajouter en panier")
                        }

                    })
                }
                else {

                    btnPanier.addEventListener("click", (ev) => {
                        ev.stopPropagation();
                        alert("produit not available")

                    })
                }

                containerCards.append(cardS)
            }
        })

    })