import axios from "axios";
import {showLoading,hideLoading} from "./loading";


const request = axios.create({
    baseURL: 'http://localhost:8090',  // 注意！！ 这里是全局统一加上了 '/api' 前缀，也就是说所有接口都会加上'/api'前缀在，页面里面写接口的时候就不要加 '/api'了，否则会出现2个'/api'，类似 '/api/api/user'这样的报错，切记！！！
    timeout: 10000
})

// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
request.interceptors.request.use((config: any ) => {
    // const token = useSelector(state => state.token);
    // console.log(token)
    //如果satoken不为空就带上
    config.headers['authorization'] = localStorage.getItem('token');
    showLoading();
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    // config.headers['token'] = user.token;  // 设置请求头
    // console.log(token)
    if (localStorage.getItem('sa-token') != null){
        config.headers['satoken'] = localStorage.getItem('satoken');
    }
    // if (token != '' ){
    //     config.headers['sa-token'] = token;
    // }

    return config
}, (error: any) => {
    hideLoading()
    return Promise.reject(error)
});

interface Res {
    data: any;
    errorMsg : string;
    success : boolean;
    total : number;
    code: number;
}

// response 拦截器
// 可以在接口响应后统一处理结果
// @ts-ignore
request.interceptors.response.use(
    // @ts-ignore
    (response : res | Promise   )=>{
        hideLoading()
        let res : Res = response.data

        if (res.code == 401){
            location.href = "http://localhost:5173/login"
            return Promise.reject(res.errorMsg);
        }
        if (res.code != 200){
            return res;
        }

        // 如果是返回的文件
        if (response.config.responseType === 'blob') {
            return res
        }
        // 兼容服务端返回的字符串数据
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
        }



        return res;
    }, error => {
        hideLoading()
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)
export default request;

