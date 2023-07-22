import React, { useState } from "react";

const Square = (props) => {
   return (
      <div
         onClick={props.onClick}
         style={{
            height: '100px', width: '100px',
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , backgroundColor: "#e6eced", borderRadius: '5px', boxShadow: '5px 5px #888888'
         }}
         className="squire">
         <h2>{props.value}</h2>
      </div>
   )
}
export default Square;