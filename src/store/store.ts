// import { InjectionKey } from 'vue'
// import { createStore, Store } from 'vuex'
// import {DUser} from "@/DictType/DUser";
//
//
// // 为 store state 声明类型
// export interface State {
//       token:string,
//       user: DUser | null,
// }
//
// // 定义 injection key
// export const key: InjectionKey<Store<State>> = Symbol()
//
// export const store = createStore<State>({
//       //数据，相当于data
//       state: {
//             token: '',
//             user: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!) : null
//       },
//       //里面定义方法，操作state方发
//       mutations:{
//              savaUser(state ,u : DUser){
//                    store.state.user = u
//             },
//             logout(state){
//                    store.state.user = null
//             }
//       },
//       // 操作异步操作mutation
//       actions:{
//
//       }
// })

import { createPinia } from 'pinia';
import useUserStore from './modules/user';

const pinia = createPinia();

export { useUserStore };
export default pinia;

