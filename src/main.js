console.log('#1. JavaScript homework example file')


/*
 * #1
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */
var i = 0

console.log('Префіксний інкремент:', ++i)
console.log('Постфіксний інкремент:', i++)
console.log('Значення i:', i)
console.log('Префіксний декремент:', --i)
console.log('Постфіксний декремент:', i--)
console.log('Значення i:', i)


/*
 * #2
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, -=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */
var myNum = 10
var myTest = 20

myTest += myNum
console.log('+=', myTest)

myTest -= 10
console.log('-=', myTest)

myTest *= 2
console.log('*=', myTest)

myTest /= myNum
console.log('/=', myTest)

myTest %= 3
console.log('%=', myTest)


/*
 * #3
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */
var myPi = Math.PI // constant Pi → myPi
console.log('myPi:', myPi)

var myRound = Math.round(89.279) // rounded value of 89.279 → myRound
console.log('myRound:', myRound)

var myRandom = Math.random() * 10 // random number between 0..10 (excluding 10) → myRandom
console.log('myRandom:', myRandom)

var myPow = Math.pow(3, 5) // 3 to the 5th power → myPow
console.log('myPow:', myPow)


/*
 * #4
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мила раму, рама мила маму", ключу length встановіть довжину цього рядка.
 */
var strObj = { str: 'Мама мила раму, рама мила маму' }

strObj.length = strObj.str.length
console.log('strObj = ', strObj)


/*
 * #5
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.4).
 * Результат пошуку індексу збережіть у змінній isRamaPos, а перевірку наявності (булеве значення true/false) збережіть у змінній isRama. Виведіть обидва результати у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */
var isRamaPos = strObj.str.indexOf('рама')
var isRama = strObj.str.includes('рама')

console.log('isRamaPos:', isRamaPos)
console.log('isRama:', isRama)


/*
 * #6
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.4), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мила раму, рама мила маму'
 *      Результат: 'Мама миє раму, Рама тримає маму'
 */
var strReplace = strObj.str.replace('мила', 'миє')

strReplace = strReplace.replace('рама', 'Рама')
strReplace = strReplace.replace('мила', 'тримає')
console.log('strReplace:', strReplace)


/*
 * #7
 *
 * Перетворіть текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */
var someStr = 'some STRING'
var upperStr = someStr.toUpperCase()
var lowerStr = someStr.toLowerCase()

console.log(upperStr)
console.log(lowerStr)
