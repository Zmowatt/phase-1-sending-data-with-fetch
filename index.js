// // Add your code here

function submitData(name, email) {

    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
        })
        })
    .then(res => res.json())
    .then(function (data) {

        const id = data.id;
        const newId = document.createElement('p');
        newId.textContent = `ID: ${id}`;
        document.querySelector("body").appendChild(newId) 
        console.log(data)
    })
        .catch(function (error){
        alert("Panic! Panic! Panic!")
        
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `Error: ${error}`;
        document.querySelector("body").appendChild(errorMessage)
    })
}

submitData("Zach Mowatt", "MrMime93@aol.com")