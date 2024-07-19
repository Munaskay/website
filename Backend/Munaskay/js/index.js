// MESERO DIME QUIEN ES EL AMOR DE MI VIDA

fetch("http://127.0.0.1:5000")
.then(r => r.json())
.then(r => {
    console.log(r);
})