let myCart= [];

let storeItem =  [
    {
        image : "sweets-1.jpeg",
        name: "sweet item",
        price: 5
    },
    {
        image: "cupcake-1.jpeg",
        name: "Cupcake Item",
        price: 5
    },
    {
        image: "cake-1.jpeg",
        name: "Cake Item",
        price: 5
    },
    {
        image: "doughnut-1.jpeg",
        name: "Dougnut Item",
        price: 5
    },
    {
        image: "sweets-2.jpeg",
        name: "sweet item",
        price: 10
    },
    {
        image: "cupcake-2.jpeg",
        name: "Cupcake item",
        price: 10
    },
    {
        image: "cake-2.jpeg",
        name: "Cake Item",
        price: 10
    },
    {
        image: "doughnut-2.jpeg",
        name: "Dougnut item",
        price: 10
    },
    {
        image: "sweets-3.jpeg",
        name: "Sweet item",
        price: 15
    }, 
    {
        image: "cupcake-3.jpeg",
        name: "Cupcake Item",
        price: 15
    },
    {
        image: "cake-3.jpeg",
        name: "Cake item",
        price: 15
    },
    {
        image: "doughnut-3.jpeg",
        name: "Dougnut item",
        price: 15
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

const singleStoreItem = (x, index) =>{
    
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
    setAttributes(storeIcon,{'class':'fa fa-shopping-cart', 'onclick': 'addIntoCartItem('+ index +')'});

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

let singleItem = document.getElementById('store-items');
//var abc = storeItem.map((item,index) => singleStoreItem(item,index)) ; 


let productList = storeItem.map(function(data,index){
    singleStoreItem(data,index);
});


let addIntoCartItem = (index) =>{
    alert('Add into cart');
    myCart.unshift(storeItem[index]);
    console.log(myCart);
}





