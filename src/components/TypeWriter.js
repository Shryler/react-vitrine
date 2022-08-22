import React from 'react';
import Typewriter from "typewriter-effect";
  
function FTypewriter() {
  return (
    <div className="typewriter">
      <Typewriter
      options={{
        loop:true,
      }}
       onInit={(typewriter)=> {
        
       typewriter
       
       .typeString("Je suis Anthony VOITURON")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Développeur Web/Web mobile")
       .start();
       }}
       />
    </div>
  );
}
  
export default FTypewriter;