import MyButton from "./MyButton";

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <img
        src={image}
        alt={title}
        className="card-img"
        onError={(e) => {
          e.target.src =
            "https://cdn.pixabay.com/photo/2017/01/31/21/23/backpack-2029233_1280.png";
        }}
      />
      <h4>{title}</h4>
      <MyButton text="SHOP NOW" />
    </div>
  );
};

export default Card;