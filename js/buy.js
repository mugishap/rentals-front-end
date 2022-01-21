
function lightTheme(){
document.body.style.backgroundColor = "white"
}
function darkTheme(){
    document.body.style.background = "black"
    document.querySelector("#navbar").style.background = "darkblue"

    }
    
const nav = document.querySelector('#navbar')
window.addEventListener('scroll', fixNav)

// function fixNav() {
//     if(window.scrollY > nav.offsetHeight + 150) {
//         nav.classList.add('active')
//     } else {
//         nav.classList.remove('active')
//     }
// }
var icon = document.getElementById("modeChanger");

icon.onclick = function darkMode() {
    document.body.classList.toggle("darkTheme");
    if(document.body.contains("darkTheme")){
        icon.src="../images/icons/sun.png";
    }
    else{
        icon.src= "../images/icons/moon.png";
    }

}