module.exports=mongoose=>{
      var schema=mongoose.Schema(
                  {
                      cid:Number,
                      year:Date,
                      etype:String,
                      pid:Number,
                      partyid:Number,
                      noOfVotes:Number,
      
                  },
                  {timestamps:true}
              
          );
          schema.method("toJSON",function(){
              const {__v,_id, ...object}=this.toObject();
              object.id=_id;
              return object;
          });
          const contestant=mongoose.model("contestant",schema);
          return contestant;
      }