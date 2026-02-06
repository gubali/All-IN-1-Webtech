import imgComponent from "./assets/components.png";
import imgConfig from "./assets/config.png";
import imgjsxUi from "./assets/jsx-ui.png";
import imgReactCore from "./assets/react-core-concepts.png";
import imgStateMng from "./assets/state-mgmt.png";

export const CORE_COCEPT = [
  {
    image: imgComponent,
    title: "React",
    description: "The Core UI building Block!",
    code: `
        function Welcome(){
        return <h1>Hello, World</h1>
        }
        `,
  },
  {
    image: imgConfig,
    title: "React native",
    description: "The Core UI building Block!",
    code: `
        function Welcome2(){
        return <h1>Hello, World</h1>
        }
        `,
  },
  {
    image: imgjsxUi,
    title: "State",
    description: "The Advance UI building Block!",
    code: `
        function Welcome3(){
        return <h1>Hello, World</h1>
        }
        `,
  },
  {
    image: imgReactCore,
    title: "Props",
    description: "The Next UI building Block!",
    code: `
        function Welcome4(){
        return <h1>Hello, World</h1>
        }
        `,
  },
  {
    image: imgStateMng,
    title: "JSX",
    description: "The React library UI building B;lock!",
    code: `
        function Welcome(){
        return <h1>Hello, World</h1>
        }
        `,
  },
];

export const EXAMPLES = {
  components: {
    title: "Components",
    description:
      "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
    code: `
  function Welcome() {
    return <h1>Hello, World!</h1>;
  }`,
  },
  jsx: {
    title: "JSX",
    description:
      "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
    code: `
  <div>
    <h1>Welcome {userName}</h1>
    <p>Time to learn React!</p>
  </div>`,
  },
  props: {
    title: "Props",
    description:
      "Components accept arbitrary inputs called props. They are like function arguments.",
    code: `
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }`,
  },
  state: {
    title: "State",
    description:
      "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
    code: `
  function Counter() {
    const [isVisible, setIsVisible] = useState(false);
  
    function handleClick() {
      setIsVisible(true);
    }
  
    return (
      <div>
        <button onClick={handleClick}>Show Details</button>
        {isVisible && <p>Amazing details!</p>}
      </div>
    );
  }`,
  },
};
