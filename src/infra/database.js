const Realm=require('realm');
const UserSchema  = require('./schemas/UserSchema');
module.exports={
    getRealmConn:async ()=>{
        return await Realm.open({
            schema: [UserSchema],
        });
    }
}
