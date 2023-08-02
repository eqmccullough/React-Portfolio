import evBrisk from './assets/images/evBrisk.jpeg';


export default function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <img class="col-sm-1" src={evBrisk} alt="Picture of Evan McCullough" />

      <p>
        My name is Evan McCullough, I currently work as a tennis coach and personal trainer. However, I was educated and worked as a mechanical engineer. Now I am looking to make a change and enter the tech industry.
      </p>
    </div>
  );
}
