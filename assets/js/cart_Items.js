var storeItem = [ 
    {
        img: 'sweets-1.jpeg',
        name: 'sweet item',
        price: 5
    },
    {
        img: 'cupcake-1.jpeg',
        name: 'Cupcake Item',
        price: 5
    },
    {
        img: 'cake-1.jpeg',
        name: 'Cake Item',
        price: 5
    },
    {
        img: 'doughnut-1.jpeg',
        name: 'Dougnut Item',
        price: 5
    },
    {
        img: 'sweets-2.jpeg',
        name: 'sweet item',
        price: 10
    },
    {
        img: 'cupcake-2.jpeg',
        name: 'Cupcake item',
        price: 10
    },
    {
        img: 'cake-2.jpeg',
        name: 'Cake Item',
        price: 10
    },
    {
        img: 'doughnut-2.jpeg',
        name: 'Dougnut item',
        price: 10
    },
    {
        img: 'sweets-3.jpeg',
        name: 'Sweet item',
        price: 15
    }, 
    {
        img: 'cupcake-3.jpeg',
        name: 'Cupcake Item',
        price: 15
    },
    {
        img: 'cake-3.jpeg',
        name: 'Cake item',
        price: 15
    },
    {
        img: 'doughnut-3.jpeg',
        name: 'Dougnut item',
        price: 15
    }];

    // {
    //     "storeItem" [
    //         {
    //             "img" : "assets/images/sweets-1.jpeg",
    //             "name": "sweet item",
    //             "price": 5
    //         },
    //         {
    //             "img": "assets/images/cupcake-1.jpeg",
    //             "name": "Cupcake Item",
    //             "price": 5
    //         },
    //         {
    //             "img": "assets/images/cake-1.jpeg",
    //             "name": "Cake Item",
    //             "price": 5
    //         },
    //         {
    //             "img": "assets/images/doughnut-1.jpeg",
    //             "name": "Dougnut Item",
    //             "price": 5
    //         },
    //         {
    //             "img": "assets/images/sweets-2.jpeg",
    //             "name": "sweet item",
    //             "price": 10
    //         },
    //         {
    //             "img": "assets/images/cupcake-2.jpeg",
    //             "name": "Cupcake item",
    //             "price": 10
    //         },
    //         {
    //             "img": "assets/images/cake-2.jpeg",
    //             "name": "Cake Item",
    //             "price": 10
    //         },
    //         {
    //             "img": "assets/images/doughnut-2.jpeg",
    //             "name": "Dougnut item",
    //             "price": 10
    //         },
    //         {
    //             "img": "assets/images/sweets-3.jpeg",
    //             "name": "Sweet item",
    //             "price": 15
    //         }, 
    //         {
    //             "img": "assets/images/cupcake-3.jpeg",
    //             "name": "Cupcake Item",
    //             "price": 15
    //         },
    //         {
    //             "img": "assets/images/cake-3.jpeg",
    //             "name": "Cake item",
    //             "price": 15
    //         },
    //         {
    //             "img": "assets/images/doughnut-3.jpeg",
    //             "name": "Dougnut item",
    //             "price": 15
    //         }

    //     ]
    // };



        var singleItem = document.getElementById('store-items');
        for(var i = 0; i <= storeItem.length; i++){
        // console.log(storeItem[i]);   

            var mainWrapper = document.createElement('div');
            mainWrapper.className = 'col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item';

            var card = document.createElement('div');
            card.className = 'card';

            var imgContainer = document.createElement('div');
            imgContainer.className = 'img-container';

            var itemImg = document.createElement('img');
            itemImg.className = 'card-img-top store-img';
            itemImg.setAttribute('src', 'assets/images/' + storeItem[i].img);
            itemImg.setAttribute('alt', 'Cart Item Image');

            var storeIconWrap = document.createElement('span');
            storeIconWrap.className = 'store-item-icon';

            var storeIcon = document.createElement('i');
            storeIcon.className = 'fa fa-shopping-cart';
            storeIcon.setAttribute('onclick', 'addIntoCartItem('+[i]+')');

            var cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            var cardBodyInnerWrap = document.createElement('div');
            cardBodyInnerWrap.className = 'card-text d-flex justify-content-between text-capitalize';

            var itemName = document.createElement('h5');
            itemName.id = 'store-item-name';

            var itemNameValue = document.createTextNode(storeItem[i].name);

            var itemPriceWrap = document.createElement('h5');
            itemPriceWrap.className = 'store-item-value';
            
            var priceSymb = document.createTextNode('$');

            var itemPrice = document.createElement('strong');
            itemPrice.id = 'store-item-price';
            itemPrice.className = 'font-weight-bold';

            var itemPriceValue = document.createTextNode(storeItem[i].price);

    


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
    


    function addIntoCartItem(abc){
        alert('Add into cart');
        console.log(storeItem[abc]);
        //console.log(storeItem[0]);
    }


    function sum(a,c){
        return d = a+c;
    }

    console.log(sum(100,200));
    