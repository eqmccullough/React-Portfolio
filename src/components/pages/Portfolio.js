import weather from './assets/images/Denver.png';
import techblog from './assets/images/TechBlog.png';
import FlashDash from './assets/images/FlashDash.png';
import FruitFinder from './assets/images/FruitFinder.png';
import NoteTaker from './assets/images/NoteTaker.png';
import QuizGame from './assets/images/QuizGame.png';
import Budgie from './assets/images/budgie.png';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>

      <p>Budgie Budget App</p>
      <img class="col-md-6" src={Budgie} alt="Budgie App" />
      <p></p>
      <a href="https://budgie-c967e4a5fd01.herokuapp.com/">Application</a>
      <p></p>
      <a href="https://github.com/eqmccullough/cache-money">Github Repo</a>

      <p></p>
      <p>Weather Dashboard</p>
      <img class="col-md-6" src={weather} alt="Weather Dashboard App" />
      <p></p>
      <a href="https://eqmccullough.github.io/Weather-Dashboard/">Application</a>
      <p></p>
      <a href="https://github.com/eqmccullough/Weather-Dashboard">Github Repo</a>

      <p></p>
      <p>Tech Blog</p>
      <img class="col-md-6" src={techblog} alt="Tech Blog App" />
      <p></p>
      <a href="https://techblog12345-eaf5eda88201.herokuapp.com/">Application</a>
      <p></p>
      <a href="https://github.com/eqmccullough/Tech-Blog">Github Repo</a>

      <p></p>
      <p>Flash Dash Project</p>
      <img class="col-md-6" src={FlashDash} alt="Flash Dash App" />
      <p></p>
      <a href="https://ctowns5.github.io/flashDash/">Application</a>
      <p></p>
      <a href="https://github.com/ctowns5/flashDash">Github Repo</a>

      <p></p>
      <p>Fruit Finder Project</p>
      <img class="col-md-6" src={FruitFinder} alt="Fruit Finder App" />
      <p></p>
      <a href="https://fruit-finder-f298ed9223ea.herokuapp.com/">Application</a>
      <p></p>
      <a href="https://github.com/ThePebble01/fruit-finder">Github Repo</a>

      <p></p>
      <p>Note Taker App</p>
      <img class="col-md-6" src={NoteTaker} alt="Note Taker App" />
      <p></p>
      <a href="https://note-taker-eqm-fa69ec4c5602.herokuapp.com/">Application</a>
      <p></p>
      <a href="https://github.com/eqmccullough/Note-Taker">Github Repo</a>

      <p></p>
      <p>Quiz Game App</p>
      <img class="col-md-6" src={QuizGame} alt="Quiz Game App" />
      <p></p>
      <a href="https://eqmccullough.github.io/quiz-game/">Application</a>
      <p></p>
      <a href="https://github.com/eqmccullough/quiz-game">Github Repo</a>



    </div>


  );
}
