let p=document.querySelector('.project')
let q=document.querySelector('.tech')
let skill=document.querySelector('.skills101')
let project=document.querySelector('.project101')
let darkmode =document.querySelector('.light-dark')
let sun=document.querySelector('.sun')
let moon=document.querySelector('.moon')
let body=document.querySelector(".body")
let txt=document.querySelectorAll('.txt')
let txt1=document.querySelectorAll('.txt1')
let txt2=document.querySelectorAll('.txt2')
let clr=document.querySelectorAll('.clr')


p.addEventListener("click",()=>{
    p.classList.add("toggle")
    if(q.classList.contains("toggle")){
        q.classList.remove("toggle")
        skill.classList.add("hiderule")
        project.classList.remove("hiderule")
    }
})
q.addEventListener("click",()=>{
    q.classList.add("toggle")
    if(p.classList.contains("toggle")){
        p.classList.remove("toggle")
        skill.classList.remove("hiderule")
        project.classList.add("hiderule")
    }
})

darkmode.addEventListener("click",()=>{
    if(body.classList.contains('bodydark')){
        moon.style.display='flex'
        sun.style.display='none'
        console.log('yes')
        body.style.transition='.5s'
        body.classList.remove("bodydark")
        for(let i=0;i<txt.length;i++){
            txt[i].classList.remove("textwh")

                }
        for(let i=0;i<txt1.length;i++){
            txt1[i].classList.remove("textwh")
        }
        for(let i=0;i<txt2.length;i++){
            txt2[i].classList.remove("textwh")
        }
        for(let i=0;i<clr.length;i++){
            clr[i].classList.remove("textwh")
        }

    }else{
        moon.style.display='none'
        sun.style.display='flex'
        console.log('no')
        body.classList.add("bodydark")
        for(let i=0;i<txt.length;i++){
            txt[i].classList.add("textwh")
        }
        for(let i=0;i<txt1.length;i++){
            txt1[i].classList.add("textwh")
        }
        for(let i=0;i<txt2.length;i++){
            txt2[i].classList.add("textwh")
        }
        for(let i=0;i<clr.length;i++){
            clr[i].classList.add("textwh")
        }
    }

})