import { useState } from 'react';

import './App.css';
import Comment from './components/Comment';
import Textbox from './components/Textbox';
import Modal from './components/Modal';
import Reply from './components/Reply'

import image1 from './assets/images/avatars/image-amyrobson.png'
import image2 from './assets/images/avatars/image-maxblagun.png'
import image3 from './assets/images/avatars/image-ramsesmiron.png'
import image4 from './assets/images/avatars/image-juliusomo.png'

function App() {
  const [modalState, setModalState] = useState(true)
  const [formData, setFormData] = useState('')
  
  const data = {
    "currentUser": {
      "image": { 
        "png": "../assets/images/avatars/image-juliusomo.png",
        "webp": image4
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
            "png": image1,
            "webp": "./assets/images/avatars/image-amyrobson.webp"
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
            "png": image2,
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
                "png": image3,
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
                "png": image4,
                "webp": "./images/avatars/image-juliusomo.webp"
              },
              "username": "juliusomo"
            }
          }
        ]
      }
    ]
  }

  // const images = {

  // }
  const users = data.comments
  const replies = users[1].replies
  
  return (
    <>
      <div className='container'>
        {users.map((user) => (
          <Comment key={user.id} userScore={user.score} userImage={user.user.image.png} userName={user.user.username} createdAt={user.createdAt} userComment={user.content} />
        ))}
        <Reply />
        <div className='reply-container'>
          <div className='vertical-line'>
            <div className='replies'>
              {replies.map((reply) => (
                <Comment setFormData={setFormData} setModalState={setModalState} key={reply.id} userScore={reply.score} userImage={reply.user.image.png} userName={reply.user.username} createdAt={reply.createdAt} userComment={reply.content} value={reply.content} />
              ))}
            </div>
          </div>
        </div>
        <Textbox formData={formData} setFormData={setFormData} />
        <Modal modalState={modalState} setModalState={setModalState} />
      </div>
    </>
  );
}

export default App;
