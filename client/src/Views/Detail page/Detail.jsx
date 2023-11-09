import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const [Videogame, setVideogame] = useState({});

  useEffect(() => {
    axios
      .get(`https://deploy-pi-videogame.onrender.com/videogames/${id}`)
      .then(({ data }) => {
        setVideogame(data);
      })
      .catch((error) => {
        alert("Error al obtener los detalles de videogame:", error);
      });
  }, [id]);

  if (!Videogame.id) {
    return <Loader></Loader>;
  }
  return (
    <div className="detailContainer">
      <div className="detail">
        <h1>{Videogame.Nombre}</h1> <span> ID:{Videogame.id}</span>
        <h3 className="h3-text" >{Videogame.Descripcion}</h3>
     <h3 className="h3-text">Lanzamiento: {Videogame.FechaLanzamiento}</h3>
        <h3 className="h3-text">Rating: {Videogame.Rating}</h3>
        <h3 className="h3-text">Genero: {Videogame.Generos}</h3>
        <h3 className="h3-text">Plataformas: {Videogame.Plataformas}</h3>
        <img src={Videogame.Imagen} alt={Videogame.Nombre} />
        <Link to={"/home"}> <img className="img-flecha" src="../../img/flechaAtras.png" alt="" /> </Link>
      </div>
    </div>
  );
};
export default Detail;
