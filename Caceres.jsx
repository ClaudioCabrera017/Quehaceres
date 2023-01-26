import React, {useState} from  'react';

const Caceres = ({Tarea, setTarea}) => {

    const [tarea, settarea] = useState("")
    

    const createtarea = (e) => {
        e.preventDefault();
        const newUser =  {tarea} 
        console.log(newUser);
        setTarea([...Tarea, tarea])
    };
    return (
        <form onSubmit={ createtarea }>
    <div>
        <label>Tareas: </label> 
        <button type="submit" >Add</button>
            <input type="text" onChange={ (e) => settarea(e.target.value) } />
            

    </div>
    </form>
    )
}
export default Caceres;
