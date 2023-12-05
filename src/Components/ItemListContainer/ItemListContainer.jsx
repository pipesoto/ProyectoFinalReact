import {useState,useEffect, Component} from "react";
import { useParams } from "react-router-dom";
import ItemList from  '../ItemList/ItemList';
import '../../styles/styles.css';
import productos  from '../Json/productos.json';

const ItemListContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams();

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const data = await new Promise((resolve) =>{
                    setTimeout(()=>{
                        resolve(id ? productos.filter(item =>item.categoria ===id) : productos)
                    }, 2000);
                });
            
                setItem(data)
            
        }catch(error){
            console.log('Error:',error)
        }
    };
    fetchData();

    },[id])

    return (
        <div className="containerPrincipal">
            <div className="row">
                <ItemList item={item}/>
            </div>
            </div>
          

    )


}
export default ItemListContainer