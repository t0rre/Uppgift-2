function afterDark()
{
    document.getElementById("body").style.backgroundColor = "indigo";
    document.getElementById("article").style.backgroundColor = "darkslateblue";
    document.getElementById("article").style.color = "darkorchid";
    document.getElementById("afterDark").style.visibility = "hidden";
    document.getElementById("light").style.visibility = "visible";
    document.getElementById("w3img").src = "http://jigsaw.w3.org/css-validator/images/vcss-blue";
    document.getElementById("themecolor").content = "indigo";
}
function light()
{
    //comment here
    document.getElementById("themecolor").content = "lightgrey"
    document.getElementById("body").style.backgroundColor = "lightgrey";
    document.getElementById("article").style.backgroundColor = "white";
    document.getElementById("article").style.color = "#6c6c6c";
    document.getElementById("afterDark").style.visibility = "visible";
    document.getElementById("light").style.visibility = "hidden";
    document.getElementById("w3img").src = "http://jigsaw.w3.org/css-validator/images/vcss";
}