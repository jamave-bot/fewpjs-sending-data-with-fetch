// Add your code here
const submitData = (username, email) => {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
          body: JSON.stringify(
              {
                  'name': username,
                  'email' : email
              }
          )
    })
    .then(response => response.json())
    .then((obj) =>{
        document.querySelector("body").append(obj.id)
    } )
    .catch((error)=>{
        document.querySelector("body").append(error.message)
    })
}