const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTranstions(){
    //Button click active class
    for(let i=0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", ' ');
            this.className += ' active-btn' ;
        })
    }

    //Sections Active
    allSections.addEventListener("click", (e) =>{
        const id = e.target.dataset.id;
        console.log(id);
        if(id){
            //remove the selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle theme

    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode');
})

}

let image = document.getElementById("image");
let images = ['image1.png','image2.png', 'image3.png', 'image4.png', 'image.png', 'image2.png', 'image3.png',];
setInterval(function(){
    let random = Math.floor(Math.random()*7);
    image.src = "images/"+images[random];
},400);

PageTranstions();