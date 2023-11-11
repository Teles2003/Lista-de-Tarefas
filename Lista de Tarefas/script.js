const tarefa = document.querySelector("#tarefa")
const btn = document.querySelector("#btn")
const lista = document.querySelector("#lista")

btn.addEventListener("click", function() {
    if (tarefa.value == "") {
        alert("Digite uma tarefa valida!")
        
    } else {
        lista.innerHTML +=` <li>
                                <i id="check">
                                <svg class="confirmar" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16"> <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/> <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/> </svg></i> 
                                <span>${tarefa.value}</span>      
                                <svg class="lixo" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>  </svg> 
                            </li>    `
    }
    tarefa.value = ""

    const fechar = document.querySelectorAll(".lixo");
    for (let i=0; i<fechar.length; i++){
        fechar[i].addEventListener("click", function() {
            fechar[i].parentElement.remove()
        })   
    }

    lista.addEventListener("click", function(e) { 
        e.target.parentElement.querySelector(".confirmar").style.color="#00FF00";
        e.target.parentElement.querySelector("span").style.textDecoration="line-through";
    })

    

} )
