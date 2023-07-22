module.exports=mongoose=>{
      var schema=mongoose.Schema(
                  {
                      username:String,
                      password:String,
                      area:String,
                      
      
                  },
                  {timestamps:true}
              
          );
          schema.method("toJSON",function(){
              const {__v,_id, ...object}=this.toObject();
              object.id=_id;
              return object;
          });
          const office=mongoose.model("office",schema);
          return office;
      }