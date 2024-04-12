import React, { useState, useEffect } from 'react';
import './Estilo.css';

function ListadoTareas() {
    const [canciones, setCanciones] = useState([]);

    useEffect(() => {
        fetch('/datos')
            .then(res => res.json())
            .then(data => {
                setCanciones(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className="listado-canciones-container">
             <ul className='listado-canciones'>
                {canciones.map(cancion => (
                <li key={cancion.year} >
                    <strong>Title:</strong> {cancion.title} <br />
                    <strong>Album:</strong> {cancion.album} <br />
                    <strong>Year:</strong> {cancion.year}
                </li>
                ))}
            </ul>
        </div>
    );
}

export default ListadoTareas;
