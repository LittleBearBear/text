
var dict = ["家乡", "松花", "松花江", "那里", "四季", "四季迷人", "迷人", "花香"];
// 停止词
var stop  = ["的"];
// 待分词的字符串
var words = "我的家乡在松花江边上，那里有四季迷人的花香。";

function splitWords(words) {
	var start = 0, end = words.length - 1, result = [];
	var index = 0;
	while (start != end) {
		index ++;
		console.log( index, ' ---------------------');
		var str = [];
		// 逐个字比对
		for (var i = start; i <= end; i++) {
			var s = words.substring(i, i + 1);
			// 如果是停止词，则跳过
			console.log('words中的: ', s);
			if (stop.indexOf(s)) {
				console.log('碰到停止词: ', stop.indexOf(s) );
				break;
			}
			// 不是停止词，存在str里
			str.push(s);
			console.log("str: ", str);
			// 如果在字典中，则添加到分词结果集
			//console.log(dict,str.join(''));
			if ( dict.indexOf(str.join('')) ) {
				result.push(str.join(''));
				console.log("result: ", result);
			}
		}

		start++;
		console.log(' ---------------------');
	}
	//console.log( result );
	return result;
}
splitWords(words);
// console.log( splitWords(words) );
