var Apre_e_Fecha_Menu = false

function ApagarTextoPes(){
    Input = document.getElementById("InputPes")
    Input.value = ""
}

function ApreFechaMenu(){
    var MenuVer = document.getElementById("MenuVertical")
    var TextoBtns = document.querySelectorAll(".TXTMenuVer")
    var BtnsVer = document.querySelectorAll(".BtnMenuve")
    var IconsBtnsVer = document.querySelectorAll(".IconsMenuver")
    var ConteúdoPrin = document.getElementById("ConteudoPrin")
    var Rodapé = document.getElementById("Rodapé")
    var BtnAtivo = document.querySelectorAll(".AtivoMenVer")

    if(Apre_e_Fecha_Menu === false){
        Apre_e_Fecha_Menu = true
        Rodapé.style.filter = "blur(0.2vh) brightness(0.3)"
        ConteúdoPrin.style.filter = "blur(0.2vh) brightness(0.3)"
        MenuVer.style.cssText = "position: fixed; width: 42vh; height: 100%; background-color: rgb(17, 17, 17); z-index: 2; box-shadow: 0.2vh 0 rgb(43, 43, 43); display: flex; flex-direction: column; gap: 6vh; padding-top: 6vh; align-items: center;"
        for(var i = 0; i < TextoBtns.length; i++){
            TextoBtns[i].style.display = "block"
        }
        for(var i = 0; i < BtnsVer.length; i++){
            BtnsVer[i].style.cssText = "width: 34vh; height: 8.6vh; background-color: rgb(23, 23, 23); align-items: center; border-radius: 2.6vh; cursor: pointer; transition: 0.4s; display: flex; flex-direction: row; padding-left: 2.8vh;"
        }
        for(var i = 0; i < IconsBtnsVer.length; i++){
            IconsBtnsVer[i].style.paddingTop = "1vh"
        }
    BtnAtivo[0].style.backgroundColor = "rgb(61, 26, 203)"
    } else{
        Apre_e_Fecha_Menu = false
        Rodapé.style.filter = "none"
        ConteúdoPrin.style.filter = "none"
        MenuVer.style.cssText = "position: fixed; width: 12.7vh; height: 100%; background-color: rgb(17, 17, 17); z-index: 2; box-shadow: 0.2vh 0 rgb(43, 43, 43); display: flex; flex-direction: column; align-items: center; gap: 5vh; padding-top: 3vh;"
        for(var i = 0; i < TextoBtns.length; i++){
            TextoBtns[i].style.display = "none"
        }
        for(var i = 0; i < BtnsVer.length; i++){
            BtnsVer[i].style.cssText = "width: 8.6vh; height: 8.6vh; background-color: rgb(23, 23, 23); text-align: center; border-radius: 2.6vh; cursor: pointer; transition: 0.4s; display: flex; flex-direction: column;"
        }
        for(var i = 0; i < IconsBtnsVer.length; i++){
            IconsBtnsVer[i].style.paddingTop = "1.9vh"
        }
        BtnAtivo[0].style.backgroundColor = "rgb(61, 26, 203)"
    }
}

document.querySelector("#ConteudoPrin").addEventListener("click",function(){
    Apre_e_Fecha_Menu = true
    ApreFechaMenu()
})

document.querySelector("#Rodapé").addEventListener("click",function(){
    Apre_e_Fecha_Menu = true
    ApreFechaMenu()
})