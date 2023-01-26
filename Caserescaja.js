import React from 'react'

const Caserescaja = ({Caja}) => {
    console.log(Caja, "si llega el color")
    return (
    <div>
        <p> Tareas realizadas</p>
        < div className="Conteiner"> { 
            Caja.map((item, index)=>(
                <div key={index} style={{ 
                    item}} >

                </div>
            ))
            
         }
         </div>
    </div>
    )
}

export default Caserescaja;
