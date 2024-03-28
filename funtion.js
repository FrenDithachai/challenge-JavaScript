// ดึงข้อมูล profile ของ user id 1
//console.log(getUserProfile(1)) // Fren

// ดึงข้อมูล profile ของ default user
//console.log(getUserProfile()) // DefaultUser
function getUserProfile(user){
    
    if(user==1){
        return "fren"
    }else{
        return "DefaultUser"
    }
}   
// let user = getUserProfile();

console.log(getUserProfile(1));
console.log(getUserProfile());
