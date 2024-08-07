import Post from '@models/Post';
import InstagramApiInstance from '../InstagramInstance';
import InstagramProvider from './provider';

class InstagramService {
  static getPosts = async (): Promise<Post[]> =>
    InstagramProvider.get(InstagramApiInstance.posts);
}

export default InstagramService;
