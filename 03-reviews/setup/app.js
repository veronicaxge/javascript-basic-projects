// local reviews data; an array with objects. 
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

// get all elements for the review card
const personimg = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// get all buttons
const btnleft = document.querySelector(".prev-btn");
const btnright = document.querySelector(".next-btn");
const btnsurpirse = document.querySelector(".random-btn");

// set initial contents on review card
let a = 0;
setReviewer(a)

// click right btn
btnright.addEventListener("click", function(){
  if(a<3) {
    a++
  } else {
    a = 0
  }
  setReviewer(a)
})

//click left btn
btnleft.addEventListener("click", function(){
  if(a>0) {
    a--
  } else {
    a = 3
  }
  setReviewer(a)
})

btnsurpirse.addEventListener("click", function(){
  let b = getRandomNumber()
  setReviewer(b)
})

//helper function 1: set reviewer
function setReviewer(i){
  personimg.src = reviews[i].img
  author.textContent = reviews[i].name
  job.textContent = reviews[i].job
  info.textContent = reviews[i].text
}

//helper function 2: random number generator
function getRandomNumber(){
  let randNum = Math.floor(Math.random()* reviews.length)
  return randNum
}


