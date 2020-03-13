let arr=[{name:"ravindra",
          sports:["cricket","chess"]},
          {name:"ravi",
          sports:["cricket","football"]},
          {name:"risabh",
          sports:["table-tennis","football"]}];


arrSports=[];
arrID=[];
arr.forEach(user => {
    for(i=0;i<user.sports.length;i++){
        if( arrSports.indexOf(user.sports[i])==-1){
            arrSports.push(user.sports[i]);
        }
    }  
});
arrSports.forEach(sport => {
    
    arrNames=[];
    arr.forEach(id => {
        if(id.sports.indexOf(sport)!=-1){
            arrNames.push(id.name);
        }   
    });
    let temp={};
    temp[sport]=arrNames
    arrID.push(temp);
    
});
console.log("Defalut ARRAY:",JSON.stringify(arr));
console.log("ARRAY after sorting:",JSON.stringify(arrID,null,2));


// arr.forEach(element => {
//     console.log(element);
    
// });
