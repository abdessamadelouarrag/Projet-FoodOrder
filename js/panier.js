import {CardPanier} from "./fetchComponents.js"
let cartProduct = JSON.parse(localStorage.getItem("produits"))  || []
console.log(cartProduct)
cartProduct.forEach(product=>{
    console.log(product)
    let inject =document.createElement('div')





    inject.innerHTML = CardPanier()
    inject.querySelector('#cart').id = product.id
    inject.querySelector('#img-cart').src = product.image
    inject.querySelector('#title').textContent = product.name
    inject.querySelector('#price').textContent = product.price
    document.querySelector('.totalPanier').textContent = ((parseFloat(document.querySelector('.totalPanier').textContent)+ ( parseFloat(product.price)*parseFloat(product.quantity)  )   )).toFixed(2).toString()
    inject.querySelector("#qte-text").textContent = product.quantity.toString()
    //event si lutilisateur click sur svg + qte va baisser et aussi pour svg -


//--------------------------------
    try{
    inject.querySelector('#miniceQte').addEventListener('click',e=>{
        cartProduct.forEach(toaddpro=>{
            if(toaddpro.id===product.id){
                if  (parseInt(inject.querySelector('#qte-text').textContent) === 1) {
                    inject.remove()
                    cartProduct = cartProduct.filter(every=> every.id!==product.id )
                    localStorage.setItem("produits",JSON.stringify(cartProduct))
                }
                else {
                    inject.querySelector('#qte-text').textContent= (parseInt(inject.querySelector('#qte-text').textContent)-1).toString()
                    product.quantity--;
                    localStorage.setItem("produits",JSON.stringify(cartProduct))
                }
            }
        })

        document.querySelector('.totalPanier').textContent =((parseFloat(document.querySelector('.totalPanier').textContent)-product.price)).toFixed(2).toString()
        document.querySelectorAll('.totalPanier')[1].textContent = document.querySelector('.totalPanier').textContent

    })}catch{console.log("fuck u1 ")}
    //
    //


    //addd to local storage
        try{ inject.querySelector('#addQte').addEventListener('click',e=>{
        inject.querySelector('#qte-text').textContent=(parseFloat(inject.querySelector('#qte-text').textContent)+1).toString()
        cartProduct.forEach(toaddpro=>{
            if(toaddpro.id===product.id){
                product.quantity++;
            }
        })
        localStorage.setItem("produits",JSON.stringify(cartProduct))
        document.querySelector('.totalPanier').textContent = (parseFloat(document.querySelector('.totalPanier').textContent)+parseFloat(product.price)).toFixed(2).toString()
        document.querySelectorAll('.totalPanier')[1].textContent = document.querySelector('.totalPanier').textContent
    }) }catch{console.log("fuck u2 ")}

    //removeeeee from the fk local storage
    try{inject.querySelector('#deleteCartCard').addEventListener('click',e=>{
        inject.remove()
       cartProduct = cartProduct.filter(prod=>prod.id !== product.id)

        localStorage.setItem("produits",JSON.stringify(cartProduct))

        document.querySelector('.totalPanier').textContent = (parseFloat(document.querySelector('.totalPanier').textContent)- ( parseFloat(product.price)*parseInt(product.quantity)    )).toFixed(2).toString()
        document.querySelectorAll('.totalPanier')[1].textContent = document.querySelector('.totalPanier').textContent
    })}catch{console.log("fuck u3 ")}
//--------------------------------

    document.querySelectorAll('.totalPanier')[1].textContent = document.querySelector('.totalPanier').textContent
    document.getElementById("elemnt-ajouter").append(inject)
})

///////////erreur lwl khas xi blan kfch html dyal panier treload onclick
// khas hta localstorage l total