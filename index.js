let products =
    [
        { id: 0, name: "Cube 1", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur porro provident deserunt error ut magnam nam ad molestias quam quod, aliquam ducimus nobis velit, quasi, facere sint rerum omnis. Corrupti quam, amet ", image: "Assets\\cube1.jpeg", is_featured: true },
        { id: 1, name: "Cube 2", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur porro provident deserunt error ut magnam nam ad molestias quam quod, aliquam ducimus nobis velit, quasi, facere sint rerum omnis. Corrupti quam, amet ", image: "Assets\\cube2.jpeg", is_featured: true },
        { id: 2, name: "Cube 3", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur porro provident deserunt error ut magnam nam ad molestias quam quod, aliquam ducimus nobis velit, quasi, facere sint rerum omnis. Corrupti quam, amet ", image: "Assets\\cube3.jpeg", is_featured: true },
        { id: 3, name: "Cube 4", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur porro provident deserunt error ut magnam nam ad molestias quam quod, aliquam ducimus nobis velit, quasi, facere sint rerum omnis. Corrupti quam, amet ", hidden_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates mollitia repellendus nihil.", image: "Assets\\camera1.jpeg", is_featured: false },
        { id: 4, name: "Cube 5", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur porro provident deserunt error ut magnam nam ad molestias quam quod, aliquam ducimus nobis velit, quasi, facere sint rerum omnis. Corrupti quam, amet ", hidden_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates mollitia repellendus nihil.", image: "Assets\\camera2.jpeg", is_featured: false },
        { id: 5, name: "Cube 6", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur porro provident deserunt error ut magnam nam ad molestias quam quod, aliquam ducimus nobis velit, quasi, facere sint rerum omnis. Corrupti quam, amet ", hidden_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates mollitia repellendus nihil.", image: "Assets\\camera3.jpeg", is_featured: false },
    ]

for (let product of products) {
    if (product.is_featured == true) {

        let mainDiv = document.getElementById('feature_card_wrapper')

        let card = document.createElement('DIV')
        mainDiv.appendChild(card)
        card.className = 'feature-card'

        let heading = document.createElement('H3')
        card.appendChild(heading)

        let heading_text = document.createTextNode(product.name)
        heading.appendChild(heading_text)

        let photo = document.createElement('IMG')
        photo.src = product.image
        card.appendChild(photo)

        let description = document.createElement('P')
        let description_text = document.createTextNode(product.description)
        description.appendChild(description_text)
        card.appendChild(description)

        let add_to_cart_button = document.createElement("BUTTON")
        let add_to_cart_button_text = document.createTextNode('add to cart')
        add_to_cart_button.appendChild(add_to_cart_button_text)
        add_to_cart_button.addEventListener('click', addToCart)
        add_to_cart_button.id = product.id
        card.appendChild(add_to_cart_button)
    } else {
        let ourProductsDiv = document.getElementById('our_product_wrapper')

        let ourProductCard = document.createElement('DIV')
        ourProductsDiv.appendChild(ourProductCard)
        ourProductCard.className = 'our-product-card'

        let heading = document.createElement('H3')
        let headingText = document.createTextNode(product.name)
        heading.appendChild(headingText)
        ourProductCard.appendChild(heading)

        let photo = document.createElement('IMG')
        photo.src = product.image
        ourProductCard.appendChild(photo)

        let description = document.createElement('P')
        let descriptionText = document.createTextNode(product.description)
        description.appendChild(descriptionText)
        ourProductCard.appendChild(description)

        let readMoreButton = document.createElement("BUTTON")
        let readMoreButtonText = document.createTextNode('see more')
        readMoreButton.appendChild(readMoreButtonText)
        ourProductCard.appendChild(readMoreButton)
        readMoreButton.id = product.id
        readMoreButton.addEventListener('click', readMore)

        let hidden_description = document.createElement('P')
        let hidden_description_text = document.createTextNode(document.hidden_description)
        hidden_description.appendChild(hidden_description_text)
        ourProductCard.appendChild(hidden_description)
        hidden_description.style.display = 'none'
        hidden_description.className = 'hidden_description'
        hidden_description.id = Number(this.id) - 2


    }
}

function addToCart() {
    //                                       changing value of cart in navbar
    // Access cart element
    // acces cart value
    // add 1 to cart value
    // update cart value

    // Getting the element with id cart as a string
    const cart = document.getElementById("cart").innerText

    // splitting it to convert it in an array
    let cartArray = cart.split("")

    //Taking last item of cartArray using .pop() and storing it in lastItemCart
    let lastItemCart = cartArray.pop()

    // declaring variable updatedCart and storing value of cart
    const updatedCartvalue = Number(lastItemCart) + 1

    // Taking the remaining array and continating it with updated cart and storing it in the element with id cart
    let updatedCart = cartArray.join("") + updatedCartvalue

    document.getElementById("cart").innerText = updatedCart
    //                                 giving value of product to local storage

    // // getting the product id
    // let productId = Number(this.id)

    // for (let i = 0; i <= Object.values(localStorage.getItem(cart));i++) {
    //     //tsting
    //     // localStorage.setItem('cart', JSON.stringify(products[this.id]))
    // }

    // // Get the existing data
    var existing = localStorage.getItem('cart');

    // // If no existing data, use the value by itself
    // // Otherwise, add the new value to it
    var data = existing ? existing +","+ JSON.stringify(products[this.id]) : JSON.stringify(products[this.id]);

    // // Save back to localStorage
    localStorage.setItem('cart', data);
    // let objectId = products[this.id]
    // localStorage.setItem('cart',Object.entries(objectId))


    // alerting "article added tocart"
    alert("Article added to cart")
}

function readMore() {
    if (this.id) {
        // let seeMoreButton = document.getElementsByTagName('button')[this.id]
        // let hiddenDescription = document.getElementsByClassName('hidden_description')
        // console.log(seeMoreButton)
        // console.log(hiddenDescription)
        // console.log(typeof())
        console.log('working')
    }
    else {

    }



}

function gotoCart() {
    location.href = "login.html"
}
