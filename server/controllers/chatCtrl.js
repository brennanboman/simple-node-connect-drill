var chats = [];
module.exports = {

  getChats:function(req,res){
    res.send(chats)
    // TODO write getChats
  },
  postChats:function(req,res){
    var chat = req.body;
    chats.push(chat);
    res.send(chats)
    // TODO write postChats
  },
  deleteChats:function(req,res){
    chats = [];
    res.send(chats);
    // TODO write deleteChats
  }
}
