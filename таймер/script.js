// Задание таймера не блокирует дальнейшее выполнение кода
console.log('1. До таймера');
setTimeout(()=> {
    console.log("Таймер на 5000 мс")
}, 3000)
setTimeout(()=> {
    console.log('Таймер на 1000 мс')
}, 500)
console.log('2. После таймера');

console.log('До цикла');
console.time('q');
for(let i = 1; i < 2000000000; i ++) {
    let a = i / i;
}

console.timeEnd('q');

console.log('Консоль после цикла')