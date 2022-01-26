const n_player = Math.floor(Math.random() * 6) + 1;
const computer = Math.floor(Math.random() * 6) + 1;

const botton = document.getElementById("btn");

botton.addEventListener("click",
    function() {

        if (n_player > computer) {
            document.getElementById("result").innerHTML = `Il risultato è di ${n_player} a ${computer}. Complimenti, hai vinto!`;
        } else if (n_player < computer) {
            document.getElementById("result").innerHTML = `Il risultato è di ${n_player} a ${computer}. Peccato, hai perso!`;
        }   else {
            document.getElementById("result").innerHTML = `Il risultato è di ${n_player} a ${computer}. Questa volta è un pareggio!`;
        }

    }
)
