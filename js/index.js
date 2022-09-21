let mouseX = 0;
let mouseY = 0;
let flashlight = document.getElementById("flashlight");

// Detect touch device
const isTouchDevice = () =>{
    try{
        // create touch event
        document.createEvent("TouchEvent");
        return true;
    }
    catch(e){
        return false;
    }
};

// console.log(isTouchDevice());
function getMousePos(e){
    mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY;

    flashlight.style.setProperty("--Xpos", mouseX + "px");
    flashlight.style.setProperty("--Ypos", mouseY + "px");
}

document.addEventListener("mousemove", getMousePos);
document.addEventListener("touchmove", getMousePos);
