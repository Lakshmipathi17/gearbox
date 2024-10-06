interface Config{
    baseUrl:string;
}

const checkConfig=(server:string):Config |{}=>{
    let config:Config|{}={};

    switch(server){
        case "production":
          config ={
            baseUrl:"https://gearbox-pi.vercel.app",
          };
        break;
        case "local":
            config={
                baseUrl:"http://localhost:8000",
            };
            break;
        default:
            break;
    }
    return config;
};

export const selectServer="local";
export const config = checkConfig(selectServer) as Config;

