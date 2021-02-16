import axios from 'axios';

const keyAccess = "IrFVzUKjq4d7f6E5V9jgApkWUmYyoJLhPIyWZQ-q-uc";
//const secretAccess = 'ugJdkhBGDkF7n9C5sd_iSnY_6WPCboRCX6zZQ6OMwsQ';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${keyAccess}`,
      },
  });