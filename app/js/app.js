import { Swiper, Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation,Thumbs,Zoom,EffectCube,EffectCoverflow,EffectFade } from 'swiper'
Swiper.use([ Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation,Thumbs,Zoom,EffectCube,EffectCoverflow,EffectFade ])



document.addEventListener('DOMContentLoaded', () => {

	
	// HERO-SLIDER
	const swiper = new Swiper('.hero-slider', {
		// Optional parameters
		//direction: 'gorizontal',
		speed: 1000,
		effect: 'fade',
		fadeEffect: {
		  crossFade: true
		},
		slidesPerView:1,
		loop: false,
	  
		// If we need pagination
		pagination: {
		  el: '.hero-slider__pagination',
		  type:'custom',
		  renderCustom: function(swiper,current,total) {
			 let indT = total >= 10 ? total : `0${total}`
			 let indC = current >= 10 ? current : `0${current}`
			 return `<b>${indC}</b><span></span>${indT}`
		  }
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.hero-slider__next',
		  prevEl: '.hero-slider__prev',
		},
	  
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		  draggable:true,
		},
	  });
	  
	// ABOUT-SLIDER
	const SliderAbout = new Swiper('.about-slider', {
		speed:1000,
		parallax: true,
		navigation: {
			nextEl: '.about-slider__prev',
			prevEl: '.about-slider__next',
		  },
		breakpoints: {
			1025: {
				
				 
			}
		}
	  })

	//ACCORDEON  
	  const headers = document.querySelectorAll('[data-name="accordeon-title"]');
	  const accordions = document.querySelectorAll('.accordion');
  
	  headers.forEach(function(item){
		  item.addEventListener('click',headerClick)
	  })
  
	  function headerClick(){
		  this.nextElementSibling.classList.toggle('hidden');
	
	  }
  
	  accordions.forEach(el => {
		  el.addEventListener("click", (e) => {
			  const self = e.currentTarget;
			  const control = self.querySelector('.accordion__control');
			  const content = self.querySelector('.accordion__content');
  
			  self.classList.toggle('open');
  
			  if (self.classList.contains('open')) {
				  content.style.maxHeight = content.scrollHeight + 'px';
  
			  } else {
				  content.style.maxHeight = null;
			  }
		  });
	  })  


	//TABS
	const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
	const tabsItem = document.querySelectorAll('.tabs__item');
   
	tabsBtn.forEach(function(item) {
	   item.addEventListener("click", function(){
		  let currentBtn = item;
		  let tabId = currentBtn.getAttribute("data-tab");
		  let currentTab = document.querySelector(tabId);
   
			   if(! currentBtn.classList.contains('active')) {
				   tabsBtn.forEach(function(item){
				   item.classList.remove('active');
			   });
	
			   tabsItem.forEach(function(item){
					item.classList.remove('active');
			   });
	
			   currentBtn.classList.add('active');
			   currentTab.classList.add('active')
		  }
		
	   })
	})
	document.querySelector('.tabs__nav-btn:nth-child(1)').click();
   
	const tabsSliderBtn = document.querySelectorAll('.tabs-slider__nav-btn');
   	const tabsSliderItem = document.querySelectorAll('.tabs-slider__item');
   
    tabsSliderBtn.forEach(function(item) {
	  item.addEventListener("click", function(){
		 let currentSliderBtn = item;
		 let tabSliderId = currentSliderBtn.getAttribute("data-tab-slider");
		 let currentSliderTab = document.querySelector(tabSliderId);
   
			  if(! currentSliderBtn.classList.contains('active')) {
				  tabsSliderBtn.forEach(function(item){
				  item.classList.remove('active');
			  });
   
			  tabsSliderItem.forEach(function(item){
				   item.classList.remove('active');
			  });
   
			  currentSliderBtn.classList.add('active');
			  currentSliderTab.classList.add('active')
		 }
	   
	  })
    })
    document.querySelector('.tabs-slider__nav-btn:nth-child(2)').click();
	 
   //TABS-SLIDER

    const sliderTab = new Swiper('.slider-tab', {
		slidesPerView:1,
		loop:false,
		breakpoints: {
		1025: {
			slidesPerView:1.5,
			centeredSlides:2,
			spaceBetween:10,
			loop:true,
	  		}
		},
		zoom: {
	  		maxRatio:2,
		},
		pagination: {
	  		el: ".slider-tab__pagination",
	  		clickable: true,
	  	},
    });
  
  	const swiperInTab = new Swiper(".slider-in-tab", {
		direction:'vertical',
		loop:true,
		speed:1000,
   		// spaceBetween:10,
		effect: 'cube',
		cubeEffect: {
	  	slideShadows:true,
	  	shadows:true,
	  	shadowOffset:20,
	  	shadowScale:0.94
	  },
		zoom: {
	  		maxRatio:2,
		},
		pagination: {
	 	 el: ".slider-in-tab__pagination",
	  	clickable: true,
	  },
   // nested:true,
  	});
  
// SLIDER-AFTER
const SliderAfter = new Swiper('.slider-after', { 
	direction:'vertical',
	spaceBetween:20,
	loop: true,
		speed:500,
		
		navigation: {
			nextEl: '.slider-after__next',
			prevEl: '.slider-after__prev',
		  },
  });

const SliderAfterIN = new Swiper('.slider-after-in', {
	direction:'horizontal',
	loop: false,
	speed:400,
	parallax: true,
	nested:true,		
  });

// VIDEO-SLIDER
const videoSlider = new Swiper('.video-slider', {
    // Optional parameters
    slidesPerView:1,
    touchRatio:2,
    simulateTouch:false,
    spaceBetween:30,
    loop: false,
    breakpoints: {
        768: {
            slidesPerView:1,
            initialSlide:2
        },
        1024:{
            
            slidesPerView:2,
            initialSlide:2
        },
    },
      
    navigation: {
      nextEl: '.video-slider__next',
      prevEl: '.video-slider__prev',
    },
  
   
  });


})
