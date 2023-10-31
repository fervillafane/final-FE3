import { Link } from "react-router-dom";
import { setFavorite, isFav, removeFavorite } from "../Context/localStorage.service";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    setFavorite({ name, username, id });
  };

  const deleteFav = () => {
    removeFavorite(id); 
  };

  const fav = isFav(id);

  return (
    <div className={`card`}>      
      <div>
      <Link to={`/recipe/`+ id}>
        <img src={require("../img/doctor.jpg")} alt="Card" width={200}/>
          <h2>{name}</h2>       
          <h4>{username}</h4>
         </Link>
        <button className="btn-add-fav" onClick={fav ? deleteFav : addFav}> ⭐ </button>
      </div>
    </div>
  );
};

export default Card;