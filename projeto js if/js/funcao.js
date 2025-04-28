
function interruptor (status)
{
    if(status == 1)
    {
        document.getElementById('corpo').className="fundo";
        document.getElementById('lamp').src='img/lampada apagada mine';
    }

    else 
    {
        document.getElementById('corpo').className="fundo2";
        document.getElementById('lamp').src='img/lampada acesa mine';
    }
}
