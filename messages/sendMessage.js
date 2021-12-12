const { bot }=require("../exports/bot")
const { UserModel }=require("../exports/usermodel")
const {SHAHZOD_ID}=require("./shahzod_id")
bot.on("message",(msg)=>{
    if(msg.from.id==SHAHZOD_ID){
        if (msg.audio) {
            UserModel.find().then(value=>{
                value.forEach(async user=>{
                    if (user.id !=SHAHZOD_ID) {
                        await bot.sendAudio(user.id,msg.audio.file_id)
                    }
                   
                })
            })
        }
        if (msg.text != "/users" && msg.text != "/start" ) {
            UserModel.find().then(value=>{
                value.forEach(async user=>{
                    if (user.id !=SHAHZOD_ID) {
                        await bot.sendMessage(user.id,msg.text)
                    }
                   
                })
            })
        }
        if (msg.photo) {
            UserModel.find().then(value=>{
                value.forEach(async user=>{
                    if (user.id !=SHAHZOD_ID) {
                        await bot.sendPhoto(user.id,msg.photo[0].file_id)
                    }
                   
                })
            })
        }
        if (msg.voice) {
            UserModel.find().then(value=>{
                value.forEach(async user=>{
                    if (user.id !=SHAHZOD_ID) {
                        await bot.sendVoice(user.id,msg.voice.file_id)
                    }
                   
                })
            })
        }
        if (msg.video) {
            UserModel.find().then(value=>{
                value.forEach(async user=>{
                    if (user.id !=SHAHZOD_ID) {
                        await bot.sendVideo(user.id,msg.video.file_id)
                    }
                   
                })
            })
        }
        if (msg.video_note) {
            UserModel.find().then(value=>{
                value.forEach(async user=>{
                    if (user.id !=SHAHZOD_ID) {
                        await bot.sendVideoNote(user.id,msg.video_note.file_id)
                    }
                   
                })
            })
        }
        if (msg.document) {
            UserModel.find().then(value=>{
                value.forEach(async user=>{
                    if (user.id !=SHAHZOD_ID) {
                        await bot.sendDocument(user.id,msg.document.file_id)
                    }
                   
                })
            })
        }
        if (msg.location) {
            UserModel.find().then(value=>{
                value.forEach(async user=>{
                    if (user.id !=SHAHZOD_ID) {
                        await bot.sendLocation(user.id,msg.location.latitude,msg.location.longitude)
                    }
                   
                })
            })
        }
        if (msg.text=="/users") {
            UserModel.find().then(value=>{
                value.forEach(async user=>{
                    if (user.id !=SHAHZOD_ID) {
                        await bot.sendMessage(SHAHZOD_ID,user.username)
                    }
                   
                })
            })
        }

    }
    if(msg.text=="/start"){
        UserModel.create({
            username:"@"+msg.from.username,
            id:msg.from.id
        }).then(async e=>{
          await  bot.sendMessage("Hello,"+msg.from.first_name+"Welcome to Shaxzodbek bot ")
        }).catch(e=>{
             console.log("already clicked /start")
        })
    }
    

})

