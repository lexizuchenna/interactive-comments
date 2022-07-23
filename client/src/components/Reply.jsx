

import image from '../assets/images/avatars/image-juliusomo.png'

function ReplyMessage({replyData, setReplyData}) {
  
  const handleReply = (e) => {
    setReplyData(e.target.value)
  }
  
  return (
    <div className='card flex textbox'>
        <div className="user-image-container">
            <img src={image} alt="" />
        </div>
        <div className="textarea">
            <textarea placeholder='Add a comment...' name="" value={replyData} onChange={handleReply}></textarea>
        </div>
        <button>
            REPLY
        </button>
    </div>
  )
}

export default ReplyMessage