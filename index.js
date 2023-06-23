// Add your code here
function submitData(name, email, id) {
    const data = {
        name: name,
        email: email,
        id: id,
    };    

    const configObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(data),
};

return fetch("http://localhost:3000/users", configObject)
.then(function (response){
    return response.json();
})
.then(function(data) {
    const id = data.id;

    const newId = document.createElement("p");
    newId.textContent = `ID: ${id}`;
    document.querySelector("body").appendChild(newId);

    console.log(data)
})
.catch(function(error) {

    const errorMessage = document.createElement("p")
    errorMessage.textContent = `Error: ${error}`;
    document.querySelector("body").appendChild(errorMessage);

    console.log(error.message);
});
};
