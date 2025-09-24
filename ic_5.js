// In-class coding challenge 5

// Esports Arena catalog (price per unit)
const products = [
  { id: 201, name: "Pro Mouse (wired)",   category: "gear",    price: 39.99 },
  { id: 202, name: "Team Jersey",         category: "apparel", price: 49.5  },
  { id: 203, name: "Energy Drink 6-pack", category: "snacks",  price: 12.0  },
  { id: 204, name: "Arena Day Pass",      category: "access",  price: 15.0  },
  { id: 205, name: "Switchable Keycaps",  category: "gear",    price: 19.0  }
];

// Example cart (product & quantity)
const cart = [
  { productId: 202, qty: 1 },
  { productId: 203, qty: 2 },
  { productId: 204, qty: 1 },
  { productId: 205, qty: 1 }
];

// Try: "regular", "student", "member", or "vip"
const customerType = "member";

function getCategoryDiscount(category) {
    switch (category){
        case"gear": 
        return .1
        break;
        case"apparel": 
        return .15
        break;
        case"snacks":
        return .08
        break;
        case"access":
        return 0.05
        break;
        case"default":
        return 0
    }              
}

console.log(getCategoryDiscount("apparel"));


// Price after category discount

function priceAfterCategoryDiscount(product){
    rate = getCategoryDiscount(product.category);
    return product.price * (1-rate)
}
console.log(priceAfterCategoryDiscount(products[0]));


// Find product by ID
    
function findProductById(id){
    for (let product of products){
        if (product.id === id)
            return product
        else
            return null
}
}

console.log(findProductById(201));