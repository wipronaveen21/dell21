var age = {};
var catogery = {};
  var count=0;

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
			output:fs.createWriteStream('category.json')
			
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

	 //console.log(line[0]);
	 
       ageKey=line[5];
 
//population for AGE//
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

//population for CATEGORY//

                     for(index=15;index<44;index+=3)
                     {
					    var totalValue;
                         
						
						header[15]="Educational level - Literate without educational level - Persons";
						header[18]="Educational level - Below Primary - Persons";
						header[21]="Educational level - Educational level - Primary - Persons";
						header[24]="Educational level - Educational level - Middle - Persons";
						header[27]="Educational level - Educational level - Matric/Secondary - Persons";
						header[30]="Educational level - Educational level - Higher secondary/Intermediate/Pre-University/Senior secondary - Persons";
						header[33]="Educational level - Educational level - Non-technical diploma or certificate not equal to degree - Persons";
						header[36]="Educational level - Educational level - Technical diploma or certificate not equal to degree - Persons";
						header[39]="Educational level - Educational level - Graduate & above - Persons";
						header[42]="Educational level - Educational level - Unclassified - Persons";
						var education = header[index];
					//	console.log(header[index]);
					
							 totalValue = parseInt(line[index]);
						
					       
				      if (education in catogery) {
                         catogery[education].totalPopulation += totalValue;
                       }
                       else
                       {
                           catogery[education] = {eduCateg: education, totalPopulation:totalValue };

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
 
rd.output.write(JSON.stringify(catogery));
//rd.output2.write(JSON.stringify(catogery));

});