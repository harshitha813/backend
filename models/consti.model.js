module.exports=mongoose=>{
      var schema=mongoose.Schema(
                  {
                      cid:Number,
                     cname:String,
                     district:String,
                     state:String,
                  },
                  {timestamps:true}
              
          );
          schema.method("toJSON",function(){
              const {__v,_id, ...object}=this.toObject();
              object.id=_id;
              return object;
          });
          const consti=mongoose.model("consti",schema);
          return consti;
      }