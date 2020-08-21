//js basics

function inchToMeter(inch){
var meter = inch * 0.0254;
return meter;
}

var new3 = inchToMeter(8999);
console.log(new3);

var friends = [12,89,56,78]
console.log(friends[2])
friends[3]= 45;

friends.push(100)

friends.pop()
console.log(friends)
friends.shift()
console.log(friends)