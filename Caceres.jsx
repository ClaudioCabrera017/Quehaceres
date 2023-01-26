import React, {useState} from  'react';

const Caceres = ({Caja, setCaja}) => {

    const [caja, setcaja] = useState("")
    

    const createcaja = (e) => {
        e.preventDefault();
        const newUser =  {caja} 
        console.log("Welcome", newUser);
        setCaja([...Caja, caja])
    };
    return (
        <form onSubmit={ createcaja }>
    <div>
        <label>Tareas: </label> 
        <button type="submit" >Add</button>
            <input type="text" onChange={ (e) => setcaja(e.target.value) } />
            

    </div>
    </form>
    )
}
export default Caceres;
