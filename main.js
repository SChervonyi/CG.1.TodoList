function ShowInput() {
    var x, text;
    x = document.getElementById("add_field").value;
    if (isNaN(x)) {
        text = x;
    } else {
        text = "Enter text, please";
    }
    console.log(text);
}