let products = localStorage.getItem('cart')

// cart 
for(let i = 0 ;i < 1;i++){
// creating cart wrapper div
let cartWrapper = document.createElement('DiV')
cartWrapper.className = 'cart-wrapper'



// creating cart body div
let cartBody = document.createElement('DIV')
cartBody.className = 'cart-body'
// appending cartbody to cart wrapper as child
cartWrapper.appendChild(cartBody) 

// creating img element
let image = document.createElement('IMG')
// giving src attribute
image.setAttribute('src','product.image')
// appending image to cart body as child
cartBody.appendChild(image)

//creating heading of cart product with h3 element
let heading = document.createElement('H3')
// creating headingText
let headingText = document.createTextNode('product.description')
// appending heading text to heading
heading.appendChild(headingText)
// appending heading to cart body as child
cartBody.appendChild(heading)



// creating cart quantity div
let cartQuantityDiv = document.createElement('DIV')
// giving class of cart-quantity to cartQuantity
cartQuantityDiv.className = 'cart-quantity'

//creating cart quantity P
let cartQuantityP = document.createElement('P')
// creating cart quantity text
let cartQuantitytext = document.createTextNode('product.quantity')

// appending cartQuantityText to cartQuantityP as child
cartQuantityP.appendChild(cartQuantitytext)
// appending cartQuantityP to cartQuantityDiv
cartQuantityDiv.appendChild(cartQuantityP)
// appending cartQuantity to CartWrapper as child
cartWrapper.appendChild(cartQuantityDiv)


//creating cartPriceDiv
let cartPriceDiv = document.createElement('DIV')
// giving classname to cartPriceDiv
cartPriceDiv.className = 'cart-price'
// creating a p element
let cartPriceP = document.createElement('P')
// creating cart price text
let cartPricetext = document.createTextNode('cart.price')
// appendind cartPricetext to cartPrice
cartPriceP.appendChild(cartPricetext)
// appending cartPrice to cartPriceDiv
cartPriceDiv.appendChild(cartPriceP)
cartWrapper.appendChild(cartPriceDiv)


//appending cartwrapper to document
let cart = document.getElementById('cart')
cart.appendChild(cartWrapper)
}

function goToCart(){
    
}