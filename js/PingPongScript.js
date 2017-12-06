// capture and display user data
$(document).ready(function(){
  $('#submit').click(function(event){
    event.preventDefault();
    $('#pongResults').empty();
    var userInput = parseInt($('#userInput').val());
    pingPongArray = pingPong(userInput);
    console.log(pingPongArray)
    for(var i = 0; i < pingPongArray.length; i++){
      $('#pongResults').append('<li>' + pingPongArray[i] + '</li>');
    }
  });
});

//manipulate user data
function pingPong(num){
  var pingPongArray = [];
  for(var i = 1; i <= num; i++){
    if((i % 15) === 0){
      pingPongArray.push('PingPong');
    }else if((i % 5) === 0){
      pingPongArray.push('Pong');
    }else if((i % 3) === 0){
      pingPongArray.push('Ping');
    }else{
      pingPongArray.push(i);
    }
  }
  return pingPongArray;
}
