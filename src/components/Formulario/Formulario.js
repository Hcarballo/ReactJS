import { useState } from "react"



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
            <form onSubmit={handleConfirm} className="Form">
                <label className="label">Nombre
                    <input className="input" type="text" value={nombre} onChange={({ target }) => setNombre(target.value)} />
                </label>
                <label className="label">Telefono
                    <input className="input" type="text" value={telefono} onChange={({ target }) => setTelefono(target.value)} />
                </label>
                <label className="label">DNI
                    <input className="input" type="text" value={dni} onChange={({ target }) => setDni(target.value)} />
                </label>
                <label className="label">Email
                    <input className="input" type="email" value={email} onChange={({ target }) => setEmail(target.value)} />
                </label>
                <div className="label">
                    <button type="submit" className="Button">Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default Formulario;