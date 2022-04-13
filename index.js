const addProducts=  (event)=>{
    event.preventDefault()
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method:"POST",
        headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxY2E5MDIzOTAwMTVkOTY1YzciLCJpYXQiOjE2NDk4NTE2NzcsImV4cCI6MTY1MTA2MTI3N30.vQNUcd502n11trxsE51poL09iufcBbRkpz7Y7Ojq7l0"
        },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            description: document.getElementById("description").value,
            brand: document.getElementById("brand").value,
            price: document.getElementById("price").value,
            imageUrl: document.getElementById("image").value
        })
        }).then(response=>alert("new product added"))
        .catch(err => console.log(err))

       

}

const displayProducts = async() =>{
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method:"GET",
        body: JSON.stringify(),
        headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxY2E5MDIzOTAwMTVkOTY1YzciLCJpYXQiOjE2NDk4NTE2NzcsImV4cCI6MTY1MTA2MTI3N30.vQNUcd502n11trxsE51poL09iufcBbRkpz7Y7Ojq7l0"
        }
        }).then(response=>response.json())
        .then(products=> {
            console.log(products)
        let productItem = document.getElementById("products")
        products.forEach(item => {
            productItem.innerHTML += `
            
            <li class="list-group-item d-flex justify-content-between">
            <span>${item.brand}</span> <span><strong>€ ${item.price}</strong></span></li>`
        });
        })
        .catch(err => console.log(err))
    }
displayProducts()
//    window.onload=()=>{
//     displayProducts()
   
//    } 