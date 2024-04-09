//? 1. ให้แปลงจาก Function ปกติไปเป็น Arrow Function
/*function fullname(firstname, lastname) {
    return firstname + lastname;
}*/

const fullname=(firstname, lastname)=>firstname+lastname;

//?. ให้แปลงจาก Function ปกติไปเป็น Arrow Function

/*function triangleArea(base, height) {
    console.log("Calculate triangle area");
    const area = (base * height) / 2;
    return area;
}*/

//*แปลง
const triangleArea=(base, height)=>"Calculate triangle area"+' '+(base*height) / 2;
console.log(triangleArea(50,50))


//? 3. ให้แปลงจาก Arrow Function ไปเป็น Function ปกติ
// const circleArea = (radius) => Math.PI * radius ** 2;

//*แปลง
function circleArea(radius){
    console.log(Math.PI * radius ** 2);
}
let number = circleArea(20);