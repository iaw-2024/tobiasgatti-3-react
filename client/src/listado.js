import React, { useState, useEffect } from 'react';

function ListadoTareas() {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/datos')
            .then(res => res.json())
            .then(data => {
                setTareas(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <ul>
                {tareas.map(tarea => (
                    <li key={tarea.id}>{tarea.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListadoTareas;
