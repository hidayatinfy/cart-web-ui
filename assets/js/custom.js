function showCart(){
    let cart = document.getElementById("cart");
    if(cart.style.display === "none"){
        cart.style.display = "block";
    }else{
        cart.style.display = "none";
    }
    cartProduct();
}

function cartData(myCart){
    document.getElementById('mycartdata').innerHTML = "";
    let total = 0;
    let myCartLength = myCart.length;
    
    for(let i=0; i<myCart.length;i++){
        total += myCart[i]['price'];
        // Main Div
        let iDiv = document.createElement('div');
        iDiv.className = 'cart-item d-flex justify-content-between text-capitalize my-3';
        document.getElementById('mycartdata').appendChild(iDiv);
        
        // For Image
        let imgDiv = document.createElement('IMG');
        imgDiv.className = 'img-fluid rounded-circle';
        imgDiv.setAttribute("src", "assets/images/"+myCart[i]['image']);
        iDiv.appendChild(imgDiv);

        // Name Div
        let iNamePriceDiv = document.createElement('item-text');
        iNamePriceDiv.className = 'cart-item d-flex justify-content-between text-capitalize my-3';
        iDiv.appendChild(iNamePriceDiv);

        // Paragraph Tag
        let sName = document.createElement('p');
        sName.className = 'font-weight-bold mb-0';
        sName.innerHTML = myCart[i]['name'];
        iDiv.appendChild(sName);

        // Span Price
        let sSpan = document.createElement('span');
        sSpan.className = 'cart-item-price';
        sSpan.innerHTML = myCart[i]['price'];
        iDiv.appendChild(sSpan);

    }
    document.getElementById("cart-total").innerHTML = total;
    document.getElementById("item-count").innerHTML = myCartLength;
    document.getElementById("item-total").innerHTML = total;
}

function cartProduct(){
    let myCart = [
        {
            image: '1.jpeg',
            name: 'cake1',
            price: 430
        },
        {
            image: '2.jpeg',
            name: 'cake2',
            price: 270
        },
        {
            image: '1.jpeg',
            name: 'cake3',
            price: 320
        },
    ];
    cartData(myCart);
}

window.onload = function(){
    cartProduct();
};