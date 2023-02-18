const button = document.querySelector("myButton");
var target = document.getElementById("h1")

target.addEventListener('click')

button.addEventListener("click", function() {
    var target = document.getElementById("h1")
    document.body.appendChild(target);
});
