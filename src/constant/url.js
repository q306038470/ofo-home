import Utils from '../util/utils';
let env = Utils.getEnv();

let hostname;
if(env == 'production'){
    hostname = ' https://b2b.api.ofo.com';
}else{
    hostname = '//qatest.api.ofo.com';
}

export const website = hostname + '/outter/website/commit'; 


