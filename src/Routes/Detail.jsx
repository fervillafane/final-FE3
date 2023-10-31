import React, {useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(undefined);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDentist(data);
      });
  }, [id]);
  
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      
      <h1>Detail Dentist id </h1>
      {dentist ? (
        <section className="dentist-Information">
            <div style={{ margin: '20' }} className="card">
            <h2><strong>Name:</strong> {dentist.name}</h2>
            <img src={require("../img/doctor.jpg")} alt="Card" width={200}/>
            <h3><strong>Phone:</strong> {dentist.phone}</h3>
            <h3><strong>Website:</strong> {dentist.website}</h3>
            <h3><strong>Email:</strong> {dentist.email}</h3>        
        </div>
        </section>
      ) : null}
      
    </>
      
      
  )
}


export default Detail