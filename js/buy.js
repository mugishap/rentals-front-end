
function darkTheme(){
    document.body.style.backgroundColor = "black"
    document.querySelector("#navbar").style.background = "darkblue"
    a
    document.querySelector("#goToDiv").style.cssText = ` = 
    background:darkblue;
    color:darkblue;
    `

    }
    function lightTheme(){
        document.body.style.backgroundColor = "white"
        document.querySelector("#navbar").style.background = "#3d5af1"
    }
    function displayTime(){
const date = new Date()
document.getElementById('time').innerHTML = date.toLocaleTimeString();
setTimeout(function() {displayTime()},1000)
    }
    let image = document.getElementById('image')
    let adDiv = document.getElementById('advert')
    function advertisement(){
setTimeout(function(){
    image.style.display='block'
    adDiv.appendChild(image)
}, 1000)
    }
