let expand = document.querySelector('.expand')
let changer = document.querySelector('.menu')
let right = document.querySelector('.right')



let left = document.querySelector('.left')
let plus = document.querySelector('.chat')
let recent = document.querySelector('.recent')
let threeIcons = document.querySelector('.threeIcons')
let spans = document.querySelectorAll('.span')
let final = document.querySelector('.tashkent')
let send = document.querySelector('.send')




changer.addEventListener('click', ()=>{
    if(left.classList.contains('bigLeft')){
        left.classList.remove('bigLeft')
        plus.style.display = 'none'
        recent.style.display = 'none'
        document.querySelector('.hat').style.display = 'none'
        document.querySelector('.sms').classList.remove('activeSms');
        threeIcons.classList.remove('activeIcon')
        spans.forEach((elm)=>{
            elm.style.display = 'none'
        })
        final.style.display = 'none'
        send.classList.remove('activeSend')
        show.classList.remove('showIt')


        // to be continued
    }else{
        left.classList.add('bigLeft')
        plus.style.display = 'block'
        setTimeout(() => {
            plus.style.color = 'white'
        }, 180);
        recent.style.display = 'flex'
        setTimeout(() => {
            document.querySelector('.hat').style.display = 'block'
        }, 350);
        document.querySelector('.sms').classList.add('activeSms');
        threeIcons.classList.add('activeIcon')
        spans.forEach((elm)=>{
            elm.style.display = 'block'
        })
        final.style.display = 'flex'
        send.classList.add('activeSend')



        // to be continued
    }



})

let input = document.querySelector('.input')
let drum = document.querySelector('.drum')
let drumP = document.querySelector('.drumP')

drum.addEventListener('click', ()=>{
    input.value = drumP.innerHTML;

})

let climate = document.querySelector('.climate')
let climateP = document.querySelector('.climateP')

climate.addEventListener('click', ()=>{
    input.value = climateP.innerHTML;

})

let air = document.querySelector('.air')
let airP = document.querySelector('.airP')

air.addEventListener('click', ()=>{
    input.value = airP.innerHTML;

})

let viral = document.querySelector('.viral')
let viralP = document.querySelector('.viralP')

viral.addEventListener('click', ()=>{
    input.value = viralP.innerHTML;

})

let profile = document.querySelector('.activeProfile')
let email = document.querySelector('.email')

profile.addEventListener('click', ()=>{
    if(email.classList.contains('emaile')){
        email.classList.remove('emaile')
    }else{
        email.classList.add('emaile')
    }

})
let exx = document.querySelector('.exx')

exx.addEventListener('click', ()=>{
    document.querySelector('.emaile').className = 'email';
})

let show = document.querySelector('.show')
let settings = document.querySelector('.wrapper')


settings.addEventListener('click', ()=>{
       
        if(left.className != 'left'){
            if(show.classList.contains('showIt')){
                show.classList.remove('showIt')
            }else{
                show.classList.add('showIt')
            }


        }
      


})

// only white theme left bro

let checking = document.querySelector('.forCheck')
let inner = document.querySelector('.inner')
let black = document.querySelectorAll('.whiteTheme')
let eachs = document.querySelectorAll('.each')
// box and image
let boxes = document.querySelectorAll('.box')
let image = document.querySelectorAll('.image')
console.log(boxes);

checking.addEventListener('click', ()=>{
    if(checking.classList.contains('activeCheck')){
        checking.classList.remove('activeCheck')
        inner.classList.remove('activeInner')
        black.forEach((em)=>{
            em.classList.remove('black')
        })
        document.querySelector('.menu').classList.remove('menuB')
        document.querySelector('.plus').classList.remove('plusB')
        plus.style.color = 'white'
        left.classList.remove('theme')
        right.classList.remove('theme1')
        document.querySelector('.recetn').classList.remove('black')
        document.querySelector('.hat').style.color = 'white'
        document.querySelector('.sms').classList.remove('activeSm')
        eachs.forEach((elm)=>{
            elm.classList.remove('eachA')
        })
        document.querySelector('.show').classList.remove('showA')
        document.querySelectorAll('.thesame').forEach((elm)=>{
            elm.classList.remove('thesameA')
        })
        document.querySelector('.uzb').classList.remove('uzbA')
        boxes.forEach((elm)=>{
            elm.classList.remove('boxA')
        })
        image.forEach((elm)=>{
            elm.classList.remove('imageA')
        })
        document.querySelector('.can').classList.remove('canA')
        document.querySelector('.finalist').classList.remove('finalistA')
        document.querySelector('.is').classList.remove('isA')
        document.querySelector('.send').classList.remove('sendA')
        document.querySelector('.slide').classList.remove('sendA')
        document.querySelector('.inputt').classList.remove('inputtA')
        document.querySelector('.gemini').classList.remove('geminiA')
        document.querySelector('.emial').classList.remove('theme2')
        document.querySelector('.gmai').classList.remove('gmaiA')
        document.querySelector('.rights').classList.remove('gmaiA')
        document.querySelector('.person').classList.remove('personA')



    }else{
        checking.classList.add('activeCheck')
        inner.classList.add('activeInner')


        /// starts from here
        

        black.forEach((em)=>{
            em.classList.add('black')
        })
        document.querySelector('.menu').classList.add('menuB')
        document.querySelector('.plus').classList.add('plusB')
        plus.style.color = 'hsl(0, 2%, 32%)'
        left.classList.add('theme')
        right.classList.add('theme1')
        document.querySelector('.recetn').classList.add('black')
        document.querySelector('.hat').style.color = 'hsl(0, 2%, 32%)'
        document.querySelector('.sms').classList.add('activeSm')
        eachs.forEach((elm)=>{
            elm.classList.add('eachA')
        })
        document.querySelector('.show').classList.add('showA')
        document.querySelectorAll('.thesame').forEach((elm)=>{
            elm.classList.add('thesameA')
        })
        document.querySelector('.uzb').classList.add('uzbA')
        boxes.forEach((elm)=>{
            elm.classList.add('boxA')
        })
        image.forEach((elm)=>{
            elm.classList.add('imageA')
        })
        document.querySelector('.can').classList.add('canA')
        document.querySelector('.finalist').classList.add('finalistA')
        document.querySelector('.is').classList.add('isA')
        document.querySelector('.send').classList.add('sendA')
        document.querySelector('.slide').classList.add('sendA')
        document.querySelector('.inputt').classList.add('inputtA')
        document.querySelector('.gemini').classList.add('geminiA')
        document.querySelector('.email').classList.add('theme2')
        document.querySelector('.gmai').classList.add('gmaiA')
        document.querySelector('.rights').classList.add('gmaiA')
        document.querySelector('.person').classList.add('personA')


    }

})

// if inner has active inner i have to add the white theme
// gonna be fun but quite much things to change first have to take color

// color #F0F4F9

if(inner.classList.contains('activeInner')){

}

console.log(document.querySelector('.can'));












