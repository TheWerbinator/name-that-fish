import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ScoreBoard from './components/ScoreBoard';
import GameBoard from './components/GameBoard';

function App() {
  const initFishes = [
    {
      name: 'trout',
      url: 'https://e7.pngegg.com/pngimages/939/600/png-clipart-rainbow-trout-largemouth-bass-cutthroat-trout-fly-fishing-fishing-seafood-fish-products.png'
    },
    {
      name: 'salmon',
      url: 'https://banner2.cleanpng.com/20180509/ptw/kisspng-atlantic-salmon-fish-smoked-salmon-salmonids-5af3520d8077e7.9592797115258956935262.jpg'
    },
    {
      name: 'tuna',
      url: 'https://e7.pngegg.com/pngimages/1000/364/png-clipart-albacore-bigeye-tuna-pacific-bluefin-tuna-atlantic-bluefin-tuna-yellowfin-tuna-fish-seafood-animals.png'
    },
    {
      name: 'sardine',
      url: 'https://toppng.com/uploads/preview/sardine-png-sardine-fish-png-download-sardine-images-11557064339vjeu5krsvo.png'
    },
  ]
  const [fish, setFish] = useState(initFishes);
  const [incrementCorrect, setIncrementCorrect] = useState(0);
  const [incrementIncorrect, setIncrementIncorrect] = useState(0);

  return (
    <div className="App">
      <h1>Guess That Fish!!!</h1>
      <ScoreBoard 
        correctCount={incrementCorrect} 
        incorrectCount={incrementIncorrect}
        fish={fish} />
      <GameBoard 
        correctCount={incrementCorrect} 
        incorrectCount={incrementIncorrect} 
        setCorrectCount={setIncrementCorrect}
        setIncorrectCount={setIncrementIncorrect}
        fish={fish}
        setFish={setFish} />
    </div>
  )
}

export default App;