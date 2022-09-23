const player = document.getElementById("player");

document.addEventListener("click",function () {
    player.classList.add("playerJump");
})  
/* probando el comien en rama */
//---- boton de pausa ---------------------------------------------------------------------------------------- 
function stopanimation()
{
    cactus.style.animationPlayState = 'paused'
    player.style.animationPlayState = 'paused'
    background.style.animationPlayState ='paused'
     

}
function stopscore()
{
    clearInterval(scoreintervalId)
    clearInterval(scoreintervalId)

}
function resumencore()
{
    scoreintervalId = setInterval(()=>
    {
        score++
        document.getElementById("score").innerText = score

    },1000)


}
function pausegame()
{
    stopscore();
    stopanimation();
    stopscore();
    
    
     
     
}
function resumengame()
{
    resumencore();
     cactus.style.animationPlayState = 'running'
     player.style.animationPlayState = 'running'
     background.style.animationPlayState ='running'
    //  resumencore();
     
}


buttonPlayStop.addEventListener('click', () => {
    if (buttonPlayStop.classList.contains("play")) {
        resumengame();
    } 
    else {
        
        pausegame();
    }
    buttonPlayStop.classList.toggle("play");
})