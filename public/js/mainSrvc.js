angular.module("myChats").service("mainSrvc", function($http){

  this.setScreenname = function (screenname) {
    return $http({
      method: 'POST',
      url: '/api/screenname',
      data: {screenname}
    })
  }

  this.getChats = function(){
    return $http({
      method: 'GET',
      url: '/api/chats'
    })

    //TODO Call server to get the chats
  }

  this.addChats = function(chat){
    return $http({
      method: 'POST',
      url: '/api/chats',
      data: chat
    })
    //TODO Call server to add to chats
  }

  this.deleteChats = function(){
    //TODO Call server to whipe all the chats
  }
});
