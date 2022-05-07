import { useEffect, useState } from "react"

const useTshirt=()=>{
   const [tshirts,setTshirt]=useState([]);
//    console.log(tshirts)
   useEffect(()=>{
       fetch('tShirt.json')
       .then(res=>res.json())
       .then(data=>setTshirt(data))
   },[])
   return [tshirts,setTshirt];
}
export default useTshirt;