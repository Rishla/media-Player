import axios from 'axios';

const commonAPI=async (httpMethod,url,reqbody)=>{
    const reqconfig={
        method:httpMethod,
        url,
        data:reqbody
    }

  return await  axios(reqconfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })

}

export default commonAPI