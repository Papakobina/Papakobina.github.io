import "./card.css";
import "./flip-transition.css";

function Card({onClick}) {
  return (
    <div className="card" >
      <div className="card-back">
        <div className="text">
            <h1>Volta Insight</h1>
            <p>Yes. We're always interested in improving this generator and one of the best ways to do that is to add new and interesting paragraphs to the generator. If you'd like to contribute some random paragraphs, please contact us.</p>
        </div>
        <button className="cardbutton" onClick={onClick}>Back</button>
        </div>
      <div className="card-front">
        <p> Volta Insight</p>
        <button className="cardbutton" onClick={onClick}>Learn more</button>
        </div>
    </div>
  );
}

export default Card;