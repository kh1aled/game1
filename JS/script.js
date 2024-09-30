const popupModal = document.querySelector(".popup");
const popupOverlay = document.querySelector(".pop-overlay");
const game = document.querySelector(".game");




//loader functions



const loader = document.querySelector('.loader-container');
const container =  document.querySelector(".game")
// عند بدء تحميل الوسائط
container.addEventListener('loadstart', function() {
    container.style.display = 'none'
    loader.style.display = 'block'; // عرض المؤشر
});


// عند تحميل البيانات الفعلية
container.addEventListener('loadeddata', function() {
  container.style.display = 'block'
  loader.style.display = 'none'; // عرض المؤشر
});

// يمكنك أيضًا إضافة حدث للتحقق من حالة التحميل إذا كنت تريد
container.addEventListener('error', function() {
    loader.style.display = 'none'; // إخفاء المؤشر في حال وجود خطأ
    alert('Error loading video');
});



//screens variables 

//start screen
const start_screen_container = document.querySelector(".start-screen-container")
const startPLayBoy = document.querySelector(".start-screen-container .boy-container")
const startPLayGirl = document.querySelector(".start-screen-container .girl-container")

// play or learn screen 
const play_or_learn_screen = document.querySelector(".play-or-learn-screen")
const learnBtn = play_or_learn_screen.querySelector(".learn")
const playBtn = play_or_learn_screen.querySelector(".play")


//the_five_salah_screen
const the_five_salah_screen = document.querySelector(".the-five-salah-screen")
const salah1 = the_five_salah_screen.querySelector(".salah1")
const salah2 = the_five_salah_screen.querySelector(".salah2")
const salah3 = the_five_salah_screen.querySelector(".salah3")
const salah4 = the_five_salah_screen.querySelector(".salah4")
const salah5 = the_five_salah_screen.querySelector(".salah5")
const title = the_five_salah_screen.querySelector(".title")
const homeBtnFromFiveSalah = the_five_salah_screen.querySelector(".home")


// all-salah-container

const all_salah_container = document.querySelector(".all-salah-container")
const homeBtnFromAllSalah = all_salah_container.querySelector(".home")


//azkar screen
const athkar_alsalah_screen = document.querySelector(".athkar-alsalah-screen")
const homeBtnFromAthkar = athkar_alsalah_screen.querySelector(".home")
const prevBtnFromAthkar = athkar_alsalah_screen.querySelector(".pray")

//all-games-screen
const all_games_screen = document.querySelector(".all-games-screen")


homeBtnFromAthkar.addEventListener("click" , ()=>{
  
  athkar_alsalah_screen.style.display = "none";
  play_or_learn_screen.style.display = "block";
})
prevBtnFromAthkar.addEventListener("click" , ()=>{
  
  athkar_alsalah_screen.style.display = "none";
  all_salah_container.style.display = "block";
})

//how-to-pray-screen 

const how_to_pray_screen  = document.querySelector(".how-to-pray-screen")
const homeBtnFromPrayScreen = how_to_pray_screen.querySelectorAll(".home")
const prevBtnFromPrayScreen = how_to_pray_screen.querySelectorAll(".pray")

//============visible play or learn screen ===========
startPLayBoy.addEventListener("click" , ()=>{
  start_screen_container.style.display = "none";
  play_or_learn_screen.style.display = "block";
  play_or_learn_screen.querySelector(".boy").style.display = 'block'
  const items = all_salah_container.querySelectorAll(".boy")
  items.forEach((item)=>{
    item.style.display = "block"
  })
  how_to_pray_screen.querySelectorAll(`.slah .boyslaha-container`).forEach((el)=>{
    el.style.display = "flex";
  })
  Array.from(play_or_learn_screen.children).forEach(child => {
    child.classList.add("animated") 
  });

})

startPLayGirl.addEventListener("click" , ()=>{
  start_screen_container.style.display = "none";
  play_or_learn_screen.style.display = "block";
  play_or_learn_screen.querySelector(".girl").style.display = 'block'
  const items = all_salah_container.querySelectorAll(".girl")
  items.forEach((item)=>{
    item.style.display = "block"
  })
  how_to_pray_screen.querySelectorAll(`.slah .girlslaha-container`).forEach((el)=>{
    el.style.display = "flex";
  })
  Array.from(play_or_learn_screen.children).forEach(child => {
    child.classList.add("animated") 
  });
})


//============start play or learn ===========

learnBtn.addEventListener("click" , ()=>{
  play_or_learn_screen.style.display = "none";
  the_five_salah_screen.style.display = "block";

//  all_salah_container.querySelectorAll(".boy").style.display = "block"
})

playBtn.addEventListener("click" , ()=>{
  play_or_learn_screen.style.display = "none";
  all_games_screen.style.display = "flex";

//  all_salah_container.querySelectorAll(".boy").style.display = "block"
})


// Home btn actions

homeBtnFromFiveSalah.addEventListener("click" , ()=>{
  play_or_learn_screen.style.display = "block";
  the_five_salah_screen.style.display = "none";

})

homeBtnFromAllSalah.addEventListener("click" , ()=>{
  all_salah_container.style.display = "none";
  play_or_learn_screen.style.display = "block";
})

function removeAllActiveFromSlah(){
  how_to_pray_screen.querySelectorAll(".slah").forEach((el)=>{
    el.style.display = 'none'
  })
}

homeBtnFromPrayScreen.forEach((btn)=>{
  btn.addEventListener("click" , ()=>{
    removeAllActiveFromSlah()
    how_to_pray_screen.style.display = "none";
    play_or_learn_screen.style.display = "block";
   
  })
})

prevBtnFromPrayScreen.forEach((btn)=>{
  btn.addEventListener("click" , ()=>{
    removeAllActiveFromSlah()
    how_to_pray_screen.style.display = "none";
    the_five_salah_screen.style.display = "block";
   
  })
})



//======== show salah details==========

function visible_all_salah_container(){
  the_five_salah_screen.style.display="none";
  all_salah_container.style.display = "block";
}
function visible_the_five_salah_screen(){
  the_five_salah_screen.style.display="block";
  all_salah_container.style.display = "none";
}


salah1.addEventListener("click" , ()=>{
  visible_all_salah_container()
  all_salah_container.querySelector(".salah1-container").style.display = "block"
})


salah2.addEventListener("click" , ()=>{

  visible_all_salah_container()
  all_salah_container.querySelector(".salah2-container").style.display = "block"
})

salah3.addEventListener("click" , ()=>{
  visible_all_salah_container()

  all_salah_container.querySelector(".salah3-container").style.display = "block"
})

salah4.addEventListener("click" , ()=>{
  visible_all_salah_container()

  all_salah_container.querySelector(".salah4-container").style.display = "block"
})

salah5.addEventListener("click" , ()=>{
  visible_all_salah_container()

  all_salah_container.querySelector(".salah5-container").style.display = "block"
})



//====== hidden salah details and prev page========
const prevBtn = all_salah_container.querySelector(".pray")
const azkarBtn = all_salah_container.querySelector(".athkar")
const salahBtn = all_salah_container.querySelector(".salahss")
let salahActive;
prevBtn.addEventListener("click" , (e)=>{
  
  all_salah_container.querySelectorAll(".page").forEach((el)=>{
    if(el.style.display == "block"){
      el.style.display = "none"
      
    }
  })
  visible_the_five_salah_screen()
  //  all_salah_container.querySelectorAll("div").forEach((el)=>el.style.display = "none")
  
  
})

azkarBtn.addEventListener("click" , ()=>{
  athkar_alsalah_screen.style.display="block";
  all_salah_container.style.display = "none";
  
})
salahBtn.addEventListener("click" , ()=>{
  all_salah_container.querySelectorAll(".page").forEach((el)=>{
    if(el.style.display == "block"){
      salahActive = el.getAttribute("page-attr")
      el.style.display = "none"
      
    }
  })
  all_salah_container.style.display = "none";
  how_to_pray_screen.style.display = "block";
  how_to_pray_screen.querySelector(`.${salahActive}`).style.display = "block";
  
  
})

//===========SOUND PLAY 

function soundPlay(el){
  console.log(el.target);
  
  const soundSrc = el.getAttribute("sound"); 
  const audio = new Audio(soundSrc);               
  audio.play();     
}





// ========== swiper setup ===========
const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1, // عرض شريحة واحدة فقط في كل مرة
  slidesPerGroup: 1, // التمرير بشريحة واحدة في كل مرة
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});






























//========= check screen
const checkScreen = () => {
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  const isMobile = window.innerWidth < 768 && isPortrait;
  return isMobile;
};
window.addEventListener("load", () => {
  const is_mobile = checkScreen();
  if (is_mobile) {
    popupModal.style.visibility = "visible";
    popupOverlay.style.visibility = "visible";
  } else {
    game.style.visibility = "visible";
  }
});
document.addEventListener("contextmenu", function (event) {
  var target = event.target;
  if (target.tagName === "IMG") {
    event.preventDefault();
  }
  return false;
});


window.addEventListener("orientationchange", function () {
  const is_mobile = checkScreen();
  if (window.orientation === 90 || window.orientation === -90) {
    if (is_mobile) {
      game.style.visibility = "visible";
      popupModal.style.visibility = "hidden";
      popupOverlay.style.visibility = "hidden";
    } else {
      popupModal.style.visibility = "visible";
      popupOverlay.style.visibility = "visible";
    }
  } else {
    popupModal.style.visibility = "visible";
    popupOverlay.style.visibility = "visible";
  }
});


var elem = document.body;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}




 const xhr = new XMLHttpRequest();

 xhr.open("GET" ," https://fakestore342api.com/products/1" , true)

  xhr.onreadystatechange = function() {

   if (xhr.readyState === XMLHttpRequest.DONE) {
       if (xhr.status === 200) {
           console.log(xhr.responseText); 
       } else {
           console.error('حدث خطأ: ' + xhr.status);
       }
   }
 };




xhr.send()

console.log(xhr);


// fetch("https://fakestoreapi.com/products/1")
// .then(res=>res.json())
// .then(data=>data.push(data))

// console.log(data);
