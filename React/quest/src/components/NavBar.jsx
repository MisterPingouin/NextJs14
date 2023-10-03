import React from "react";

function NavBar(props) {
    return (
      <div>
        <button onClick={() => props.onButtonClick("previous")}>Précédent</button>
        <button onClick={() => props.onButtonClick("next")}>Suivant</button>
      </div>
    );
  }
  
  export default NavBar;