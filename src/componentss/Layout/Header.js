import React from "react";

export function Header() {
    return <header className="header" data-testid="header">
     <nav>
         <div className="logo" > 
         <img src="Mosab's.jpg"/> </div>
         <div className="settings"> 
         <ul>
         <li>+</li>
         <li>+</li> 
         <li>+</li>
         <li>+</li>
         </ul>
         </div>
     </nav>
    </header>
    
}