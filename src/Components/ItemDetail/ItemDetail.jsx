import React from "react";
import '../ItemDetail/itemDetail.css';


const ItemDetail = ({item}) => {

    return (

        <div className="row detalle">
            
                <div className="col-md-4 offset-md-4">
                <img src={item.imagen} alt={item.nombre} className="img-fluid" />
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
                <p>$ {item.precio}</p>
                <p>cantidad: {item.stock}</p>
                <button className="button">Agregar al carrito</button>

                </div>

               
        </div>


    )


}
export default ItemDetail