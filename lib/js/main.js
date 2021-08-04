const inputBox = document.getElementById('title_input');


inputBox.onkeyup = function() {
    document.getElementById('main_title').innerHTML = inputBox.value;
}
const button = document.getElementById("submit_button");

button.addEventListener("click", clickListener);

function clickListener(event) {
    event.preventDefault();
    console.log("You Clicked a button");
}

let finalText = document.getElementById("story_result");

let submitButton = document.getElementById("submit_button");
submitButton.onclick = function() {
    if (document.getElementById("title_input").value == "" || document.getElementById("noun").value == "" || document.getElementById("verb").value == "" || document.getElementById("adjective").value == "")  {
        alert("Please fill in all fields");
    }
    else {
        finalText.innerText = ("Last night I ate a " + document.getElementById("noun").value + " and today I just had to " + document.getElementById("verb").value + " What a " + document.getElementById("adjective").value + " day!");
        document.querySelector(".form_container").style.display = "none";
        console.log("This works");
    }
};





