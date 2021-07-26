import React from 'react';

const LiderEquipo = () => {
  return (
    <div className="leader-main">
      <div className="lider-lateral"></div>
      <div className="leader-bar">
      <div className="logo-leader"></div>
      <h1 className= "lider-title">Hola Eduardo!</h1>
      <h2 className= "lider-subtitle">Hay validanciones pendientes</h2>
      </div>
      
    <div className="adding-tools">
    <div className= "tool-container">
        <div className="developer-container">
        <div className="">
        <div className="card" style={{ width: '21rem' }}>
        <div className="card-header">
        <h2 className="float-center">VALIDAR HERRAMIENTAS</h2>
     </div>
   </div>
   <div className="card-body">
     <h3 className="card-title">Nombre Solicitante:</h3>
     <select className="float-center" style={{ width: '20rem' }}> </select>
     <h5 className="card-title">Nivel:</h5>
     <h5 className="card-title">Líder Técnico</h5>
       <input style={{ width: '20rem' }}></input>
     <h5 className="card-title">Fecha Ingreso:</h5>
       <input type="date" style={{ width: '20rem' }}></input>
     <h5 className="card-title">Añadir Comentarios</h5>
       <textarea name="comentarios" rows="5" cols="25"></textarea>
     <h5 className="card-title">Añadir archivos</h5>
     <button> ENVIAR VALIDACIÓN</button>
    </div>
        </div>
      </div> 
    </div>
  </div>
</div>
  );
}

export default LiderEquipo;

