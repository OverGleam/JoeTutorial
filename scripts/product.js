const products = [{
    productId: '1',
    name: 'Joe Genes and Destruction of Universe',
    productImage: 'assets/product1.svg',
    ratings: {
        stars: 5.0,
        count: 50
    },
    priceCents: 69
}, {
    productId: '2',
    name: 'AKO AY SI MR SUABE HOY HOY HOY AKO SI MR SUAVE',
    productImage: 'assets/product2.svg',
    ratings: {
        stars: 4.5,
        count: 45
    },
    priceCents: 1234
}, {
    productId: '3',
    name: 'Kung di rin tayo sa huli, Aawating ang sarili na makitang kang muli',
    productImage: 'assets/product3.svg',
    ratings: {
        stars: 4.0,
        count: 40
    },
    priceCents: 5678
}, {
    productId: '4',
    name: 'Kung bibitaw nang mahinahon ako bay itaas ang kamay',
    productImage: 'assets/product4.svg',
    ratings: {
        stars: 3.5,
        count: 35
    },
    priceCents: 9101
}, {
    productId: '5',
    name: 'Theres a rainbow always after the rain',
    productImage: 'assets/product5.svg',
    ratings: {
        stars: 3.0,
        count: 30
    },
    priceCents: 1213
}, {
    productId: '6',
    name: 'Ikaw na ang may sabi na akoy mahal mo rin',
    productImage: 'assets/product6.svg',
    ratings: {
        stars: 2.5,
        count: 25
    },
    priceCents: 1415
}, {
    productId: '7',
    name: 'Baka sakaling makita kitang muli pagsikat ng araw',
    productImage: 'assets/product7.svg',
    ratings: {
        stars: 2.0,
        count: 20
    },
    priceCents: 1617
}, {
    productId: '8',
    name: 'Kung di pipilitin di ba para sa akin baka sakaling',
    productImage: 'assets/product8.svg',
    ratings: {
        stars: 1.5,
        count: 15
    },
    priceCents: 1819
}, {
    productId: '9',
    name: 'Akala ko ikaw ay akin, tutuwa sa aking paningin',
    productImage: 'assets/product9.svg',
    ratings: {
        stars: 1.0,
        count: 10
    },
    priceCents: 2021
}, {
    productId: '10',
    name: 'Akala ko ikaw ay akin, tutuwa sa aking paningin',
    productImage: 'assets/product10.svg',
    ratings: {
        stars: 1.0,
        count: 10
    },
    priceCents: 2021
}, {
    productId: '11',
    name: 'Akala ko ikaw ay akin, tutuwa sa aking paningin',
    productImage: 'assets/product11.svg',
    ratings: {
        stars: 1.0,
        count: 10
    },
    priceCents: 2021
}, {
    productId: '12',
    name: 'Akala ko ikaw ay akin, tutuwa sa aking paningin',
    productImage: 'assets/product12.svg',
    ratings: {
        stars: 1.0,
        count: 10
    },
    priceCents: 2021
}, {
    productId: '13',
    name: 'Akala ko ikaw ay akin, tutuwa sa aking paningin',
    productImage: 'assets/product13.svg',
    ratings: {
        stars: 1.0,
        count: 10
    },
    priceCents: 2021
}, {
    productId: '14',
    name: 'Akala ko ikaw ay akin, tutuwa sa aking paningin',
    productImage: 'assets/product14.svg',
    ratings: {
        stars: 1.0,
        count: 10
    },
    priceCents: 2021
}, {
    productId: '15',
    name: 'Akala ko ikaw ay akin, tutuwa sa aking paningin',
    productImage: 'assets/product15.svg',
    ratings: {
        stars: 1.0,
        count: 10
    },
    priceCents: 2021
}]

let productHtml = ``;
products.forEach((product) => {

    productHtml += `
    <div class="product-container">

    <div class="product-image-container">
        <img class="product-image" src="${product.productImage}">
    </div>

    <div class="product-name">${product.name}</div>

    <div class="product-rating-container">
        <img class="product-rating-stars" src="assets/ratings/rating-${product.ratings.stars * 10}.png">
        <div class="product-rating-count">${product.ratings.count}</div>
    </div>

    <div class="product-price">${(product.priceCents / 100).toFixed(2)}php</div>

    <div class="product-quantity-container">
        <select class="quantity-selector">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
    </div>

    <div class="added-to-cart-message">
        <img src="">" Added"
    </div>

    <button class="add-to-cart-button js-add-to-cart" data-product-id="${product.productId}">Add to Cart</button>
</div>

`
})
const cart = [];

document.querySelector('.product-grid').innerHTML = productHtml;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        let productId = button.dataset.productId;

        let matchingItem;

        cart.forEach(item => {
            if (productId === item.id)
                matchingItem = item;
        })

        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            cart.push({
                id: productId,
                quantity: 1
            })
        }

        console.log(cart)

        let cartQuantity = 0;
        cart.forEach(item => {
            cartQuantity += item.quantity;
        })

        console.log(cartQuantity);
        document.querySelector('.cart-quantity').innerHTML = cartQuantity;
    });

})