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
function advertisement1(){
    let ad1 = document.querySelector('.fullad')
    ad1.style.display = "flex"
}
window.setTimeout(advertisement1, 1000)
function closeAd(
    
)
function interiorImage(){
    let image = document.getElementById('houseImage')
    image.setAttribute('src','../../images/interior/house1a.jpg')
}
function exteriorImage(){
    let image = document.getElementById('houseImage')
    image.setAttribute('src',"../../images/buy/house1.jpg")
}