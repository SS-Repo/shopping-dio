import React from "react";
import Tbody from "./Tbody";
import Thead from "./Thead";

const Table = () => {
    return(
    <>
     <table className="table table-hover">
        <Thead />
        <Tbody />
     </table>
    </>
    )
}

export default Table;