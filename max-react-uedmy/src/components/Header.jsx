
import reactImg from '../assets/react-core-concepts.png';
export default function Header() {
    const description = ["Awesome", "Good", 'Core'];
    function getRandomVal(max) {
      return Math.floor(Math.random() * (max + 1));
    }
    console.log(getRandomVal(2));  //42 
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description[getRandomVal(2)]} Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
  }
  