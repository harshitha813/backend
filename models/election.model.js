module.exports=mongoose=>{
      var schema=mongoose.Schema(
                  {
                      electionDate:Date,
                      canvasFrom:Date,
                      canvasTo:Date,
                      etype:String,
                      resultDate:Date,
                      
      
                  },
                  {timestamps:true}
              
          );
          schema.method("toJSON",function(){
              const {__v,_id, ...object}=this.toObject();
              object.id=_id;
              return object;
          });
          const election=mongoose.model("election",schema);
          return election;
      }