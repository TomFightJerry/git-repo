var array = [10,20,30,40,50];

//原型本身
// array.forEach(
//     function (value,index,arr) {
//         console.log(value,index,arr);
//     }
// )

// 添加原型
Array.prototype.myForEach = function (callback,thisArg) {
    //判断类型是否为函数
    if (typeof callback !== "function"){
        throw new TypeError(callback + "is not a function");
    }
    if (Object.prototype.hasOwnProperty.call(this,i)){
        callback(this[i],i,this);
    }
}

array.myForEach(function (value,index,arr) {
    console.log(value);
    console.log(index);
    console.log(arr);
})

