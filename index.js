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
        document.getElementById("cart").innerText = cartArray.join("")+ updatedCart
    
    // alerting "article added to cart"
        alert("Article added to cart")
    }