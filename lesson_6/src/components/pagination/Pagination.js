import React from "react";

const Pagination=({handleNext, page, handlePrev})=>{
    
    return (
        <>
               <p onClick={handlePrev}>Prev</p> 
               <p>{page}</p>
               <p onClick={handleNext}>Next</p>
        </>
    )
}
export default Pagination;
