import axios from 'axios'
import axiosJsonp from 'axios-jsonp'

export default class Feacher {
  async feach(zip) {
    let res
    try {
      res = await axios.get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zip}`, {
              adapter: axiosJsonp
            })
    } catch(err) {
      res = "error"
    }
    return res
  }
}
