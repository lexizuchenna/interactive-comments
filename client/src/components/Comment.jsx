

import minus from '../assets/images/icon-minus.svg'
import plus from '../assets/images/icon-plus.svg'
import reply from '../assets/images/icon-reply.svg'
import deleteIcon from '../assets/images/icon-delete.svg'
import edit from '../assets/images/icon-edit.svg'

function Comment({userScore, userName, userImage,createdAt,userComment, setModalState, setFormData, value}) {

  const handleForm = (e) => {
    
    setFormData(e.target.value)
  }

  const handleReply = () => {
    
  }
  
  
  const data = {
    "currentUser": {
      "image": { 
        "png": "../assets/images/avatars/image-juliusomo.png",
        "webp": "./images/avatars/image-juliusomo.webp"
      },
      "username": "juliusomo"
    },
    "comments": [
      {
        "id": 1,
        "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        "createdAt": "1 month ago",
        "score": 12,
        "user": {
          "image": { 
            "png": "../assets/images/avatars/image-amyrobson.png",
            "webp": "./images/avatars/image-amyrobson.webp"
          },
          "username": "amyrobson"
        },
        "replies": []
      },
      {
        "id": 2,
        "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        "createdAt": "2 weeks ago",
        "score": 5,
        "user": {
          "image": { 
            "png": "../assets/images/avatars/image-maxblagun.png",
            "webp": "./images/avatars/image-maxblagun.webp"
          },
          "username": "maxblagun"
        },
        "replies": [
          {
            "id": 3,
            "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            "createdAt": "1 week ago",
            "score": 4,
            "replyingTo": "maxblagun",
            "user": {
              "image": { 
                "png": "./images/avatars/image-ramsesmiron.png",
                "webp": "./images/avatars/image-ramsesmiron.webp"
              },
              "username": "ramsesmiron"
            }
          },
          {
            "id": 4,
            "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            "createdAt": "2 days ago",
            "score": 2,
            "replyingTo": "ramsesmiron",
            "user": {
              "image": { 
                "png": "./images/avatars/image-juliusomo.png",
                "webp": "./images/avatars/image-juliusomo.webp"
              },
              "username": "juliusomo"
            }
          }
        ]
      }
    ]
  }

  


  
  return (
    <div className='card flex'>
        <div className="score flex">
          <div className="svg-container">
            <img src={minus} alt="" />
          </div>
          <p className='number'>{userScore}</p>
          <div className="svg-container">
            <img src={plus} alt="" />
          </div>
        </div>
        <div className="main-content">
          <div className="content-heading flex">
            <div className="user flex">
              <div className="user-image-container">
                <img src={userImage} alt="" />
              </div>
              <h4 className="username">{userName}</h4>
              <p className="date"> {createdAt} </p>
            </div>
            <div className="actions flex">
              {userName === 'juliusomo' ? (
                <>
                  <div className="action">
                    <img src={deleteIcon} alt="" />
                    <button onClick={() => {setModalState(false)}} className='delete btn-link'>Delete</button>
                  </div>
                  <div className="action">
                    <img src={edit} alt="" />
                    <button onClick={handleForm} value={value} className='btn-link'>Edit</button>
                  </div>
                </>
              ) : (
                <div className="action">
                  <img src={reply} alt="" />
                  <button onClick={handleReply} className='btn-link'>Reply</button>
                </div>
              )}
              
              
            </div>
          </div>
          <div className="content-body">
            <p className="p-comment">{userComment}</p>
          </div>
        </div>
    </div>
  )
}

export default Comment