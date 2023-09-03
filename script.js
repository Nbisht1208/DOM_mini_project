var button =document.querySelector("button")
var istatus =document.querySelector("h5")
var con =document.querySelector(".instaFeature")
var like =document.querySelector("i")
var check =0;
var i=0;
var image =document.querySelector("img")

button.addEventListener("click",function(){
    if (check==0) {
        istatus.innerHTML="Friends"
        button.innerHTML="Request Sent"
        image.style.transform='scale(1.1)'
        istatus.style.color="green"
        button.style.backgroundColor='blueviolet'
        check=1;
    }else{
        istatus.innerHTML="Stranger"
        image.style.transform='scale(1)'
        button.style.backgroundColor='cadetblue'
        button.innerHTML="Add Friend"
        istatus.style.color="red"
        check=0
    }
    // image.style.transform='scale(1.5)'
    // istatus.innerHTML="Friends"
    // istatus.style.color="green"
    // button.innerHTML="Request Sent"

})
image.addEventListener("click",function () {
    if (i==0) {
        image.style.transform="scale(1.1)"
        i=1
    }else{
        image.style.transform="scale(1)"
        i=0
    }
})
con.addEventListener("dblclick",function () {
    like.style.transform="translate(-50%,-50%) scale(1)"
    like.style.color="red"
    like.style.opacity="0.8"
    setTimeout(() => {
        like.style.opacity=0;
    }, 1000);
    setTimeout(() => {
        like.style.transform="translate(-50%,-50%) scale(0)"
    }, 2000);
} )
