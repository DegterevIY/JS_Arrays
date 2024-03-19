function get_array_of_digit(){
    let n = Math.round(Math.random()*20+1);
    let my_array = Array.from(Array(n),()=>Math.round(Math.random()*99+1));

    console.log("Массив:");
    console.log(my_array);
    return my_array;
}

function task1(){
//1.	Вычислить сумму квадратных корней для всех чётных чисел целочисленного массива.
    let my_array = get_array_of_digit();
    let summa = my_array.reduce((summa,value)=>(value%2==0)?summa+Math.sqrt(value):summa,0);
    console.log(`Cумма квадратных корней для всех чётных чисел равна ${summa}`);
}

function task2(){
//2.	Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
    let my_array = get_array_of_digit();
    let summa = my_array.reduce((summa,value)=>(value>0 && value<10)?summa+value:summa,0);
    console.log(`Cумма чисел в интеравле (0..10) равна ${summa}`);
}

function is_all_chet(array){
    return array.every(n=>(n%2==0));
}

function task3(){
//3.	Написать функцию, которая принимает массив любых целых чисел и возвращает истину, 
// если все элементы четные. Если имеется хотя бы один элемент не четный, то false.
    let my_array = get_array_of_digit();
    if (is_all_chet(my_array)) console.log("Все элементы четные");
    else console.log("Не все элементы четные");
}

function krat5(array){
    return array.filter(n=>(n%5==0));
}

function task4(){
//4.	Написать функцию, которая принимает массив любых целых чисел, и возвращает 
//новый массив из элементов переданного массива, кратных пяти. ([1,2,5,12,15,21] вернет [5,15])
    let my_array = get_array_of_digit();
    console.log("Массив элементов, кратных 5:");
    let my_array5 = krat5(my_array);
    console.log(my_array5);
}

function avg_array(array){
    if (array.length==0) return 0.
    return (array.reduce((summa,value)=>summa+value,0)/array.length).toFixed(1);
}

function task5(){
//5.	Написать функцию, которая принимает массив чисел и 
// возвращает среднее арифметическое, (округлить результат до десятых).
    let my_array = get_array_of_digit();
    let avg = avg_array(my_array);
    console.log(`Среднее арифметическое равно: ${avg}`);
}

function replace_first_and_end(array){
    array.push(array.shift());
    return array;
}

function task6(){
//6.	Написать функцию, которая принимает массив чисел и переносит первый элемент массива в конец.
    let my_array = get_array_of_digit();
    my_array = replace_first_and_end(my_array);
    console.log("Массив после преобразования:");
    console.log(my_array);
}

function task7(){
/*7. Дан некоторый массив. Поделите сумму элементов, стоящих на четных позициях, 
на сумму элементов, стоящих на нечетных позициях. Считайте что первая позиция четная 
(номер индекса 0), массив должен заполняться случайными числами и содержать четное число элементов. */
    let my_array = get_array_of_digit();

    let summ_1 = 0, summ_2 = 0;
    for(let i=0;i<my_array.length;i++){
        if (i%2==0) summ_2 += my_array[i];
        else summ_1 += my_array[i];
    }
    if (summ_1==0) console.log("Деление на ноль! Операция не возможна");
    else console.log(`Сумма четных(${summ_2})/Сумма нечетных(${summ_1}) = ${summ_2/summ_1}`);
}

function is_digit(value){
    if ("1234567890".includes(value,0)) return true;
    return false;
}

function add_1(value){
    let str = String(value);
    str = str.split("").map(n=>is_digit(n)?Number(n)+1:n).join("");
    return Number(str);
}

function task8(){
/*8. Запросите у пользователя число и сформируйте на его основе другое число, 
каждая цифра которого больше на единицу. Если попалась цифра 9 она также заменяется на 10. */
    let number
    while (true){
        number = prompt("Введите число:");
        if(!(isNaN(number)||!Boolean(number))) break;
    }

    console.log(`Число до преобразования ${number}`);
    number = add_1(+number);
    console.log(`Число после преобразования ${number}`);
}

function is_http(value){
    let my_array = value.split("://");
    if (my_array.length == 2 && my_array[0] == "http") return true;
    return false;
}

function task9(){
//9.	Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
    let my_array = ["http://String01",
                "String02http://",
                "Strihttp://ng03",
                "http://String04http://String04",
                "Stringhttp://05",
                "String06",
                "http://String07",
                "http:String08",
                "://String09",
                "http://String10"];

    console.log("Массив:");
    console.log(my_array);

    my_array = my_array.filter(n=>is_http(n));
    console.log("Массив после фильтрации:");
    console.log(my_array);
}

function task10(){
/* 10.	Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
let data = [
 {
  1: 11,
  2: 12,
  3: 13,
 },
 {
  1: 21,
  2: 22,
  3: 23,
 },
 {
  1: 24,
  2: 25,
  3: 26,
 },
];
Найдите сумму элементов этой структуры.
 */
    let data = [
                {
                1: 11,
                2: 12,
                3: 13,
                },
                {
                1: 21,
                2: 22,
                3: 23,
                },
                {
                1: 24,
                2: 25,
                3: 26,
                }     
                    ];

    let keys = Array(), values = Array();

    data.forEach(elem=>{
        keys.push(...Object.keys(elem));
        values = [...values, ...Object.values(elem)];
    }
    );

    console.log(`Массив ключей:${keys.toString()}`);
    console.log(`Массив значений:${values.toString()}`);

    let total = 0;
    data.forEach(elem=>{
        Object.keys(elem).forEach(key=>{total +=elem[key]});
    })
    console.log(`Сумма элементов:${total}`);
}


