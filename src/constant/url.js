import Utils from '../util/utils';
let env = Utils.getEnv();

let userHostname, activityHostname,PokemonGoHostName,configHostname,toLogin,couponHostname;
if(env == 'production'){
    userHostname = '//user.api.ofo.com';      //线上域名-流量钱包
}else{
    userHostname = '//qatest.api.ofo.com';   //测试环境-流量钱包
}

export const config = configHostname + '/ofo/Api/config';       //获取用户信息
export const user = userHostname + '/ofo/Api/v4/info/user';       //获取用户信息
export const wallet = userHostname + '/ofo/Api/v4/info/wallet';   //钱包信息


