//user input package
var readline = require('readline-sync');
//import file reading and writing functions
var file = require('./file')
//import validate package
var validate = require('./validate.js');
//import package of service
var service = require('./service')
var empId;
var engwordArray='';
var writeFunc = function(data,callback)
{
  //console.log(data);
  let mmvData = data;
  // for(key in data.data.specs){
  //   for(i in data.data.specs[key]){
  //     //console.log(data.data.specs[key][i].groupName)
  //     if(typeof data.data.specs[key][i].groupName!='undefined')
  //       engwordArray+= data.data.specs[key][i].groupName+"\n";
  //     if(typeof data.data.specs[key][i].features!='undefined'){
  //       for(j in data.data.specs[key][i].features){
  //         engwordArray+= data.data.specs[key][i].features[j].name+"\n";
  //       }
  //     }
  //   }
  // }
  // console.log(engwordArray);


  //mmv to txt conversion
  for(key in mmvData)
  {

    for(key in mmvData.mmv){
      // if(mmvData.mmv[key].oem){
      //   //engwordArray.push(mmvData.mmv[key].oem);
      //   engwordArray+=mmvData.mmv[key].oem+'\n';
      // }
      if(mmvData.mmv[key].CM){
        let t = mmvData.mmv[key].CM;
        for(key in t)         engwordArray+=t[key].MSN + '\n';
          //engwordArray.push(t[key].MN);
      }
        if(mmvData.mmv[key].EM ){
          let t = mmvData.mmv[key].EM;
          for(key in t)         engwordArray+=t[key].MSN + '\n';
        }
        if(mmvData.mmv[key].UM ){
          let t = mmvData.mmv[key].UM;
          for(key in t)         engwordArray+=t[key].MSN + '\n';
        }
        console.log(engwordArray);
    }
  }
    // for(key in mmvData.city){
    //     //engwordArray.push(mmvData.city[key].CN);
    //     engwordArray += mmvData.city[key].CN +'\n'
    //     if(mmvData.city[key].CN.REG)
    //     {
    //       for(key in mmvData.city[key].CN.REG )
    //       engwordArray += mmvData.city.CN.REG[key] +'\n'
    //
    //         //engwordArray.push(mmvData.city.CN.REG[key]);
    //     }
    // }
    // console.log(engwordArray);
   callback(engwordArray);

}

var loginMenu = function(engWord)
{
  writeFunc(engWord,file.write);
  //googleSearchApiHit(engWord);
  //console.log(emp);

}
//read function call to read the data
file.read(loginMenu);
//login menu function call to authenticate the user
