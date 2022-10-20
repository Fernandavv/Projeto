function imgSlider(anything){
    document.querySelector('.frutas').src = anything;
}
function CircleCor(color){
    const Circle = document.querySelector('.circle');
    Circle.style.background = color;
}

function toggleMenu(){
    var Menutoggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation')
    Menutoggle.classList.toggle('active')
    navigation.classList.toggle('active')
}