import "./Floatingdiv.css"

const Floatingdiv=({image,txt1,txt2})=>{
   return(
       <div className="floatingdiv">
           <img src={image} alt=""></img>
           <span>
               {txt1}
               <br></br>
               {txt2}
           </span>

       </div>
   )
}

export default Floatingdiv;