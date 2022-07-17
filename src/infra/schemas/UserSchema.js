class UserSchema{
    static schema = {
        name: 'User',
        properties: {
          name: 'string',
          email:'string'
        },
      };
}
module.exports=UserSchema