const { getRealmConn }=require('../infra/database')
class UserController{
    async list(req,res){
            const realm=await getRealmConn();
            const users = realm.objects('User');
            //realm objects came invisible;
            let usersVisible=[];
            users.map(user=>{usersVisible.push({name:user.name,email:user.email})})
            return res.status(200).json(usersVisible);      
    }
    async create(req,res){
            const { name,email }=req.body;
            const realm=await getRealmConn();
            let user
            realm.write(() => {
                user=realm.create("User", {
                    name,
                    email,
                });
            });
            return res.redirect('/');
    }
}
module.exports=UserController