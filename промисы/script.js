const url1 = 'https://images.wallpaperscraft.ru/image/single/mashina_seryj_mokryj_147750_3840x2160.jpg'
const url2 = 'https://images.wallpaperscraft.ru/image/single/bmw_avtomobil_bamper_191131_3840x2160.jpg'
const url3 = 'https://images.wallpaperscraft.ru/image/single/mitsubishi_lancer_evo_x_tiuning_96277_3840x2400.jpg'

// Промис - специальный объект, содержащий свое состояние,
// которое может принимать одно из трех значений:
// 1. padding - Ожидание
// 2. fulfilling - Выполнено успешно
// 3. rejected - Выполнено неудачно

// ----------------------
// const promise = {
//     state: ['padding', 'fulfilled', 'rejected']
// }
// ----------------------

// Создание промисов

console.log('До promice');
const promise1 = new Promise((resolve, reject) => {
    console.log('Внутри промиса');
});

console.log('После промима');

// Изменение состояния промиса
// При создаии промис получает состояние padding
// Функция передаваемая в конструктор промиса может меть 2 параметра:
// Обычно их называют result и reject
// Эти параметры называются функциями
// Вызывая первую из них (result), мы переводим промис в fullfilled,
// При вызове второй функции (reject) промис перейдет в состояние rejected

console.log('До promice');
const promise2 = new Promise((resolve, reject) => {
    resolve();
});

function delay(ms){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve();
            console.log('resolved')
        }, ms)
    })
}

let promise3 = delay(300);
// Метод then()

promise3.then(()=> {
    console.log(1.1);
})

promise1.then(()=> {
    console.log(2.1);
})

promise2.then(()=> {
    console.log(3.1);
})

// Чейнинг промиса
// Метод then, помещает переденную в него функцию в очередь промиса и возвращает новый промис
// который в свою очередь вернёт новый промис, таким образом мы можем объединить вызовы then
// в цепочки (такой подход называется чейнингом промисов)

promise3
    .then(()=>{console.log(1)} )
    .then(()=>{console.log(2)} )
    .then(()=>{console.log(3)} )

// ---- Последовательная загрузка картинок ----

function loadImage(url){
    return new Promise((resolve)=> {
        const image = document.createElement('img');
        image.height = 200;
        image.src = url;
        document.body.append(image);
        image.addEventListener('load', ()=> {
            resolve();
        })
    })
}


loadImage(url1)

.then(
    ()=>{return loadImage(url2)})
.then(
    ()=>{return loadImage(url3)})
.then(
    ()=>{console.log('Картинки загружены')})