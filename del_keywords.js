// 引用方法
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

// 待分类词
var tosearch = [];
// 关键词
var keywords = [];
// 重组后的数组
var newarr = [];
//console.log(tosearch);

// 逐个查找每个tosearch元素是否有完全匹配上keywords
for(var i = 0; i < tosearch.length; i++){
  for(var j = 0; j < x.length; j++){
    // 如果匹配上则删除，换下一个tosearch词
    if( tosearch[i].indexOf(x[j]) != -1 ){
      //console.log(tosearch[i],"不包含",x[j]);
      //keywords.push(tosearch[i]);
      //break;
      //console.log(tosearch[i],"包含",x[j]);
      // tosearch.remove(tosearch[i]);
      delete tosearch[i];
      break;
    }
  }
}


//console.log(tosearch);

// 把删掉的词去掉，重组
for(var i = 0; i < tosearch.length; i++){
  if( typeof(tosearch[i]) != 'undefined' ){
    newarr.push(tosearch[i]);
  }
}

for(var i = 0; i < newarr.length; i++){
  console.log(newarr[i]);
}
