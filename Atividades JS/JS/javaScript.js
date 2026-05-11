function mostrar_lista(){
            let atividade = document.getElementById("lista").value;
            let grau = document.getElementById("grau").value;
            let container = document.getElementById("container-id");
            let p=document.createElement("div");
            container.appendChild(p);
            p.classList.add("card");
            p.style.width="150px";
            p.style.height="150px";
            p.classList.add("d-inline-block");
            p.classList.add("card-body");
            if(grau == "dificil"){
                p.classList.add("bg-danger");
            }           
             else if(grau == "medio"){
                p.classList.add("bg-warning");
            }
            else{
                p.classList.add("bg-success");
            }
            p.innerText=(atividade+ " | " + grau) ;
        }