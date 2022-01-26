const mailList = ["aldo@gmail.com", "giovanni@gmail.com", "giacomo@gmail.com"];


//metto il button in una const
const button = document.getElementById("start-button");


//comincio a dare le istruioni dopo il click
    button.addEventListener("click",
    function() {

        //prendo il valore della mail
        const myMail = document.getElementById("mail").value;

        //imposto falso fuori dal ciclo, sennò ogni alert verrebbe 
        //ripetuto con il ciclo for
        let match = false;

        for ( let i = 0; i < mailList.length; i++) {

            if (myMail == mailList[i]) {
                match = true;
            }
        }

        //qua si accede solo se match è vero e 
        //quindi solo se una mail combacia con quelle in lista
        if (match) {
            alert ("Accesso consentito!");
        } else {
            alert("Accesso negato");
            }



    }
)