import { AiOutlineGithub ,AiFillGift } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';


export function Profile() {



    return (
        
        <div id="main-card">
        

  <div className="cover-photo"></div>
  <div className="photo">
      <img className='proimg' src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" />
  </div>
  

  <  button  className="edit"type="submit"  >  Edit < AiFillEdit className ='iconInstagram' size={14}/> </button>
  <br/>
  <div className="content">
       <div className="card-body">

<h1 className="h3"> PROFILE PAGE:</h1>
       {/* <h4 className="profile-text">الاسم كامل *</h4>
        <input className="profile-input" type="text-profile" />
        <h4 className="profile-text">اسم المستخدم  *</h4>
        <input className="profile-input" type="name-profile" />
        <h4 className="profile-text">البريد الإلكتروني * </h4>
        <input className="profile-input" type="email-profile" /> */}

<table>
              <tbody>
                  <tr>
                      <td>الاسم كامل</td>
                      <td>:</td>
                      <td>Latefah Mohammed</td>
                  </tr>
                  <tr>

                  <td>اسم المستخدم</td>
                      <td>:</td>
                      <td>tofee.b</td>
                  </tr>
                  <tr>
                      <td>البريد الإلكتروني</td>
                      <td>:</td>
                      <td>imlatefah@gmail.com</td>
                  </tr>

                  <tr>
                      <td>انضم في<b/></td>
                      <td>:</td>
                      <td>Jul 30, 2022</td>
                  </tr>
                  </tbody>
          </table> 
          {/* <div> Joined on Jul 30, 2022 </div> */}
          </div>

  

       {/* <h3 > tofee.b :اسم المستخدم </h3>
      <h3> Icast_2022@gmail.com : البريد الإلكتروني </h3>
  
      <p> < AiFillGift  className ='iconInstagram' size={24}/> Joined on Jul 31, 2022</p><br />
      <br />  */}
     
  
  </div>
  
</div>

       
    

);}