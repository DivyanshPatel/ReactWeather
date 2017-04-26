function addPromise(a,b){
  return new Promise(function(resolve,reject){
    if (typeof a == 'number' && typeof b =='number'){
    resolve(a+b);
  }else {
      reject('Either of the input are not number');
  }

});

}

addPromise(1,2).then(function(res){
  console.log('promoise success',res);
},function(err) {
  console.log('Promisse error',err);
});

addPromise(1,'2').then(function(res){
  console.log('promoise success',res);
},function(err) {
  console.log('Promisse error',err);
});
