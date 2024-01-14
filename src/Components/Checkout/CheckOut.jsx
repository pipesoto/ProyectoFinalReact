import { useState } from "react"
import { useCartContext } from "../Context/CartContext"
import {getFirestore, collection, addDoc, updateDoc, doc, getDoc} from 'firebase/firestore';

export const CheckOut = () =>{
      const [nombre, setNombre] = useState('');
      const [apellido, setApellido] = useState('');
      const [telefono, setTelefono] = useState('');
      const [email, setEmail] = useState('');
      const [emailConfirmacion, setEmailConfirmacion] = useState('');
      const [error, setError] = useState('');
      const [ordenId, setOrdenId] = useState('');
      const [mensaje, setMensaje] = useState('');

     const {cart, totalPrice, removeProduct} = useCartContext();

     const manejadorFormulario = (event) =>{
      event.preventDefault();
     

     if(!nombre || !apellido || !telefono || !email ||!emailConfirmacion ){
      setError('Por favor complete todos los campos requeridos');
      return;
     }

     if( email !== emailConfirmacion){
      setError('Los email no coinciden');
      return;
     }


     const total = totalPrice();
     const orden ={
      items: cart.map((producto)=>({
        id: producto.id,
        nombre: producto.title,
        cantidad: producto.quantity,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
     };
     Promise.all(
      orden.items.map(async (productoOrden)=>{
             const db = getFirestore();
             const productoRef = doc(db, 'products', productoOrden.id);

             const productoDoc = await getDoc(productoRef);
             const stockActual = productoDoc.data().stock;

             await updateDoc( productoRef, {
              stock: stockActual - productoOrden.cantidad,
             });
      })
     )
     .then(()=>{
       const db = getFirestore();
       addDoc(collection(db, 'orders'), orden)
       .then((docRef)=>{
        setOrdenId(docRef.id);
        removeProduct();
       })
      .catch((error)=>{
        console.log('No se pudo crear la orden', error);
        setError('Error en la orden');
      });
     })
     .catch((error)=>{
      console.log('No se puede actualizar el stock', error);
      setError('No se actualizo el stock');
     });    
    
     setNombre('');
     setApellido('');
     setTelefono('');
     setEmail('');
     setEmailConfirmacion('');
     setMensaje('');
    
};
  return(
        <div className="ccontainer d-flex align-items-center justify-content-center vh-100">
           <div className="card p-4"  style={{ backgroundColor: '#DAA9CD' }}>
          <h2 className="text-center mb-4"> Complete el formulario para confirmar la compra </h2>
           <form onSubmit={manejadorFormulario}>
           
            {cart.map((producto)=>(
              <div key={producto.id} className="mb-3">
                <p>{''} {producto.nombre} {producto.cantidad}</p>
                <p>{producto.precio}</p>
              </div>
            ))}

          <div className="form-group mb-3">
          
             <input className="form-control" id="nombre" type="text"  placeholder="Ingresa tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}
             />
          </div>

          <div className="form-group mb-3">
           
             <input className="form-control" id="apellido" placeholder="Ingresa tu apellido"  type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}
             />
          </div>

          <div className="form-group mb-3">
           
             <input className="form-control" id="telefono" type="number" placeholder="Ingresa tu télefono" value={telefono} onChange={(e) => setTelefono(e.target.value)}
             />
          </div>

         
          <div className="form-group mb-3">
             <input className="form-control" id="correo" type="email" placeholder="Ingresa tu correo" value={email} onChange={(e) => setEmail(e.target.value)}
             />
          </div>

          <div className="form-group mb-3">
             <input className="form-control" id="Validacorreo" type="email" placeholder="Confirma tu correo" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)}
             />
          </div>


          {error && <p className="text-danger">{error}</p>}
          {ordenId && (
            <p className="text-success"> ¡Gracias por tu compra ! Tu numero de seguimiento es: <br/> {''} {ordenId} {''} <br/></p>
          )}
           <div className="form-group  text-center mt-3">
            <button type="submit" className="btn btn-primary"> Enviar </button>
           </div>
          </form>
        </div>
        </div>
     );
    }