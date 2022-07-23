import React from 'react'

function Modal({modalState, setModalState}) {
    const handleModalClose = () => {
        // modalState={modalState} setModalState={setModalState}
        setModalState(true)
    }
  return (
    <>
        
            <div className={modalState === true ? 'modal-container hide' : 'modal-container'}></div>
            <div className={modalState === true ? 'modal-wrapper flex hide' : 'modal-wrapper flex'}>
                <div className="card modal">
                    <h4 className="modal-heading">Delete comment</h4>
                    <p className="p-comment">Are you sure you want to delete this comment? This will remove the comment and can't be undone</p>
                    <div className="modal-buttons flex">
                        <button onClick={handleModalClose}>NO, CANCEL</button>
                        <button>YES, DELETE</button>
                    </div>
                </div>
            </div>
    </>
    
  )
}

export default Modal