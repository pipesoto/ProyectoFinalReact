import {useState,useEffect, Component} from "react";
import { useParams } from "react-router-dom";
import ItemDetail  from "../ItemDetail/ItemDetail";
import productos  from '../Json/productos.json';


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams();

    useEffect(()=>{
    
                const promesa = new Promise((resolve) =>{
                    setTimeout(()=>{
                        resolve(productos.find(item =>item.id === parseInt(id)))
                    }, 2000);
                });
                promesa.then((data)=>{
                    setItem(data)
                })
            
    },[id])

    return (

        <div className="container">
            <div className="row">
                <ItemDetail item={item}/>
            </div>
            </div>


    )


}
export default ItemDetailContainer