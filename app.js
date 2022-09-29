const cardArray = [
  {
    name: 'jiayuan',
    img: 'images/jiayuan.jfif'
  },
  {
    name: 'yutong',
    img: 'images/yutong.jfif'
  },
  {
    name: 'chenxu',
    img: 'images/chenxu.jfif'
  },
  {
    name: 'chengji',
    img: 'images/chengji.jfif'
  },
  {
    name: 'shuyang',
    img: 'images/liwen.jfif'
  },
  {
    name: 'ruining',
    img: 'images/ruining.jfif'
  },

  {
    name: 'jiayuan',
    img: 'images/jiayuan.jfif'
  },
  {
    name: 'yutong',
    img: 'images/yutong.jfif'
  },
  {
    name: 'chenxu',
    img: 'images/chenxu.jfif'
  },
  {
    name: 'chengji',
    img: 'images/chengji.jfif'
  },
  {
    name: 'shuyang',
    img: 'images/liwen.jfif'
  },
  {
    name: 'ruining',
    img: 'images/ruining.jfif'
  }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []



function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/goose2.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)
  }
}


function checkMatch() {
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]
  console.log(cards)
  console.log('check for match')
  if (optionOneId == optionTwoId) {
    alert('You can clicked the same image')
    cards[cardsChosenIds[0]].setAttribute('src', 'images/goose2.png')
    cards[cardsChosenIds[1]].setAttribute('src', 'images/goose2.png')
  }
  else if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match')
    cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
    cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png')
    cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
    cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
  }
  else {
    cards[optionOneId].setAttribute('src', 'images/goose2.png')
    cards[optionTwoId].setAttribute('src', 'images/goose2.png')
    alert('Sorry try again')
  }
  cardsChosen = []
  cardsChosenIds = []
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.innerHTML = 'Congratulations! You found them all'
  }
}

function flipCard() {
  const cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500)
  }
}

createBoard()