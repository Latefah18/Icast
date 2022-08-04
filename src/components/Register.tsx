import { Link } from 'react-router-dom';
export function Register(){

    return(

        <div id="wrapper2">
  <><div className="main-content">
        <div className="header">
        <img src="https://cdn.discordapp.com/attachments/991974904587091968/1004297290237870161/image0.jpg" alt="" />
        {/* <img src="data:image/png;base64,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" alt="" /> */}
        <h5 className='h5' >أدخل بياناتك للتسجيل في الموقع والإستماع إلى أحدث البودكاست ومشاركتها مع أصدقائك
        🎶 </h5>
        </div>

        
        <div className="separator">
  <div className="line"></div>
  <p>🎙️</p>
  <div className="line"></div>
</div>
        <br></br>
        <div className="l-part">
            <input type="text" placeholder="البريد الإلكتروني" className="input-1" />
            <input type="text" placeholder="الاسم كامل" className="input-1" />
            <input type="text" placeholder="اسم المستخدم" className="input-1" />
            <div className="overlap-text">
                <input type="password" placeholder="كلمة المرور" className="input-2" />
            </div>

            
            <input type="button" value="التسجيل " className="sin-btn" />
        </div>
      
    </div>
    <div className="sub-content-register">
    {/* <a href="https://www.iheart.com/podcast/"> */}
            <div className="s-part">
           هل تمتلك حساب ؟  <Link to={"/login"}>  تسجيل الدخول </Link>
            </div>

            </div></>

</div>










    );
}