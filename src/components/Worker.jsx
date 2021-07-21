import React from 'react';
import {auth} from "../firebase"
import {withRouter} from "react-router-dom"
// import { Card } from 'react-bootstrap';
import Firestore from './Firestore';

const Worker = (props) => {
  const[user, setUser] = React.useState(null)

    React.useEffect(() => {
            if(auth.currentUser){
              console.log("existe un usuario")
              setUser(auth.currentUser)
            } else {
              console.log("no existe un usuario")
              props.history.push("/login")
            }
    }, [props.history])
  return (
    <div className="container-workers">
      <div className="div-lateral"></div>
      <div className="workers-bar">
      <div className= "logo"></div>
      <h1>Visualiza tus herramientas, añade más y solicita validación.</h1>
      </div>
      <div className = "workers-input">
      
         {
           user && (
          <Firestore user={user}/>
        )
      }
      </div>

      
      {/* <div className="lateral-menu">   */}
        {/* <img src="https://i.ibb.co/7vpVzj3/ada-lovelace.png" alt="menu-options" /> */}
      <div className= "tool-container">
      {/* <img src="https://i.ibb.co/0FzBGQ7/javascript-skills.png" alt="tools-options" /> */}
      <div className="adding-tools">
        {/* <Card className="text-center" style={{ width: '21rem' }}>
          <Card.Header className="title-tools">AÑADIR HERRAMIENTAS</Card.Header>
          <Card.Body className="body-tools" style={{ height: '42rem' }}>
            <Card.Title>Nombre Herramienta:</Card.Title> 
              <select className="float-center" style={{ width: '16rem' }}>
                <option value="0" selected="selected" disabled>Seleccionar</option>
                <option value="1">React JS</option>
                <option value="2">Angular</option>
                <option value="3">Vue JS</option>
                <option value="4">Ionic React</option>
                <option value="5">Ionic Angular</option>
                <option value="6">iOS</option>
                <option value="7">Android</option>
                <option value="8">Xamarin</option>
                <option value="9">Adobe</option>
                <option value="10">Wordpress</option>
              </select>
            <Card.Title>Nivel:</Card.Title> 
              <select className="float-center" style={{ width: '16rem' }}>
                  <option value="0" selected="selected" disabled>Seleccionar</option>
                  <option value="1">Nulo</option>
                  <option value="2">Básico</option>
                  <option value="3">Regular</option>
                  <option value="4">Bueno</option>
                  <option value="5">Excelente</option>
              </select>
            <Card.Title>Líder Técnico:</Card.Title> 
              <input style={{ width: '16rem' }}></input>
            <Card.Title>Fecha Ingreso:</Card.Title> 
              <input type="date" style={{ width: '16rem' }}></input>
            <Card.Title>Añadir Comentarios</Card.Title> 
              <textarea name="comentarios" rows="5" cols="25"></textarea>
            <Card.Title>Añadir archivos</Card.Title> 
              <form method="post" enctype="multipart/form-data">
                <input type="file" name="adjunto" accept=".pdf,.jpg,.png" multiple />
              </form>
            <button>SOLICITAR VALIDACIÓN</button>
          </Card.Body>

        </Card> */}
        
      </div>
      </div>
      </div>
    // </div>
  );
}

export default withRouter(Worker)


