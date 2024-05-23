function vow(stri){
    let cnt=0;
    let stri1=stri.toLowerCase();
    for(let i =0;i<stri.length;i++)
        {   if(stri1[i]==='a'|| stri1[i]==='e'||stri1[i]==='i'||stri1[i]==='o'||stri1[i]==='u')
           {
             cnt++;
            }   
        }
    return cnt;
 
}
let r = vow("EhelrTaloaAA");
console.log(r);