export interface DUser {
    uid : string
    name: string;
    age: number;
    password: string;
    avatar : string;
}

export interface UserPo{
    account : string;
    password : string;
}
declare global {
    interface Window {
        api?: any;
    }
}

