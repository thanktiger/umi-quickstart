//引入fetch.js文件
import { fetch } from './fetch' 
//定义获取数据的函数getData(),其中url,type,data对应fetch(config)中的config
export function getData(url,type,data) {
//如果type为空，默认为post方法，也可以自己改成get
    if(type==='')
      type = 'post';
    return fetch({
      url: url,
      method: type,
      data: data,
    })
}