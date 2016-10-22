var age = {};
var catogery = {};

function format(obj) {
 var array = [];
 for (agekey in obj)
 {
   array.push(obj[agekey]);
 }
 return array;
 }



 var files= ["India2011.csv","IndiaSC2011.csv","IndiaST2011.csv"];
 fileReader(files);
var rd;
 function fileReader(files){
	 
   files.map(function(fileName) {

		var fs=require('fs');
		var readLine = require('readline');

		 rd=readLine.createInterface({
			input:fs.createReadStream(fileName),
			output:fs.createWriteStream('age.json')
			
//output2:fs.createWriteStream('abc2.json')
});
     
   });


 }


rd.on('line', function(line){


  extract(line);
   
   
   
   function extract(test)
{
 var header = [];
 test.split('\n').map(function(line , num)
 {
	 
   if(line!=='')
   {
     var line=line.split(',');

	// console.log(num);
	 
       ageKey=line[5];
 
//POPULATION OF AGE//

       if(line[4] == "Total" )
       {
       if (line[5] != "All ages")
       {
       
           line[12] = parseInt(line[12]);
           if(ageKey in age)
             {
               age[ageKey].literatepopulation += line[12];

             }
             else {
              
               age[ageKey] = {};
               age[ageKey].ageGroup = ageKey;
               age[ageKey].literatepopulation = line[12];

             }

           }

////////////////POPULATION OF CATEGORY////

                     for(index=15;index<44;index+=3)
                     {
					    var totalValue;
                         
						var education = header[index];
					    if(num ==1){
							 totalValue = parseInt(a[index]);
						
					       
				      if (education in catogery) {
                         catogery[education].totalPopulation += totalValue;
                       }
                       else
                       {
                           catogery[education] = {eduCateg: education, totalPopulation:totalValue };

                       } 
						}					   
					   
                     }





///////////////////////
   }
 
     
   }
 }
);
//console.log(age);
}
   
  
 
  
});

rd.on('close',function()
{
	 age=format(age);
	 catogery = format(catogery);
 
rd.output.write(JSON.stringify(age));
//rd.output2.write(JSON.stringify(catogery));

});