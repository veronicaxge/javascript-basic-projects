//set initial count
let count = 0;

//select value and buttons
const value = document.getElementById("value")
const btns = document.querySelectorAll(".btn")
//btns is a NodeList that behaves like an array and share some same methods with arrays


btns.forEach(function(btn){ //for each button, do something
    btn.addEventListener("click", function(event){
        //find out which classes the clicked button has using classList
        const styles = event.currentTarget.classList; 
        if(styles.contains("decrease")){
            count--
        }
        else if(styles.contains("increase")){
            count++
        } 
        else {
            count = 0
        }
        if(count > 0){
            value.style.color = "green"
        }
        else if(count < 0){
            value.style.color = "red"
        } else {
            value.style.color = "#222"
        }
        
    value.textContent = count //value.innerHTML would work here too
    })
})