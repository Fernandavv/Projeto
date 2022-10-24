function imgSlider(anything){
    document.querySelector('.frutas').src = anything;
}
function CircleCor(color){
    const Circle = document.querySelector('.circle');
    Circle.style.background = color;
}

function textocor(color){
    const texto = document.getElementsByTagName('span')[0];
    texto.style.color = color;
    // referencia o primeiro 'h1' do layout html

}
function button(color){
    const button = document.querySelector('button');
    button.style.background = color;
    // referencia o primeiro 'h1' do layout html

}
function nav(color){
    const nav = document.querySelector('.active');
    nav.style.background = color;
    // referencia o primeiro 'h1' do layout html

}
function act(color){
    const act = document.querySelector('.act');
    act.style.background = color;
    // referencia o primeiro 'h1' do layout html

}

//vini
const faq = document.querySelectorAll(".faq");
faq.forEach(faq =>{
    faq.addEventListener("click", () =>{
        faq.classList.toggle("active");
    })
})



function toggleMenu(){
    var Menutoggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation')
    Menutoggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

let themeswitch = document.querySelector('.themeswitch');
let body = document.querySelector('body');
themeswitch.classList.toggle('active');


function funcao(imgSlider) {
    document.getElementById("textBox").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Officia, deleniti accusamus nam dolorum quod labore  dignissimos sapiente pariatur assumenda culpa nobis commodi. Modi impedit laborum aperiam tempora autem praesentium veniam.";
}
function funcao2(imgSlider) {
    document.getElementById("textBox").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Officia, deleniti accusamus nam dolorum quod labore  dignissimos sapiente pariatur assumenda culpa nobis commodi. Modi impedit laborum aperiam tempora autem praesentium veniam. ";
}

function funcao3(imgSlider) {
    document.getElementById("textBox").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Officia, deleniti accusamus nam dolorum quod labore  dignissimos sapiente pariatur assumenda culpa nobis commodi. Modi impedit laborum aperiam tempora autem praesentium veniam.";
}

