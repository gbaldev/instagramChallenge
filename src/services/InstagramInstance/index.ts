class InstagramApi {
  base = 'https://662029f13bf790e070af2cd8.mockapi.io/api/v1';
  posts = `${this.base}/posts`;
}

const InstagramApiInstance = new InstagramApi();

export default InstagramApiInstance;
