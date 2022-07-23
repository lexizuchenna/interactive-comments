

import image from '../assets/images/avatars/image-juliusomo.png'

function Textbox({formData, setFormData}) {
  

  const handleForm = (e) => {
    setFormData(e.target.value)
  }
  return (
    <div className='card flex textbox'>
        <div className="user-image-container">
            <img src={image} alt="" />
        </div>
        <div className="textarea">
            <textarea placeholder='Add a comment...' name="" value={formData} onChange={handleForm}></textarea>
        </div>
        <button>
            SEND
        </button>
    </div>
  )
}

export default Textbox