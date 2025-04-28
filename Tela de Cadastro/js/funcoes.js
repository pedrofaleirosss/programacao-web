total=0;
masculino=0;
femininos=0;
idosos=0;
maiordeidade=0;
menordeidade=0;
function salvar(){
if (document.getElementById("username").value==""||
document.getElementById("idade").value==""||
document.getElementById("option").value==""||
document.getElementById("email").value==""||
document.getElementById("senha").value=="")
{
(alert("Você deixou um ou mais campos vazios!"))
}
else{

    total++
    document.getElementById('cadastros').innerHTML="Cadastros: " + total;

if(document.getElementById("option").value=="homens")
{masculino++;

document.getElementById('homem').innerHTML="Homens: " + masculino;
}

if(document.getElementById("option").value=="mulheres")
{femininos++;

document.getElementById('mulher').innerHTML="Mulheres: " + femininos;
}

if(document.getElementById("idade").value<18)
{menordeidade++;

document.getElementById('crianças').innerHTML="Crianças: " + menordeidade;
}

if(document.getElementById("idade").value>=18 && document.getElementById("idade").value<60)
{maiordeidade++;

document.getElementById('adultos').innerHTML="Adultos: " + maiordeidade;
}

if(document.getElementById("idade").value>=60)
{idosos++;

document.getElementById('idosos').innerHTML="Idosos: " + idosos;
}
document.getElementById("username").value="";
document.getElementById("idade").value="";
document.getElementById("option").value="";
document.getElementById("email").value="";
document.getElementById("senha").value="";
}
}

