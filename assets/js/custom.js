/*
    Cart Data
*/
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

/*
    Function :  showCart()
    Purpose: to display my cart list
*/

let showCart = () => {
    let cart = document.getElementById("cart");
    if(cart.style.display === "none"){
        cart.style.display = "block";
    }else{
        cart.style.display = "none";
    }
}

/*
    Function :  cartData()
    Purpose: To show my cart list as well as total in detail
*/

let cartData = () => {
    document.getElementById('mycartdata').innerHTML = "";
    let total = 0;
    let myCartLength = myCart.length;
    
    myCart.map(function(data,index){
        total += data['price'];
        createUi(data,index);
    });

    document.getElementById("cart-total").innerHTML = total;
    document.getElementById("item-count").innerHTML = myCartLength;
    document.getElementById("item-total").innerHTML = total;
}

/*
    Function :  removeCartItem()
    Purpose: To remove any product from cart list
*/
let removeCartItem = (removeProductIndex) => {
    myCart.splice(removeProductIndex,1);
    cartData();
}

/*
    Function :  createUi()
    Purpose: To will create dynamic UI(div and other html)
*/
let createUi = (productData,index) => {
    let iDiv = document.createElement('div');
    setAttributes(iDiv, {"class": "cart-item d-flex justify-content-between text-capitalize my-3"});
    document.getElementById('mycartdata').appendChild(iDiv);
    
    // For Image
    let imgDiv = document.createElement('IMG');
    setAttributes(imgDiv, {"class": "img-fluid rounded-circle","src":"assets/images/"+productData.image});
    iDiv.appendChild(imgDiv);

    // Name Div
    let iNamePriceDiv = document.createElement('div');
    setAttributes(iNamePriceDiv, {"class": "item-text"});
    iDiv.appendChild(iNamePriceDiv);

    // Paragraph Tag
    let sName = document.createElement('p');
    setAttributes(sName, {"class": "font-weight-bold mb-0"});
    sName.innerHTML = productData.name;
    iNamePriceDiv.appendChild(sName);

    // Span Price
    let sSpan = document.createElement('span');
    setAttributes(sSpan, {"class": "cart-item-price"});
    sSpan.innerHTML = productData.price;
    iNamePriceDiv.appendChild(sSpan);
    
    // For Delete a Tag
    let deleteanchor = document.createElement('a');
    setAttributes(deleteanchor, {"class": "cart-item-remove"});
    iDiv.appendChild(deleteanchor);

    // Icon for delete
    let deleteIcon = document.createElement('i');
    setAttributes(deleteIcon, {"class": "fa fa-trash","onclick":'removeCartItem(\'' + index + '\')'});
    deleteanchor.appendChild(deleteIcon); 
}

/*
    Function :  setAttributes()
    Purpose: this helper is used to set attribute which is needed to create dynamic html
*/
let setAttributes = (element,attribute) => {
    for(let key in attribute) {
        element.setAttribute(key, attribute[key]);
    }
}

/*
    Purpose: To display Cart List continue
*/
cartData();

