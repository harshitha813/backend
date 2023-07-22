module.exports=mongoose=>{
      var schema=mongoose.Schema(
                  {
                      partyid:Number,
                      partyname:String,
                      registeredleader:String,
                      partytype:String,
                      
      
                  },
                  {timestamps:true}
              
          );
          schema.method("toJSON",function(){
              const {__v,_id, ...object}=this.toObject();
              object.id=_id;
              return object;
          });
          const party=mongoose.model("partyinfo",schema);
          return party;
      }