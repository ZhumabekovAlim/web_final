function changeIcon(icon) {
    icon.classList.toggle("change");
}

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        perPage: 3,
        perMove: 1,
        type    : 'loop',
        autoplay: true,
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide1', {
        perPage: 3,
        perMove: 1,
        type    : 'loop',
        autoplay: true,
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-mobile', {
        perPage: 1,
        perMove: 1,
        type    : 'loop',
        autoplay: true,
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-mobile1', {
        perPage: 1,
        perMove: 1,
        type    : 'loop',
        autoplay: true,
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-equipment', {
        perPage: 1,
        perMove: 1,
        type    : 'loop',
        autoplay: true,
    }).mount();
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
}

document.getElementById('buyButton').addEventListener('click', playSound);
document.getElementById('buyButton1').addEventListener('click', playSound);

function playSound() {
    var audio = new Audio('sound/success.mp3');
    audio.play();

    audio.addEventListener('ended', function() {
        window.location.href = 'becomeMember.html';
    });
}

var membershipButtons = document.querySelectorAll('.membershipButton');

membershipButtons.forEach(function (button) {
    button.addEventListener('mouseover', function() {
        button.style.transform = 'scale(1.2)';
    });

    button.addEventListener('mouseout', function() {
        button.style.transform = 'scale(1)';
    });
});

document.getElementById('results').addEventListener('click', changeImage);
document.getElementById('results1').addEventListener('click', changeImage1);

function changeImage() {
    var origSplide = document.getElementById('splide');
    var notOrigSplide = document.getElementById('splide1');   
    if(origSplide.style.display == 'block'){
        origSplide.style.display = 'none';
        notOrigSplide.style.display = 'block';
    }
    else{
        origSplide.style.display = 'block';
        notOrigSplide.style.display = 'none';
    }
}

function changeImage1() {
    var origSplide = document.getElementById('splide-mobile');
    var notOrigSplide = document.getElementById('splide-mobile1');   
    if(origSplide.style.display == 'block'){
        origSplide.style.display = 'none';
        notOrigSplide.style.display = 'block';
    }
    else{
        origSplide.style.display = 'block';
        notOrigSplide.style.display = 'none';
    }
}

document.getElementById('cart').addEventListener('click', cartHandler);

