const URL = "https://jsonplaceholder.typicode.com/users";
const form = document.getElementById("contact-form");

async function postData(url="", data={}) {
    const response = await fetch(url, { 
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('La solicitud no pudo completarse correctamente.')
    };
    
    
};

form.addEventListener("submit", async(e)=>{
    e.preventDefault();
    
    const name =  document.getElementById("name").value;
    const Lname =  document.getElementById("last-name").value;
    const date =  document.getElementById("date").value;

    const data ={
        Nombre: name,
        Apellido: Lname,
        Fecha: date 
    }
    postData(url=URL, data)
    .then ((response) => {
        console.log(response);
    })
    .catch ((error)=>{
        console.log(error);
    });
    });