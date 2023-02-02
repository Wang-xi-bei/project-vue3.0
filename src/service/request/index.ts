import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
class WNRequest {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }
  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res, 'res-11--');
    });
  }
}
export default WNRequest;
