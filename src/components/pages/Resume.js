import resume from './assets/images/resume1.png';
import resume2 from './assets/images/resume2.png';


export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <img class="col-lg-8" src={resume} alt="Resume" />
      <p></p>
      <img class="col-lg-8" src={resume2} alt="Resume2" />
    </div>
  );
}
