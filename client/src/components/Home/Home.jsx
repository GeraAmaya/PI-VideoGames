import style from "../Home/Home.module.css";
import React from 'react';
import Navbar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";
import Card from "../Card/Card";

/*import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getVideos,
         getGenres,
         filterVideosByGenre,
         filterVideosbyOrigen,
         orderByName,
         orderByRating,
         cambiarPagina
       } from '../../Redux/actions';*/



const Home = (props) => {
  /*const dispatch = useDispatch();
    const Videos = useSelector((state) => state.videoGames);
    const Genres = useSelector((state) => state.GenresState);
    const retorno = useSelector((state) => state.retorno);
    const pagActual = useSelector((state) => state.paginaActual);
    const jfiltro = useSelector((state) => state.filtroOrigen);
    //declaramos las variables para el paginado
    const [currentPage, setCurrentPage] = useState(pagActual);   //inicializamos la primera pagina en 1
    const videosPerPage = 15; //declaramos 15 videos x pagina
    const indexOfLastVideo = currentPage * videosPerPage;  //declaramos indice del ultimo video
    const indexOfFirtsVideo = indexOfLastVideo - videosPerPage;  //declaramos indice del primer video
    const currentVideos = Videos.slice(indexOfFirtsVideo, indexOfLastVideo); //decalramos videos de la pagina actual
    console.log("DesdeHome:",jfiltro);
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
        dispatch(cambiarPagina(pageNumber));
    }

    useEffect(() => {
        dispatch(getVideos(retorno));
        dispatch(getGenres());
    },[]);

    function handleClick(e) {
        e.preventDefault();
        dispatch(getVideos());
    };

    function handleFilterGenre(e) {
          dispatch(filterVideosByGenre(e.target.value));
          setCurrentPage(1);
    };

    function handleFilterOrigen(e) {
        dispatch(filterVideosbyOrigen(e.target.value));
        setCurrentPage(1);
    };

    function handleOrderByName(e) {
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
    };

    function handleOrderByRating(e) {
        dispatch(orderByRating(e.target.value));
        setCurrentPage(1);
    };
*/




  return (
    <>
    <div className={style.container} >
    <Navbar/>
   

   
    </div>
    </>
  )
}

export default Home;