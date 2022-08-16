// 算法学习 - TF * IDF
// 做个无匹配开关 ok
// 重复点击监测数据清空 ok
// 修复了分隔符太常见的问题 ok
// 设置去重不去重开关 ok
// 设置count ok
// 分词与词频
// 没匹配到的关键词汇总
// 去除干扰项
// 查找相关词

// *** 1.根据已知数组的长度初始化一个新的二维数组 ***
// pram : arr 是以一个数组的长度作为这个初始长度
// output : [] -> [[],[],[]...]
function init2DArray( arr ){
  var newarr = [];
  for( var i = 0; i < arr.length; i++ ){
    newarr[i] = new Array();
  }
  return newarr;
}

// *** 2. 初始化一个规定长度的数组
// pram1 : arr 貌似有点废
// pram2 : len 数组长度
// output : [ ele_0, ele_1, .. , ele_(len-1) ]
function initEmptyArray( arr, len ){
  for( var i = 0; i < len; i++ ){
    arr[i] = "";
  }
  return arr;
}
 
// 3. 初始化一个 arrObj, 指定keys [ {keys[0],...keys[n]}, {...}, {...}, ... ]
// arr 掌管 长度
// keys 掌管 键名列表
function initArrObj( arr, keys ){
	//console.log("initArrObj - Test");
	//console.log("arr: ",arr);
	//console.log("keys: ",keys);
	// 要注意 arr 如果没有长度，以下不会执行...
	for( var i = 0; i < arr.length; i++ ){
    	arr[i] = {};
    	for( var j = 0; j < keys.length; j++ ){
    		//console.log("arr[i]: ",arr[i]);
    		//console.log("keys[i]: ",keys[j]);
    		arr[i][keys[j]] = "";
    	}
  	}
  	//console.log("arr: ",arr);
	return arr;
}

function initNewArrObj( arr, keys ){
  var newArr = [];
  for( var i = 0; i < arr.length; i++ ){
      newArr[i] = {};
      for( var j = 0; j < keys.length; j++ ){
        newArr[i][keys[j]] = "";
      }
    }
  return newArr;
}


// 4.把要文本分析的词(tosearch)根据关键词(keywords)分类，变成一个新的二维数组
// tosearch - array, 要分类的数组
// keywords - array, 关键词
// new2dArray - 2d array, 返回存储的结果, 按照关键词的index分类后的二维数组/0
// DelRepeatSet - 打开或关闭是否重复匹配, true／1 代表删除重复(去重)，false 不删除重复(不去重)
function classify( tosearch, keywords, new2dArray, DelRepeatSet ){
  for(var i = 0; i < tosearch.length; i++){
    for(var j = 0; j < keywords.length; j++){
      // 如果匹配上了
      if( tosearch[i].indexOf(keywords[j]) != -1 ){
          //console.log(tosearch[i], '包含', keywords[j]);
          new2dArray[j].push(tosearch[i]);
          // break使得 tosearch 找到 先匹配的 keyword 就会跳过与其他 keyword 的匹配
          if( DelRepeatSet ){ break; }
      }
    }
  }
  return new2dArray;
}


// 5. 未分类汇总
function notClassifiedArr( tosearch, keywords ){
  var newArray = [];
  // 1. 匹配后删掉
  for(var i = 0; i < tosearch.length; i++){
    for(var j = 0; j < keywords.length; j++){
      // 如果匹配上了,跳过
      if( tosearch[i].indexOf(keywords[j]) != -1 ){
        //console.log(tosearch[i], '包含', keywords[j]);
        delete tosearch[i];
        break;
      }
    }
  }
  // 2. 把删掉的词去掉，重组
  for(var i = 0; i < tosearch.length; i++){
    if( typeof(tosearch[i]) != 'undefined' ){
      newArray.push(tosearch[i]);
    }
  }
  //console.log(newArray);
  return newArray;
}


// 一维数组转化为字符串
function arrayToString( arr, seperator ){
  var str = '';
  for( var i = 0; i < arr.length; i++ ){
    if( i == (arr.length - 1) ){ seperator = ''; }
    str += arr[i] + seperator;
  }
  return str;
}


// 字符串转化为一维数组
function stringToArry( str, seperator ){
  var arr = [];
  // 空字符串会被 split 切割出一个空元素，所以必须不是空字符串
  if( str != '' ){
    arr = str.split(seperator);
  }
  return arr;
}


// 清空数组 还未测试
function emptyArr( arr ){
  arr.length = 0;
  return arr;
}


// 排序
function bubbleSort(arr){
    for(var r=1;r<arr.length;r++){
        for(var i=0;i<arr.length-1;i++){
            if(arr[i]<arr[i+1]){    //如果想实现从小到大，把小于号改成大于号
                arr[i]+=arr[i+1];
                arr[i+1]=arr[i]-arr[i+1];
                arr[i]-=arr[i+1];
            }
        }
    }
    return arr;
}


// 排序 arrObj
function bubbleSortArrObj( arrObj ){
  // arrA = [ { keyword: "x", count: 1 }, {...}, ... ]

  console.log(arrObj);

  // 1. 复制一个空arrObj承载最后结果
  var newArrObj = initNewArrObj( arrObj, keys ); // keys 是全局变量
   
  // 2. count 排序 存入一个数组 arrC [big -> small]
  var array1 = [];
  for( var i = 0; i < arrObj.length; i++ ){
    array1.push( Number(arrObj[i].count) );
  }
  // console.log(array1);
  var array2 = bubbleSort(array1);
  console.log(array2);

  // 3. arrB[0] = arrC[0]
  for( var j = 0; j < array2.length; j++ ){
    for( var k = 0; k < arrObj.length; k++ ){
      if( array2[j] == Number(arrObj[k].count) ){
        newArrObj[j].count = arrObj[k].count;
        newArrObj[j].keyword = arrObj[k].keyword;
        arrObj[k].count = ""; // 被赋值后清除
        break; // 被比对后可跳过比对下一个，以免重复的count被重复比对
      }
    }
  }

  // 4. cut array2 and newArrObj length
  // array = [ 3, 2, 1, 0, 0, 0 ] length = 6, l = 2, newlength = l+1
  for( var l = 0; l < array2.length; l++){
    if( array2[l] == 0 ){
      array2.length = l;
      // console.log(l);
      // console.log(array2.length);
      break;
    }
  }
  newArrObj.length = array2.length;
  console.log(newArrObj);

  return newArrObj;
}






