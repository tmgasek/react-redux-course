import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID zAgq5pAfQe6tv5_sL8TcpPX3iFXXZ2Z-hzR3e2zE6o8',
  },
});
