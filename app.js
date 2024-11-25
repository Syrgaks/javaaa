// HTTP-HTTPS, Fetch(), API 
 
// HTTP (англ. HyperText Transfer Protocol  
 
// GET, POST, PUT, DELETE, PATCH 
// GET - палучение данных 
// POST- отпрафка данных 
// PUT - изменение данных 
// DELETE - удаление данных 
// PATCH - частичное изменение данных 
 
//  API (Application programming interface) 
 
// статус ответа 
// 100-199 - информатцоный ответ 
// 200-299 - успешный ответ 
// 300-399 - перенаправление 
// 400-499 - 
// 500-599 - 
 
const uzerlist = document.querySelector("#uzerlist") 
fetch("https://jsonplaceholder.typicode.com/users") 
  .then(res => { 
    if(!res.ok) { 
        throw new Error("Ошивка сети") 
    } 
    return res.json(); 
  }) 
.then((data) => { 
   data.foreach((uzer) => { 
    const userDiv = document.createElement("div"); 
 
 
    uzerDiv.innerHTML = ` 
    <div> 
    <h1>${uzer.id}</h1>` 
     
   }) 
     
})