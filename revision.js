function evenify(num){
    if(num % 2 == 0){

        console.log(num, ':this is even no.')
    }
    else{
        console.log(num,' :is odd no')
    }
    
}



nums =[5,12,56,566,87,8,98];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    evenify(num)
    
}

friends_age =[90,72,56,566,87,98,98];

for (let i = 0; i < nums.length; i++) {
    const age = friends_age[i];
    evenify(age);
    
}