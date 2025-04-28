var sorteio = 0;
function começa()
{
    document.getElementById("arvore1").src="img/arvore.jpg";
    document.getElementById("arvore2").src="img/arvore.jpg";
    document.getElementById("arvore3").src="img/arvore.jpg";
    document.getElementById("arvore4").src="img/arvore.jpg";
    document.getElementById("arvore5").src="img/arvore.jpg";
    document.getElementById("arvore6").src="img/arvore.jpg";

    sorteio =Math.floor(Math.random() * 5) + 1;
    document.getElementById("texto").innerHTML = "Encontre o Marciano!";
}

function chute (arvore)
{
    if(arvore==sorteio){
        document.getElementById("arvore" + arvore).src="img/marciano.png";
        document.getElementById("texto").innerHTML = "Boa!";
    }
    else{
        document.getElementById("arvore" + arvore).src="img/X.jpg";
        document.getElementById("texto").innerHTML = "Errou!";
    }
}