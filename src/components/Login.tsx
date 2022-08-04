import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

// import './styles/index1.css';


    export function Login() {


        //const [email,setEmail]= useState("");
        //const [password,setpassword]=useState("");
        //const [error,setError]=useState("false");

         //const navigate useNavigate();
         //const dispatch = useAppDispatch();


        //  const handleSubmit = (event: { preventDefault: () => void }) => {
        //     event.preventDefault();
        
        //     if (
        //       email === process.env.REACT_APP_EMAIL &&
        //       password === process.env.REACT_APP_PASSWORD
        //     ) {
        //       dispatch(login());
        //       setError(false);
        //       navigate("/");
        //     } else {
        //       setError(true);
        //     }
        //   };




         

        return (
       
       
    <div id="wrapper">
        <div >
        <div className="imges">
                {/* <div className="header">
                <img src="https://cdn.discordapp.com/attachments/991974904587091968/1004297290237870161/image0.jpg" alt="" />
      
    </div>  */}
        </div>
        </div>
        <div>
      <><div className="main-content">
            <div className="header">
            <img src="https://cdn.discordapp.com/attachments/991974904587091968/1004297290237870161/image0.jpg" alt="" />
           
            </div>
            <br/>
            <div className="l-part">
                
                
                <input type="text" placeholder=" اسم المستخدم" className="input-1" />
                {/* onChange={(e) => setEmail(e.target.value)} */}
                <div className="overlap-text">
                    <input type="password" placeholder="كلمة المرور" className="input-2" />
                    {/* onChange={(event) => setPassword(event.target.value)} */}
                </div>
<br/>
                <div className="check">
               <input type="checkbox" name="checkbox" id="checkbox" />
               <label  className="check-h1" htmlFor="checkbox">تذكرني</label>
           </div>
                
                <input type="button" value="الدخول" className="log-btn" />
                {/* {error && <span className="login__err">Wrong emai or password !</span>} */}
                
    
        <div className="separator">
      <div className="line"></div>
      <p>🎙️</p>
      <div className="line"></div>
    </div>
                  <a  className="check-h1" href="https://www.iheart.com/podcast/">هل فقدت كلمة مرورك؟</a>
            </div>
        </div>
        <div className="sub-content-log ">
                <div className="s-part">
                 ليس لديك حساب؟ <a href="https://www.iheart.com/podcast/"> التسجيل</a>
                </div>
               
            </div></>
            
            
            </div>
            </div>
    
          
    
        );
    }
//   return(<>
//   <div className="lgn-bx"> 
//   <div className="loginbx-container">
//       <div className="login-header">
//       <h1 className="header--text">Welcome to Icast </h1>
//       {/* <p className="parag"><Link id="parag-link" to={"/posts"}>DEV Community</Link>  is a community of 882,551 amazing developers</p> */}
//        {/* <p><a href="0">DEV Community</a> is a community of 883,563 amazing developers</p> */}
//       </div>

//       <form className="inputs">
//           <label htmlFor="email">Email</label>
//           <input type="email" name="email" id="email" />
//           <label htmlFor="password" >Password</label>
//           <input type="text" name="password" id="pass" />
//           <div className="check">
//               <input type="checkbox" name="checkbox" id="checkbox" />
//               <label htmlFor="checkbox">Remember Me</label>
//           </div>
//           <div className="continue-pass">
//               <Link to={"/profile"}><button className="continue"> 
//               Continue
//               </button></Link>
//            <Link to={"/password/new"}>I forgot my password</Link>
//           </div>
//       </form>
//   </div></div>

//   </>
  