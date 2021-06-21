
//Funksjon for å velge stolpe. 
function choosePillar(id) 
{   
    if (selectedPillar == id) selectedPillar = null;
    else selectedPillar = id;

    CheckIfChosen();
    

    show();
}

//Funksjon for å velge valgt stolpe
function CurrentPillar()
{
    return selectedPillar == null ? "Ingen" : selectedPillar;
}
//Funksjon for å disable/enable knappene
function CheckIfChosen()
{
     selectedPillar == null ? status = "disabled" : status = "enabled";
}

//funksjon for å slette en stolpe
function deletePillar() 
    {
    numbers.splice (selectedPillar -1, 1);

    show()
}

//Funksjon for å endre en stolpe til verdi i inputfeltet
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


//Funksjon for å legge til en stolpe
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
