function getData(callback) {
    callback('123');
}

getData(n => {
    console.log('callback函数被调用了');
    console.log(n);
});