function get_array_of_digit(){
    let n = Math.round(Math.random()*20+1);
    let my_array = Array.from(Array(n),()=>Math.round(Math.random()*99+1));

    console.log("Массив:");
    console.log(my_array);
    return my_array;
}

function task1()
{
    let my_array = get_array_of_digit();
    let summa = my_array.reduce((summa,value)=>(value%2==0)?summa+Math.sqrt(value):summa,0);
    console.log(`Cумма квадратных корней для всех чётных чисел равна ${summa}`);
}