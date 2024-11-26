let images = [{
    src: './img/firstPicture.png',
    titleNav: 'Rostov-on-Don, Admiral',
    city: 'Rostov-on-Don <br>LCD admiral',
    repairTime: '3.5 months',
    apartmentArea: '81 m2',
    repairCost: 'Upon request'
  }, {
    src: './img/secondPicture.png',
    titleNav: 'Sochi Thieves',
    city: 'Sochi Thieves',
    repairTime: '4 months',
    apartmentArea: '105 m2',
    repairCost: 'Upon request'
  }, {
    src: './img/thirdPicture.png',
    titleNav: 'Rostov-on-Don Patriotic',
    city: 'Rostov-on-Don Patriotic',
    repairTime: '3 months',
    apartmentArea: '93 m2',
    repairCost: 'Upon request'
  }];

  const sliderOptions = {
    dots: true,
    navs: true,
  };

  function initSlider(options) {
    if (!images || !images.length) return;

  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".slider__arrows");
  let sliderDots = document.querySelector(".slider__dots");
  let sliderNav = document.querySelector(".nav-hero-two");

  initImages();
  initArrows();

 if (options.dots) {
    initDots();
  }

if (options.navs) {
    initNav();
  }

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${image.src});" data-index="${index}"></div>`;
      if (index === 0) {
        changeText(index)
      }
      sliderImages.innerHTML += imageDiv;
    });
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    if (options.dots) {
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
    }
    if (options.navs) {
      sliderNav.querySelector(".active").classList.remove("active");
      sliderNav.querySelector(".n" + num).classList.add("active");
    }

    changeText(num)
  }

  function changeText(num) {
    document.querySelector ('.city-one-text').innerHTML = images[num].city;
    document.querySelector ('.city-two-text').innerHTML = images[num].repairTime;
    document.querySelector ('.city-tree-text').innerHTML = images[num].apartmentArea;
    document.querySelector ('.city-for-text').innerHTML = images[num].repairCost;
  }

  function initNav() {
    images.forEach((image, index) => {
      let nav = `<li class="text-navin n${index} ${index === 0? "active" : ""}"data-index="${index}">
      <a href="#">${image.titleNav}</a>
      </li>`;
      sliderNav.innerHTML += nav;
    });
    sliderNav.querySelectorAll("li").forEach(nav => {
      nav.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }
  }

  document.addEventListener("DOMContentLoaded", function() {
    initSlider(sliderOptions);
  });
