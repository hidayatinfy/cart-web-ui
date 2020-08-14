function showCart(){
    let cart = document.getElementById("cart");
    if(cart.style.display === "none"){
        cart.style.display = "block";
    }else{
        cart.style.display = "none";
    }
    cartProduct();
}

/*
    Function : cartData
    Purpose: This is actual cart list which can show my cart product list
    Author: Tushar Dimble
    Date: 9th Aug 2020
*/

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
        let iNamePriceDiv = document.createElement('div');
        iNamePriceDiv.className = 'item-text';
        iDiv.appendChild(iNamePriceDiv);

        // Paragraph Tag
        let sName = document.createElement('p');
        sName.className = 'font-weight-bold mb-0';
        sName.innerHTML = myCart[i]['name'];
        iNamePriceDiv.appendChild(sName);

        // Span Price
        let sSpan = document.createElement('span');
        sSpan.className = 'cart-item-price';
        sSpan.innerHTML = myCart[i]['price'];
        iNamePriceDiv.appendChild(sSpan);

    }
    document.getElementById("cart-total").innerHTML = total;
    document.getElementById("item-count").innerHTML = myCartLength;
    document.getElementById("item-total").innerHTML = total;
}


/*
    Function : cartProduct
    Purpose: This function have list of cart item
    Author: Tushar Dimble
    Date: 9th Aug 2020
*/
function cartProduct(myproduct){

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
}



/*
    Function : Window On load
    Purpose: This function call when window is loaded
    Author: Tushar Dimble
    Date: 9th Aug 2020
*/
window.onload = function(){
    cartProduct();
};