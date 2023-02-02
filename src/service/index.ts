import WNRequest from './request';
import { BASE_URL, TIMEOUT } from './request/config';

const wyRequest = new WNRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT
});
export default wyRequest;
 