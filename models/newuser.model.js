module.exports=mongoose=>{
      var schema=mongoose.Schema(
                  {
                      Name:String,
                      Password:String,
                      DOB:Date,
                      Qualification:String,
                      MotherName:String,
                      FatherName:String,
                      Guardian:String,
                      Email:String,
                      Address:String,
                      ConstituencyId:Number,
                  },
                  {timestamps:true}
              
          );
          schema.method("toJSON",function(){
              const {__v,_id, ...object}=this.toObject();
              object.id=_id;
              return object;
          });
          const newuser=mongoose.model("newuser",schema);
          return newuser;
      }