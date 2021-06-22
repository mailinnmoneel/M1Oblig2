function choosePillar(id) 
{   
    if (selectedPillar == id) selectedPillar = null;
    else selectedPillar = id;

    checkIfChosen();
    

    show();
}

function currentPillar()
{
    return selectedPillar == null ? "Ingen" : selectedPillar;
}

function checkIfChosen()
{
     selectedPillar == null ? status = "disabled" : status = "enabled";
}


function deletePillar() 
{
    numbers.splice (selectedPillar -1, 1);

    show()
}

function changePillar() 
{      
    if (inputValue > 0 && inputValue <= 10) 
    {
        numbers[selectedPillar -1] = inputValue;   
    }
    else 
    {
        alert('Feil verdi, vennligst prøv et tall mellom 1 og 10');
    }
   show()
}

function addPillar() 
{
    

    if (inputValue > 0 && inputValue <= 10) 
    {        
        numbers.push(inputValue); 
    }           
    else
    {
        alert('Feil verdi, prøv igjen!');
    }
        
    show()
}
