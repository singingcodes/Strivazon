const id = new URLSearchParams(window.location.search).get("ProductId")
console.log(id)
const url = id? "https://striveschool-api.herokuapp.com/api/product/" + id : "https://striveschool-api.herokuapp.com/api/product/"

const addProducts= async (event)=>{
    try {
        
        let myProducts ={
            name: document.getElementById("name").value,
            description: document.getElementById("description").value,
            brand: document.getElementById("brand").value,
            price: document.getElementById("price").value,
            imageUrl: document.getElementById("image").value
        }
        event.preventDefault()
        const response = await fetch(url, {
            method:"POST",
            headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxY2E5MDIzOTAwMTVkOTY1YzciLCJpYXQiOjE2NDk4NTE2NzcsImV4cCI6MTY1MTA2MTI3N30.vQNUcd502n11trxsE51poL09iufcBbRkpz7Y7Ojq7l0"
            },
            body: JSON.stringify(myProducts)
            })
            if(response.ok){
                const body = await response.json()
                console.log(body)
            }
    } catch (error) {
        console.log(error)
    }      

}



   window.onload=async()=>{
    if(id){
        console.log(id)
        const response = await fetch("https://striveschool-api.herokuapp.com/api/product/" + id, {
            method: "PUT",
            headers: {
                
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxY2E5MDIzOTAwMTVkOTY1YzciLCJpYXQiOjE2NDk4NTE2NzcsImV4cCI6MTY1MTA2MTI3N30.vQNUcd502n11trxsE51poL09iufcBbRkpz7Y7Ojq7l0"
            }
            
        })
        console.log(url)
        const {name, description, brand, price, imageUrl} = await response.json()
        console.log(response)

         document.getElementById("name").value = name
         document.getElementById("description").value = description
         document.getElementById("brand").value = brand
         document.getElementById("price").value = price
         document.getElementById("image").value = imageUrl

       
    }
   
   } 

   const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this?")
    if (confirmed) {
        try {
            const response = await fetch(url, {
                method:"DELETE",
                headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxY2E5MDIzOTAwMTVkOTY1YzciLCJpYXQiOjE2NDk4NTE2NzcsImV4cCI6MTY1MTA2MTI3N30.vQNUcd502n11trxsE51poL09iufcBbRkpz7Y7Ojq7l0"
                }})
            if (response.ok) {
                console.log(response)
                alert( "Product deleted successfully")
                setTimeout(() => { window.location.assign("/") }, 4100)
            } else {
                alert("Something went wrong in the deletion process")
            }
        } catch (err) {
            alert( err.message)
        }
    }
}

