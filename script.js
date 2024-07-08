let hours = document.querySelector(".h");
let min = document.querySelector(".m");
let sec = document.querySelector(".s");


function armmovement() {
    
    let date = new Date();

    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds();

    let h_movement = 30*h + m/2;
    let m_movement = 6*m;
    let s_movement = 6*s;

    hours.style.transform = `rotate(${h_movement}deg)`;
    min.style.transform = `rotate(${m_movement}deg)`;
    sec.style.transform = `rotate(${s_movement}deg)`;
}

setInterval(armmovement,1000)
