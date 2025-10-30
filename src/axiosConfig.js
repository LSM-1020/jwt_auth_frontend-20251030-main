import axios from "axios";

const api = axios.create({
  // baseURL: "http://3.39.198.72", //스프링부트 백엔드 기본 url
  baseURL: "http://localhost:8888",
  //EC2 아이피:포트
  // withCredentials: true, //세션 쿠키 전달
});

export default api;
