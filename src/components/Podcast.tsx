
import { IPost } from "../data";



interface PostProps {
	post: IPost;
}

export function Podcast({ post }: PostProps) {
	return (
   
    
    
     
        <div className="card">
        <img src={post.imageUrl}  className="cast-image" alt='jj' />
          <p>{post.title}</p>
        </div>
     



  );}