//Part 1
document.getElementById('canviText').addEventListener('click', modificarDom);

function modificarDom(){
    //Modificar titol
    var titol=document.getElementsByTagName("h1");
    titol[0].innerHTML="Modificat el titol";
    //Nou element a la llista
    var elementNou=document.createElement("li");
    elementNou.innerHTML="Nou element";
    document.getElementsByTagName("li")[0].appendChild(elementNou);
    //Modificar paràgraf
    document.getElementsByTagName("p")[0].innerHTML="Modificat el paràgraf";
}

//Part 2
const div= document.getElementById('canviCss');
div.addEventListener('click', ()=> {div.style.color="blue";  div.style.fontSize=100;});

//Part 3
document.getElementById("buttonForm1").addEventListener('click', ()=>{ 
    var text=document.createElement("p");
    text.innerHTML=document.getElementById("textForm1").value;
    document.getElementById('form1').appendChild(text);
 });

 //Part 4
document.getElementById("buttonForm2").addEventListener('click', ()=>{
    var divForm = document.createElement("div");
    var spanForm =document.createElement("span");
    var buttonDeleteForm=document.createElement("button");
    var buttonCheckForm=document.createElement("button");
    spanForm.innerHTML=document.getElementById("textForm2").value;
    //delete button
    buttonDeleteForm.innerHTML="Eliminar";
    buttonDeleteForm.addEventListener('click', ()=>{
        divForm.remove();
    });
    //check button
    buttonCheckForm.innerHTML="Realitzat";
    buttonCheckForm.addEventListener('click', ()=> {
        spanForm.style.textDecoration="line-through";
    })

    document.getElementById('form2div').appendChild(divForm);
    divForm.appendChild(spanForm);
    divForm.appendChild(buttonCheckForm);
    divForm.appendChild(buttonDeleteForm);
});