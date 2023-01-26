import React from 'react'

const Caserescaja = ({Tarea}) => {
    console.log(Tarea, "si llega la Tarea")
    return (
    <div>
        <p> Tareas realizadas</p>
        < div className="Conteiner"> { 
            Tarea.map((item, index)=>(
                <div key={index} style={{ 
                    item}} 
                    //
                    >
               
                </div>
                
            ))
           
         }
         </div>
    </div>
    )
}

export default Caserescaja;
