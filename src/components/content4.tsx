import {  FiShare } from "react-icons/fi";
import { AiOutlineHeart,AiOutlineLink} from 'react-icons/ai';
import {BsPlay} from 'react-icons/bs';
import { useState } from "react";
import {BiCommentAdd} from 'react-icons/bi';
export function Contentone3() {

  const[counter,setCounter]=useState(0);
  const[play,setPlay]=useState(0);
  const [comment,setComment]=useState();
  
  
  function pressme(){
    setCounter(counter+1);
  }
  
  function playy(){
   setPlay(play+1);
   
  
  }
  
  function add (){
    const comments:any=prompt('أدخل تعليقك هنا  ')
    setComment(comments)
    
  }
  
  
  

    return (

 <div className="audio-start">
            
{/* the big flex */}
<div className="audiuo-start-header">

<div> <h1> وسق </h1>
< FiShare size={20} />
<button className="btn-content"type="submit">إبدأ الإستماع </button>
<h5>هذا الليل اذا أقبل آوى كل شيئ الى مأواه </h5>
<h3>:معلومات</h3>
<h3>تاريخ أول حلقة:14 مايو, 2022</h3>

</div>
            <div className="card1">
                
            
               <img src="/w1.jpg" alt="" className="contant-image" /> 

         </div>
    
</div>
{/* ********************************* */}

<div className="content-title">
<h2>الحلقات</h2></div>


<div className="sound">

<div className="sound-border">
<div><h3>ولنا في الخيال حياة | بودكاست وسق</h3></div> 

<div>
<audio onPlay={playy} controls>
  <source src="/ep6.mp3" type="audio/mpeg"/>
  Your browser does not support the audio element.
</audio>
</div>
<div className='sound-border-2'>
<div className="btn-content-2" onClick={pressme}> < AiOutlineHeart size={20} />{counter}</div>  
 <div  > < BsPlay size={20} />{play} </div>
<button className="btn-content-one"type="submit"> <AiOutlineLink size={10} /> Link</button>
</div>
<div onClick={add}>  <BiCommentAdd size={10} /> أضف تعليق</div>  {comment} 
</div>

</div>
</div>

)}