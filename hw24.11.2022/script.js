// 1. Даны два целых числа x и n, напишите функцию для вычисления x^n
// решение 1 - рекурсивно O(n)
// решение 2 - улучшить решение 1 до O(lon n)

console.log(power(2,1));
console.log(power(2,2));
console.log(power(2,3));






function power(x, n) {
    if(n === 0) {
        return 1;
    }
    let result = x;

    for (let i = 1; i < n; i++){
        result *= x;
    }
    return result;
}

function powerRec(x, n) {
    if(n===0) {
        return 1;
    }
    return x * powerRec(x, n-1);
}

function powerRecImproved(x,n) {
    if (n === 0) {
        return 1;
    }

    // 1. Получить значение, равное x в степени n / 2
    // 2. Округлить полученное значение вниз до целого
    // 3. Выполнить проверку n на четность
    // 3.1. Если n четное, возвести полученное число в квадрат
    // 3.2. В противном случае возвести в квадрат и умножить на x


    let half = powerRecImproved(x, Math.floor(n / 2));
    if (n % 2 == 0){
        return half * half;

    }else{
        return half * half * x;
    }

}