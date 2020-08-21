/*
    myCart Array
*/
let myCart= [];

/*
    Purpose : This is list of product
*/
let storeItem1 =  [
    {
        category: "sweet",
        item:[
            {
                image : "sweets-1.jpeg",
                name: "sweet item",
                price: 5
            },
            {
                image: "sweets-2.jpeg",
                name: "sweet item",
                price: 10
            },
            {
                image: "sweets-3.jpeg",
                name: "Sweet item",
                price: 15
            }
        ]
    },
    {
        category: "cupcake",
        item:[
            {
                image: "cupcake-1.jpeg",
                name: "Cupcake Item",
                price: 5
            },
            {
                image: "cupcake-2.jpeg",
                name: "Cupcake item",
                price: 10
            },
            {
                image: "cupcake-3.jpeg",
                name: "Cupcake Item",
                price: 15
            }
        ]
    },
    {
        category: "cake",
        item:[
            {
                image: "cake-1.jpeg",
                name: "Cake Item",
                price: 5
            },
            {
                image: "cake-2.jpeg",
                name: "Cake Item",
                price: 10
            },
            {
                image: "cake-3.jpeg",
                name: "Cake item",
                price: 15
            }
        ]
    },
    {
        category: "doughnut",
        item:[
            {
                image: "doughnut-1.jpeg",
                name: "Dougnut Item",
                price: 5
            },
            
            {
                image: "doughnut-2.jpeg",
                name: "Dougnut item",
                price: 10
            },
            
            {
                image: "doughnut-3.jpeg",
                name: "Dougnut item",
                price: 15
            }
        ]
    }
];

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
    Function :  generateButtonUI()
    Purpose: It will create dynamic button
*/
let generateButtonUI = (category) => {
    let filterBtn = document.createElement('a');
    setAttributes(filterBtn, {"class": "btn btn-outline-secondary btn-black text-uppercase filter-btn m-2","href":"#", "onclick" :"displayProduct(\'" + category + "\')"});
    let btnText = document.createTextNode(category);
    filterBtn.appendChild(btnText);
    document.getElementById('filterBtn').appendChild(filterBtn);
}

let singleItem = document.getElementById('store-items');

/*
    Function :  singleStoreItem()
    Purpose: It will create dynamic UI(Product List which is displayed in index page)
*/
const singleStoreItem = (x, index,category) =>{
   
    let mainWrapper = document.createElement('div');
    setAttributes(mainWrapper,{'class':'col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item'});

    let card = document.createElement('div');
    setAttributes(card,{'class':'card'});

    let imgContainer = document.createElement('div');
    setAttributes(imgContainer,{'class':'img-container'});

    let itemImg = document.createElement('img');
    setAttributes(itemImg,{'src': 'assets/images/' + x.image, 'alt': 'Cart Item Image','class': 'card-img-top store-img'});

    let storeIconWrap = document.createElement('span');
    setAttributes(storeIconWrap,{'class':'store-item-icon'});

    let storeIcon = document.createElement('i');
    setAttributes(storeIcon,{'class':'fa fa-shopping-cart', 'onclick': 'addIntoCartItem(\'' + x.image + '\',\'' + x.name + '\',' + x.price + ')'});

    let cardBody = document.createElement('div');
    setAttributes(cardBody,{'class':'card-body'});

    let cardBodyInnerWrap = document.createElement('div');
    setAttributes(cardBodyInnerWrap,{'class':'card-text d-flex justify-content-between text-capitalize'});

    let itemName = document.createElement('h5');
    setAttributes(itemName,{'id':'store-item-name'});

    let itemNameValue = document.createTextNode(x.name);

    let itemPriceWrap = document.createElement('h5');
    setAttributes(itemPriceWrap,{'class':'store-item-value'});
    
    let priceSymb = document.createTextNode('$');

    let itemPrice = document.createElement('strong');
    setAttributes(itemPrice,{'class':'font-weight-bold', 'id':'store-item-price'});

    let itemPriceValue = document.createTextNode(x.price);


    mainWrapper.appendChild(card);
    card.appendChild(imgContainer);
    imgContainer.appendChild(itemImg);
    imgContainer.appendChild(storeIconWrap);
    storeIconWrap.appendChild(storeIcon);
    document.body.appendChild(mainWrapper);
    card.appendChild(cardBody);
    cardBody.appendChild(cardBodyInnerWrap);
    cardBodyInnerWrap.appendChild(itemName);
    itemName.appendChild(itemNameValue);
    cardBodyInnerWrap.appendChild(itemPriceWrap);
    itemPriceWrap.appendChild(priceSymb);
    itemPriceWrap.appendChild(itemPrice);
    itemPrice.appendChild(itemPriceValue);

    singleItem.appendChild(mainWrapper);  
}

/*
    Function :  hideItem()
    Purpose: It will used to hide item after filter
*/
let hideItem = () => {
    let hideItem = document.getElementsByClassName('store-item');
    for (let i=0;i<hideItem.length;i+=1){
        hideItem[i].style.display = 'none';
    }
}

/*
    Function :  displayProduct()
    Purpose: It will used to Display Product
*/
let displayProduct = (category) => {
    hideItem();
    let productList = storeItem1.map(function(data,index){
        if(data.category == category){
            data.item.map(function(data1,index1){
                singleStoreItem(data1,index1,data.category);
            });
        }else if(category == "all"){
            data.item.map(function(data1,index1){
                singleStoreItem(data1,index1,'');
            });
        }
    });
}

/*
    Function :  displayProduct1()
    Purpose: It will used to Display Product
*/
let displayProduct1 = (category) => {
    let productList = storeItem1.map(function(data,index){
        if(data.category == category){
            data.item.map(function(data1,index1){
                singleStoreItem(data1,index1);
            });
        }else if(category == "all"){
            data.item.map(function(data1,index1){
                singleStoreItem(data1,index1);
            });
        }
    });
}


/*
    Function :  displayBtn()
    Purpose: It will used to Display Button
*/
let displayBtn = () => {
    generateButtonUI('all')
    storeItem1.map(function(data,index){
        generateButtonUI(data.category);
    });
}

/*
    Function :  createUi()
    Purpose: It will used to Create UI of my Cart List
*/
let createUi = (productData,index) => {
    let iDiv = document.createElement('div');
    setAttributes(iDiv, {"class": "cart-item d-flex justify-content-between text-capitalize my-3"});
    document.getElementById('mycartdata').appendChild(iDiv);
    
    // For Image
    let imgDiv = document.createElement('IMG');
    setAttributes(imgDiv, {"class": "img-fluid rounded-circle","src":"assets/images/"+productData.image,"width":"60px"});
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
    Function :  showCart()
    Purpose: It will used to show cart List
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
    Function :  showCart()
    Purpose: to display my cart list
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
    Function :  addIntoCartItem()
    Purpose: This is used to add item in cart
*/

let addIntoCartItem = (image,name,price) =>{
    let itemObj = {
        image : image,
        name: name,
        price: price
    };
    alert('Add into cart');
    myCart.unshift(itemObj);
    cartData();
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
    Function :  clearCart()
    Purpose: To clear cart list
*/
let clearCart = () => {
    myCart.splice(0,myCart.length);
    cartData();
}

displayProduct1("all");

displayBtn();

cartData();







