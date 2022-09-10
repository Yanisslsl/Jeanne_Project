import FullPage from "fullpage.js";
  
export const fullpage  = new FullPage('#fullpage', {
  autoScrolling: true,
  scrollHorizontally: true,
  scrollBar: false,
  lockAnchors: true,
  continuousHorizontal: true,
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  anchors: ['home', 'values', 'knowledge', 'openSource', 'contact'],
  verticalCentered:false,
  menu: '.nav-bar',
  normalScrollElements: '.scrollable-content',
  navigation: true,
  navigationPosition: 'left',
  dragAndMove: true,
  slidesNavigation: true,
  scrollOverflow: true,
  fixedElements: '.c-top-bar, .social',
  // onLeave: function(origin: any, destination: any, direction: any, trigger: any){
  //   console.log(origin, destination, direction, trigger)
  //   console.log(document.getElementById('#img-first-page'))
  // }
})

const navButtons = document.getElementById('fp-nav')


if(navButtons){
//   console.log(navButtons.className)
//   navButtons.className += ' hidden'
// navButtons.style.left = '8px'
// arrowRight[1].style.display += 'none'
navButtons.style.display = 'none'
}

