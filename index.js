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
        let productItem = document.querySelector(".products")
        products.forEach(item => {
            productItem.innerHTML += `
            <div class= "col-3">
            <div class="card mb-3" >
        <img src="${item.imageUrl}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
            <h5 class="card-title">${item.brand}</h5>
            <p class="card-text">${item.description}.</p>
            <a href="#" class="btn btn-outline-primary">€${item.price}</a>
        </div>
        </div>
        </div>
            `
        });
        })
        .catch(err => console.log(err))
    }
displayProducts()
//    window.onload=()=>{
//     displayProducts()
   
//    } 