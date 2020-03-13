 let n=+document.getElementById("number").value;

// n=5;
let str="";
let ws="";
for(let i=0;i<n;i++){
    document.write(str.padEnd(i+1,'*'));
    document.write("<br>");  
}

for(let i=1;i<=n;i++){
    let str2="";
    for(let j=1;j<=n-i;j++){
        str2+="`";
    }
    for(k=1;k<=i;k++){
        str2+="*";

    }
    document.write(str2);
    
    // console.log(ws.padStart(n-i-1," ")+str.padEnd(2*(i+1),"* "));   
    document.write("<br>");
}
for(let i=1;i<=n;i++){
    let str2="";
    for(let j=1;j<=n-i;j++){
        str2+="&nbsp;";
    }
    for(k=1;k<=i;k++){
        str2+="* ";

    }
    document.write(str2);
    
    // console.log(ws.padStart(n-i-1," ")+str.padEnd(2*(i+1),"* "));   
    document.write("<br>");
}

for(i=1;i<=n;i++){
    for(j=1;j<=n;j++){
        if(i==j || i+j==n+1){
            document.write("*");
        }
        else{
            document.write("&nbsp;&nbsp;");
        }
    }
    document.write("<br>");
}