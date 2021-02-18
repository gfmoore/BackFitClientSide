/*
Program       fitfileanalyser.js
Author        Gordon Moore
Date          15 February 2021
Description   The JavaScript code for analysing fit files
Licence       MIT
*/

// #region Version history
/*
0.0.1   Initial version

*/
//#endregion 

let version = '0.0.1';

'use strict';
$(function() {
  console.log('jQuery here!');  //just to make sure everything is working

  //#region for variable definitions (just allows code folding)
  let fname;
  let response;
  let content;

  const fitParser = new FitParser({
    force: true,
    speedUnit: 'km/h',
    lengthUnit: 'km',
    temperatureUnit: 'celcius',
    elapsedRecordField: true,
    mode: 'list',                  //using 'cascade' or 'both' doesn't seem to work
  });
  //#endregion 

  //Testing
  fname = './data/Karoo.fit';
  //fname = './data/example.fit'; //doesn't seem to work
  //fname = './data/Activity.fit';
  //getdata();

  //select and load fit file
  $('#selectfitfile').on('change', function(e) { 
    fname = e.target.files[0].name;
    //getdata();
  })

  //I'm learning how to use async, await and fetch. 
  async function getdata() {
    response = await fetch(fname);

    //get the fit file as an arraybuffer  - this is where I had to make a slight change in the bf-fit-parser code
    content = await response.arrayBuffer();

    //Now use the parser
    fitParser.parse(content, function (error, data) {
      if (error) {
          console.error(error);
      } else {
          //Here is the data as a JavaScript object. You can JSONify it or access the member as you need.
          console.log(data);
      }
    });
  }

})

