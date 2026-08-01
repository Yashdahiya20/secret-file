let current = 1;


function nextSlide(){

    document.getElementById("slide"+current)
    .classList.remove("active");


    current++;


    document.getElementById("slide"+current)
    .classList.add("active");

}



function saveName(){

    let name=document.getElementById("nameInput").value;


    if(name==""){

        alert("Please enter your name ❤️");
        return;

    }


    document.getElementById("welcomeText").innerHTML=
    "Welcome "+name+" ❤️";


    nextSlide();

}



function showPopup(){

    document.getElementById("popup").style.display="block";

}



let no=document.getElementById("noBtn");


no.addEventListener("mouseover",function(){

    let x=Math.random()*300;

    let y=Math.random()*200;


    no.style.left=x+"px";

    no.style.top=y+"px";

});



function yesClicked(){

    document.getElementById("popup").style.display="none";


    document.querySelector(".container").style.display="none";


    document.getElementById("final").style.display="block";


}