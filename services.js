let serviceBtn=document.querySelector('.service-btn');
let expBtn=document.querySelector('.exp-btn');
let btnA=document.querySelector('.btna');
let btnB=document.querySelector('.btnb');
let btnC=document.querySelector('.btnc');
let headTitle=document.querySelector('#head');
let image=document.querySelector('.right-sec');
let icon=document.getElementsByClassName('icon');
let rightImage=document.querySelector('.right-sec');
let letsChat=document.querySelector('.lets-chat');


serviceBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    window.location.href="./services.html";
    
})

expBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    window.location.href=".explore.html";
    
})


// function changeIcon(newIconUrl) {
//     var icon = document.getElementsByClassName('icon');
//     icon.style.backgroundImage = "url('" + newIconUrl + "')";
// }


btnA.addEventListener('click',()=>{

    btnA.style.backgroundColor = 'rgb(81, 81, 51)';
    btnB.style.backgroundColor = 'black';
    btnC.style.backgroundColor = 'black';

    headTitle.innerHTML='Graphics Design';

    rightImage.style.backgroundImage = "url('image.png.jpg')"

    

})

btnB.addEventListener('click',()=>{

    btnB.style.backgroundColor = 'rgb(81, 81, 51)';
    btnA.style.backgroundColor = 'black';
    btnC.style.backgroundColor = 'black';

    headTitle.innerHTML='UI/UX Design';

    rightImage.style.backgroundImage = "url('ui.jpg')"
    


})

btnC.addEventListener('click',()=>{

    btnC.style.backgroundColor = 'rgb(81, 81, 51)';
    btnA.style.backgroundColor = 'black';
    btnB.style.backgroundColor = 'black';

    headTitle.innerHTML='Web Development';

    rightImage.style.backgroundImage = "url('dev.jpg')"
    
})

letsChat.addEventListener('click',()=>{
    window.location.href="./letschat";
})


