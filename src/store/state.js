let defaultCity = '杭州'
// 防止用户开启隐身模式或关闭本地存贮，用try catch包裹localstorage操作
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {

}

export default {
  city: defaultCity
}
