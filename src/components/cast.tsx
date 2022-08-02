import { posts } from '../data';
import { Podcast} from './Podcast';

export function Posts() {
	const postsDivs = posts.map((post) => <Podcast post={post} />);

	return (
		
		<div className='cast' id=''>
			{postsDivs}
		</div>
	);
}


