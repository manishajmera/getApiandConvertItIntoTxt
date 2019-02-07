//read from json file and stored in local varible
var Request = require("request");
var fs = require("fs");
read = function(callback)
{

  Request.get("https://www.cardekho.com/api/v1/usedcar/mmvdata?_format=json", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    var emp = JSON.parse(body);

    callback(emp);
  });
  // setTimeout(function()
  // {
  //   console.log(rawdata);
  //   callback(rawdata);
  // }, 3000);
  // var rawdata = fs.readFile('emp.json', 'utf-8');
  // console.log('Reading all the data from file succesfully ');
  // var emp = JSON.parse(rawdata);
  // return emp;
};
//write to the json file if user have done is editing
write = function(engWord)
{
  //write into file through file system object
  fs.writeFile('variantName.txt',engWord, (err) =>
  {
    console.log(engWord);
    //if some err occur terminate and show the error
    if (err) throw err;
      console.log('complete');
    });
  }

module.exports = {
  write: write,
  read: read,
};
