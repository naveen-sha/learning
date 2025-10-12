 // create a array of objects...
let products=[
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
];
let cart=[];
// add to cart ...
function addToCart(productId){
    const product=products.find(p=> p.id ===productId);
    if (!product){
        console.log("product not found");
        return;
    }
}
let cartItems=cart.find(item=> item.id === productId);
if(cartItems){
    cartItems.quantity +=1;
}else{
    cart.push({...products,quantity:1});
}
// remove from cart ...
function removeFromCart(productId){
    let index=cart.findIndex(item => item.id ===productId);
    if(index !== -1){
        console.log(`${cart[index].name}remove from cart`);
        cart.splice(index,1);
        

    }else{
        console.log("product not found in cart");
    }
};
// update quantity..
function updateQuantity(productId,newquantity){
    let cartItem=cart.find(item=>item.id===productId);
    if(!cartItem){
        console.log("item not found");
        return;

    }
    if(newquantity<=0){
        removeFromCart(productId);
    }else{
        cartItem.quantity =newquantity;
        console.log(`${cartItem.name}quantity updated to ${newquantity}`);

    }
}
// calculate total...
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};
// show cart ...
function showCart() {
    if (cart.length === 0) {
        console.log("Cart is empty");
        return;
    }

    console.log("----- Cart -----");
    cart.forEach(item => {
        console.log(`${item.name} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}`);
    });
    console.log("Total: ₹" + calculateTotal());
    console.log("----------------");
}
// testing the functions....
addToCart(1);
addToCart(2);
addToCart(1);
showCart();

updateQuantity(1, 5);
showCart();

removeFromCart(2);
showCart();
/* 
// 1. Initialize products and cart
 const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
];

let cart = [];

// 2. Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.log("Product not found");
        return;
    }

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    console.log(`${product.name} added to cart`);
}

// 3. Remove from Cart
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        console.log(`${cart[index].name} removed from cart`);
        cart.splice(index, 1);
    } else {
        console.log("Product not found in cart");
    }
}

// 4. Update Quantity
function updateQuantity(productId, newQty) {
    const cartItem = cart.find(item => item.id === productId);
    if (!cartItem) {
        console.log("Item not in cart");
        return;
    }

    if (newQty <= 0) {
        removeFromCart(productId);
    } else {
        cartItem.quantity = newQty;
        console.log(`${cartItem.name} quantity updated to ${newQty}`);
    }
}

// 5. Calculate Total
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// 6. Show Cart
function showCart() {
    if (cart.length === 0) {
        console.log("Cart is empty");
        return;
    }

    console.log("----- Cart -----");
    cart.forEach(item => {
        console.log(`${item.name} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}`);
    });
    console.log("Total: ₹" + calculateTotal());
    console.log("----------------");
}

// 7. Testing the functions
addToCart(1);
addToCart(2);
addToCart(1);
showCart();

updateQuantity(1, 5);
showCart();

removeFromCart(2);
showCart();
*/ 