// 1.初始化二维数组
// rows - array, 你要准备的长度
function init2DArray( rows ){
  var newarr = [];
  for( var i = 0; i < rows.length; i++ ){
    newarr[i] = new Array();
  }
  return newarr;
}

// 2.把tosearch根据keywords分类，变成一个新的二维数组
// tosearch - array, 要分类的数组
// keywords - array, 关键词
// new2DArray - 2d array, 按照关键词的index分类后的二维数组
function classify( tosearch, keywords, new2DArray ){
  for(var i = 0; i < tosearch.length; i++){
    for(var j = 0; j < keywords.length; j++){
      // 如果匹配上了
      if( tosearch[i].indexOf(keywords[j]) != -1 ){
          //console.log(tosearch[i], '包含', keywords[j]);
          new2DArray[j].push(tosearch[i]);
          break;
      }
    }
  }
  return new2DArray;
}

// 一维数组转化为数组
function arrayToString( arr, gap ){
  var str = '';
  for( var i = 0; i < arr.length; i++ ){
    if( i == (arr.length - 1) ){ gap = ''; }
    str += arr[i] + gap;
  }
  return str;
}

function stingToArry( str, gap ){
  var arr = [];
  arr = str.split(gap);
  return arr;
}

// function printResult(){
//   // 打印结果
//   for(var i = 0; i < result.length; i++ ){
//     // console.log(result[i]);
//     console.log(keywords[i],' : ', arrayToString(result[i], ', '));
//   }
// }

// 待分类词
// var tosearch = ['testtest1', 'abdtest1', 'asdfasdfastest2'];
// //console.log(tosearch);
// // 关键词
// var keywords = ['test1','test2'];
// // 定义一个2维数组
// var new2DArray = init2DArray(keywords);
// // console.log(new2DArray);
// // 返回分类后的结果
// var result = classify(tosearch, keywords, new2DArray);
// console.log(result);
//printResult();
