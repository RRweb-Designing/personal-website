// header toggle 

let menubtm = document.getElementById("menubtm")

menubtm.addEventListener('click', function(e){
document.querySelector('body').classList.toggle('mobile-nav-active')
this.classList.toggle('fa-xmark')
}
)

// trpe script

let typed = new Typed('#auto-input',
    {
    strings: ['Web Developer!', 'Freelancer!','UI/UX Designer!','YouTuber!'], 
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
}
)


