let products =
    [
        { id: 1, name: "Cube 1", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur porro provident deserunt error ut magnam nam ad molestias quam quod, aliquam ducimus nobis velit, quasi, facere sint rerum omnis. Corrupti quam, amet ", image: "Assets\\cube1.jpeg", is_featured: true },
        { id: 2, name: "Cube 2", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur porro provident deserunt error ut magnam nam ad molestias quam quod, aliquam ducimus nobis velit, quasi, facere sint rerum omnis. Corrupti quam, amet ", image: "Assets\\cube2.jpeg", is_featured: true },
        { id: 3, name: "Cube 3", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur porro provident deserunt error ut magnam nam ad molestias quam quod, aliquam ducimus nobis velit, quasi, facere sint rerum omnis. Corrupti quam, amet ", image: "Assets\\cube3.jpeg", is_featured: true },
        { id: 4, name: "Cube 4", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur porro provident deserunt error ut magnam nam ad molestias quam quod, aliquam ducimus nobis velit, quasi, facere sint rerum omnis. Corrupti quam, amet ", image: "Assets\\camera1.jpeg", is_featured: false },
        { id: 5, name: "Cube 5", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur porro provident deserunt error ut magnam nam ad molestias quam quod, aliquam ducimus nobis velit, quasi, facere sint rerum omnis. Corrupti quam, amet ", image: "Assets\\camera2.jpeg", is_featured: false },
        { id: 6, name: "Cube 6", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur porro provident deserunt error ut magnam nam ad molestias quam quod, aliquam ducimus nobis velit, quasi, facere sint rerum omnis. Corrupti quam, amet ", image: "Assets\\camera3.jpeg", is_featured: false },
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
        readMoreButton.id = readMoreButton
        readMoreButton.addEventListener('click',readMore)

    }
}

// Access cart element
// acces cart value
// add 1 to cart value
// update cart value

function addToCart() {
    // Getting the element with id cart as a string
    const cart = document.getElementById("cart").innerText

    // splitting it to convert it in an array
    let cartArray = cart.split("")

    //Taking last item of cartArray using .pop() and storing it in lastItemCart
    let lastItemCart = cartArray.pop()

    // declaring variable updatedCart and storing value of cart
    const updatedCart = Number(lastItemCart) + 1

    // Taking the remaining array and continating it with updated cart and storing it in the element with id cart
    document.getElementById("cart").innerText = cartArray.join("") + updatedCart

    // alerting "article added to cart"
    alert("Article added to cart")
}

function readMore(index) {
    if (document.getElementsByClassName("more")[index].style.display == 'none') {
        document.getElementsByClassName("more")[index].style.display = 'inline'
    }
    else {
        document.getElementsByClassName("more")[index].style.display = 'none'
    }


}

function gotoCart() {
    location.href = "login.html"
}