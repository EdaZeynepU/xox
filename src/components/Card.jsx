import PropsType from "prop-types";

const Card = ({ index, handleClick, flippedLst, val }) => {
  return (
    <button
      key={index}
      onClick={() => {
        handleClick(index);
      }}
      className="flip-card"
    >
      <div
        className={`flip-card-inner ${
          flippedLst[index] == "" ? "" : "flipped"
        }`}
      >
        <div className={`flip-card-front `}>
          <img
            src="icons8-wizard-64.png"
            alt="Avatar"
            className="card-logo"
          />
        </div>
        <div className="flip-card-back">
          <span className=" ox-text">{val}</span>
          </div>
      </div>
    </button>
  );
};

Card.propTypes = {
  handleClick: PropsType.func.isRequired,
  flippedLst: PropsType.array.isRequired,
  index: PropsType.number.isRequired,
  val: PropsType.string.isRequired,
};

export default Card;
