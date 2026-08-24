const accordion = document.querySelectorAll(".acc");

accordion.forEach((item) =>{
    item.addEventListener("click",
        function(){

    this.classList.toggle("active");

          const panel=this.nextElementSibling;

          if(panel.style.display === "block"){
             panel.style.display = "none";
          }else{
            panel.style.display = "block";
          }
        });
});

const slides = [
    {
        title:"Complete Auth Flow",
        text:"Beautiful dark/light mode with smooth transition,persisted across all pages and sessions."
    },
    {
        title:"Responsive Design",
        text:"Works perfectly on Desktop,Tablet and Mobile devices."
    },
    {
        title:"HTML CSS Javascript",
        text:"Built using only HTML,CSS AND Vanilla Javascript."
    }
];

let current = 0;

const title = document.querySelector(".slide h2");
const desc = document.querySelector(".slide p");
const dots = document.querySelectorAll(".dot");

function showSlide(){

    title.innerHTML = slides[current].title;
    desc.innerHTML = slides[current].text;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[current].classList.add("active");
}

function nextSlide(){

    current++;

    if(current>=slides.length){
        current=0;
    }

    showSlide();
}

function prevSlide(){
    current--;

    if(current<0){
        current=slides.length-1;
    }
    showSlide();
}

setInterval(nextSlide,4000);

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        current=index;
        showSlide();
    })
})

showSlide();