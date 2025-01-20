const formulaire = document.getElementById("resaForm");

const formBlocs = document.querySelectorAll(".form-bloc");

function sendResa(event) {

    event.preventDefault();
  
    console.log("Formulaire envoyé");

    formBlocs.forEach(bloc => {
        bloc.classList.add("error");
    });
  }

formulaire.addEventListener("submit", sendResa);

