let products =
    [{ id: 1, name: "Cube 1", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur porro provident deserunt error ut magnam nam ad molestias quam quod, aliquam ducimus nobis velit, quasi, facere sint rerum omnis. Corrupti quam, amet ", image: "Assets\\cube1.jpeg", is_featured: true },
    { id: 2, name: "Cube 2", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur porro provident deserunt error ut magnam nam ad molestias quam quod, aliquam ducimus nobis velit, quasi, facere sint rerum omnis. Corrupti quam, amet ", image: "Assets\\cube2.jpeg", is_featured: true },
    { id: 3, name: "Cube 3", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur porro provident deserunt error ut magnam nam ad molestias quam quod, aliquam ducimus nobis velit, quasi, facere sint rerum omnis. Corrupti quam, amet ", image: "Assets\\cube3.jpeg", is_featured: true },
    { id: 3, name: "Cube 3", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur porro provident deserunt error ut magnam nam ad molestias quam quod, aliquam ducimus nobis velit, quasi, facere sint rerum omnis. Corrupti quam, amet ", image: "Assets\\camera3.jpeg", is_featured: false },
    { id: 3, name: "Cube 3", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur porro provident deserunt error ut magnam nam ad molestias quam quod, aliquam ducimus nobis velit, quasi, facere sint rerum omnis. Corrupti quam, amet ", image: "Assets\\camera3.jpeg", is_featured: false },
    { id: 3, name: "Cube 3", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur porro provident deserunt error ut magnam nam ad molestias quam quod, aliquam ducimus nobis velit, quasi, facere sint rerum omnis. Corrupti quam, amet ", image: "Assets\\camera3.jpeg", is_featured: false },
]

for (let product of products) {
    if (product.is_featured) {

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

        let para = document.createElement('P')
        let para_text = document.createTextNode(product.description)
        para.appendChild(para_text)
        card.appendChild(para)

        let add_to_cart_button = document.createElement("BUTTON")
        let add_to_cart_button_text = document.createTextNode('add to cart')
        add_to_cart_button.appendChild(add_to_cart_button_text)
        add_to_cart_button.onclick
        card.appendChild(add_to_cart_button)

    } else if (!product.is_featured){

        let mainDiv = document.getElementById('our-products-wrapper')
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

        let para = document.createElement('P')
        let para_text = document.createTextNode(product.description)
        para.appendChild(para_text)
        card.appendChild(para)

        let add_to_cart_button = document.createElement("BUTTON")
        let add_to_cart_button_text = document.createTextNode('add to cart')
        add_to_cart_button.appendChild(add_to_cart_button_text)
        object.addEventListener("click", addToCart());
        card.appendChild(add_to_cart_button)
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