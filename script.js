window.addEventListener("DOMContentLoaded", function() {

    // Variables
    let rules_btn = document.querySelector("#rules")
    let rules_image = document.querySelector(".rules_image")
    let overlay = document.querySelector(".overlay")
    let close = document.querySelector(".close")
    let btn = document.querySelectorAll("#btn")
    let challenge = document.querySelector(".challenge")
    let game = document.querySelector(".game")
    let scissors = document.querySelector(".scissors")
    let user_Points = 0

    // We define the button to show the rules and make it disspear
    // with the overlay

    function score() {
        let score = document.querySelector(".score_number").innerHTML = user_Points
    }

    setInterval(score,50)

    rules_btn.addEventListener("click", function() {
        if (rules_image.style.display == "none") {
            rules_image.style.display = "flex"
            overlay.style.display = "block"
            rules_image.classList.add("opacity")
        }
        else {
            rules_image.classList.remove("opacity")
            overlay.style.display = "none"
            rules_image.style.display = "none"
            
        }
    })

    // Ici la croix permettra de fermer aussi les règles

    close.addEventListener("click", function() {
        rules_image.classList.remove("opacity")
        overlay.style.display = "none"
        rules_image.style.display = "none"
    })

    // We define for each button a value and make sure 
    // the initial triangle dissapeares
    btn.forEach(button => {
        button.addEventListener("click", function() {
            console.log(button)
            // if (button.classList == "rock red") {
            //     game.style.display = "none"
            //     challenge.style.display = "flex"
            //     return 
            // }
            user_Points++
        })
        
    });
})