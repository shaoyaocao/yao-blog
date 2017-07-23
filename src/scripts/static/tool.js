export function logout(){
    localStorage.clear()
    history.go(0)
}
//时间戳转换 精确到秒
export function formatTimestamp2DateInSecond(date){
  if(date===null)return "无记录";
  var date = new Date(date);
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  var D =  (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
  var h = date.getHours() + ':';
  var m = date.getMinutes() + ':';
  var s = date.getSeconds();
  return Y+M+D+h+m+s;
}
//时间戳转换，精确到时
export function formatTimestamp2DateInHour(date){
  date = date*1000;
  if(date===null)return "无记录";
  var date = new Date(date);
  var Y = date.getFullYear() + '年';
  var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '月';
  var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + '日';
  var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + '时';
  return Y+M+D+h;
}
