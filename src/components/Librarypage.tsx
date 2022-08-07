import { Link } from 'react-router-dom';
import '../styles/index2.css'
export function Librarypages(){
    return(


<div className='libr_list'>
<ul >
<li ><a href='Recently_Played'><i className="fa-solid fa-list-music ">تم تشغيله مؤخرا</i></a></li><br></br>
<li><a href='Followed_Stations'><i className="fa-solid fa-list-dropdown">المحطات المتبعة</i></a></li><br></br>
<li><a href='Podcasts'><i className="fa-solid fa-podcast"></i>البودكاست</a></li><br></br>
</ul>
<ul>
    
<li><a href='#new' className='new'>تصفح المحطات المناسبة لك </a></li><br></br>
<li><a href='#listen' className='station'> بحاجة للمساعدة للعثور على شيء جديد </a></li>
</ul>

<div className='limg'><img src='logoNameb.png'/></div>
</div>
)
}