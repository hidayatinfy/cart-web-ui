showCart = () => {
    let cart = document.getElementById("cart");
    if(cart.style.display === "none"){
        cart.style.display = "block";
    }else{
        cart.style.display = "none";
    }
    cartData();
}


cartProduct = () => {
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
    return myCart;
}

window.onload = function(){
    cartData();
};

let cartData = () => {
    const myCart = cartProduct();
    
    document.getElementById('mycartdata').innerHTML = "";
    let total = 0;
    let myCartLength = myCart.length;
    
    myCart.map(function(data,index){
        total += data['price'];
        createUi(data['name'],data['image'],data['price']);
    });

    document.getElementById("cart-total").innerHTML = total;
    document.getElementById("item-count").innerHTML = myCartLength;
    document.getElementById("item-total").innerHTML = total;
}

removeCartItem = (removeProductName) => {
    const myCart = cartProduct();

    const filteredProduct = myCart.filter((item) => item.name !== removeProductName);
    console.log(filteredProduct);
}

createUi = (name,img,price) => {
    let iDiv = document.createElement('div');
    iDiv.className = 'cart-item d-flex justify-content-between text-capitalize my-3';
    document.getElementById('mycartdata').appendChild(iDiv);
    
    // For Image
    let imgDiv = document.createElement('IMG');
    imgDiv.className = 'img-fluid rounded-circle';
    imgDiv.setAttribute("src", "assets/images/"+img);
    iDiv.appendChild(imgDiv);

    // Name Div
    let iNamePriceDiv = document.createElement('div');
    iNamePriceDiv.className = 'item-text';
    iDiv.appendChild(iNamePriceDiv);

    // Paragraph Tag
    let sName = document.createElement('p');
    sName.className = 'font-weight-bold mb-0';
    sName.innerHTML = name;
    iNamePriceDiv.appendChild(sName);

    // Span Price
    let sSpan = document.createElement('span');
    sSpan.className = 'cart-item-price';
    sSpan.innerHTML = price;
    iNamePriceDiv.appendChild(sSpan);
    
    // For Delete a Tag
    let deleteanchor = document.createElement('a');
    deleteanchor.className = 'cart-item-remove';
    iDiv.appendChild(deleteanchor);

    // Icon for delete
    let deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa fa-trash';
    deleteanchor.appendChild(deleteIcon);
    deleteIcon.setAttribute('onclick', 'removeCartItem(\'' + name + '\')');
}

