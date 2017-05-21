'use strict';

var http = require('http');
var axios = require('axios');

//make 5 requests to http://127.0.0.1:9119/get-next-word
function getNextWord(req, res) {
  var arr = [];
  //make 5 requests to the server
  for (var i = 0; i < 5; i++) {
    var count = 0;
    (function(i){
      return axios.get('http://127.0.0.1:9119/get-next-word')
      .then(function(data){
        // console.log(data.data);
        arr[i] = data.data;
        count++;
      })
      .then(function(){
        //wait for all of them to return
        if (count === 5) {
          console.log(arr.join(' '));
        }
      })
      .catch(function(error){
        console.log(error);
      });

    })(i);
  }
}


getNextWord();