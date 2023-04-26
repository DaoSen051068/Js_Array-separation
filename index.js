/**
 * @param {Object} oldArr
 * @param {Object} num
 * */
const splitArray = (oldArr, num) => {
  // TODO：请补充代码实现功能
  let newArr = oldArr.sort((a,b)=>a-b)
  console.log(newArr)
  let arr = []
  for(let i=0;i<newArr.length;i+=num)
  {arr.push(newArr.slice(i,i+num))}
  return arr;
};
module.exports = splitArray; // 检测需要，请勿删除
