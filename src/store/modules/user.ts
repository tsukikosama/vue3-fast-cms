import { defineStore } from 'pinia'
import {ElNotification} from "element-plus";
import request from "../../utils/request.ts";
import {DUser} from "../../DictType/DUser.ts";




// 定义 state 类型
interface State {
    token: string | null  ,
    user: DUser | null,
}

// 创建 Pinia store
const useUserStore = defineStore('user', {
    state: (): State => ({
        token: localStorage.getItem('token') ? localStorage.getItem('token')  : ' ',
        user: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!) : null
    }),
    actions: {
         login(u: DUser)  {
            this.user = u
        },
        logout() {
            this.user = null
            localStorage.removeItem('userInfo')
        },
        setToken(token : string) {
          this.token =  token
        },
        clearToken(){
             this.token = ''
             localStorage.removeItem('token')
        },
        loginInfo(){
            /**
             * 通过用户的的id 去获取用户信息
             */
            if (this.user != null || this.token  != null){
                request("/getUser?token="+this.token).then((res : any) => {
                    ElNotification.info("查询成功")
                    ElNotification.info(res)
                }).catch((e:any) => {
                    ElNotification.error(e)
                });
            }

        }

    }
})
export default useUserStore
