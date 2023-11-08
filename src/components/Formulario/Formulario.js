import { useState } from "react"
import "../Formulario/assest/formulario.css"



const Formulario = ({ onConfirm }) => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('')
    const [dni, setDni] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            nombre, telefono, dni, email
        }
        onConfirm(userData)
    }

    return (
        <div className="formulario">
            <form onSubmit={handleConfirm} className="form">
                <div className="mb-3">                
                    <input className="form-control" type="text" placeholder="Nombre" aria-label="default input example" value={nombre} onChange={({ target }) => setNombre(target.value)} />                
                </div>
                <div className="mb-3">                
                    <input className="form-control" type="text" placeholder="Telefono" aria-label="default input example" value={telefono} onChange={({ target }) => setTelefono(target.value)} />
                </div>
                <div className="mb-3">                
                    <input className="form-control" type="text" placeholder="DNI" aria-label="default input example" value={dni} onChange={({ target }) => setDni(target.value)} />
                </div>
                <div className="mb-3">                    
                    <input type="email" className="form-control" value={email} id="exampleFormControlInput1" placeholder="name@example.com"
                    onChange={({target})=>setEmail(target.value)} />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default Formulario;