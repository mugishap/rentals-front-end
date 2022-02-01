function darkTheme() {
    document.body.style.backgroundColor = "black"
    document.querySelector("#navbar").style.cssText = ` = 
    background: darkblue;
    color: white;
    `
    document.querySelector("#goToDiv").style.cssText = ` = 
    background:darkblue;
    color:darkblue;
    `

}
function lightTheme() {
    document.body.style.backgroundColor = "white"
    document.querySelector("#navbar").style.background = "#3d5af1"
}
function displayTime() {
    const date = new Date()
    document.getElementById('time').innerHTML = date.toLocaleTimeString();
    setTimeout(function () { displayTime() }, 1000)
}

function showMap(){
   let map = document.getElementById('map')
map.style.display='flex'
}