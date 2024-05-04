const ages = [3, 10, 18, 20];

const vote = ages.findIndex(function(val){
  return val > 18;  
});

console.log(vote);