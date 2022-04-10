import React from "react";
import ButtonCart from "./ButtonCart";
import Table from "./Table";

const Modal = () =>{

    return(
        <>
        <ButtonCart />

         <div className="modal fade" id="CartModal" tabIndex="-1" aria-labelledby="CartModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="CartModalLabel">Carrinho de Compras</h5>
                </div>

                <div className="modal-body table-responsive">
                   <Table />
                </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}

export default Modal;