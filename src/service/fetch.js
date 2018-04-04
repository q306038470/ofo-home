// import axios from 'axios'
// //参数对象
// let _param = {};

// //返回值
// axios.interceptors.response.use((res) =>{
//     return res;
// }, (error) => {
//     console.log("服务器出错啦，请您稍后再试");
//     return Promise.reject(error);
// });

// /**
//  * 统一请求接口
//  * @param {*} url 请求的接口路径
//  * @param {*} params 请求的参数，参数格式以json对象形式
//  * @param {*} flag  true：不需要token和source参数， false：默认需要token和source参数
//  */
// export function fetch(url, params, flag) {
//   console.log(url)
//     let formData = new FormData();
//     if(!flag){
//         formData.append('token', window.getOfoToken());
//         formData.append('source',_param['source']);
//     }
//     for(let key in params){
//         if(key == 'token'){
//             formData.set(key, params[key]);
//         }else if(key == 'source'){
//             formData.set(key, params[key]);
//         }else{
//             formData.append(key, params[key]);
//         }
//     }
//     return new Promise((resolve, reject) => {
//         axios.post(url, formData)
//             .then(response => {
//                 resolve(response.data);
//             }, err => {
//                 reject(err);
//             })
//             .catch((error) => {
//                reject(error)
//             })
//     })
// }

// /**
//  * 统一get请求接口(用于mock数据测试接口)
//  * @param {*} url 请求的接口路径
//  * @param {*} params 请求的参数，参数格式以json对象形式
//  */
// export function get(url, params) {
//     let result = [];
//     Object.keys(params).forEach((item, index) => {
//         result.push(item + '=' + params[item]);
//     });
//     if (url.indexOf('?') == -1) {
//         url = url + "?" + result.join('&');
//     }
//     else {
//         url += result.join('&');
//     }
//     return new Promise((resolve, reject) => {
//         axios.get(url)
//             .then(response => {
//                 resolve(response.data);
//             }, err => {
//                 reject(err);
//             })
//             .catch((error) => {
//                reject(error)
//             })
//     })
// }

// export function axiosConfig(config) {
//     // axios 配置
//     axios.defaults.timeout = 5000;
//     _param['token'] = config['token'];
//     _param['source'] = config['source'];
//     //axios.defaults.baseURL = "//"+config['base_url'];
// }

