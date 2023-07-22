const db=require("../models");
const contest=db.contesttabs;
exports.create=(req,res)=>{
    if(!req.body.cid){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }
    const contests=new contest({
        cid:req.body.cid,
        year:req.body.year,
        etype:req.body.etype,
        pid:req.body.pid,
        partyid:req.body.partyid,
        noOfVotes:req.body.noOfVotes,
        
    });
    // Save contestant in the database
    contests.save(contests)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some error occurred while creating the new bus information."
    });
});
};

exports.findAll=(req,res)=>{
      const cid=req.query.cid;
      var condition=cid ? {name:{$regex: new RegExp(cid),$options:"i"}}:{};

      contest.find(condition)
    .then(data =>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:
                 err.message || "Some error occured while retrieving bus details."
        });
    });

};

exports.findOne=(req,res) => {
      const id=req.params.id;
      console.log(id);
      contest.findOne({cid:Number})
      .then(data =>{
          if (!data)
          res.status(404).send({message:"Not found Bus with id "+id});
          else res.send(data);
       })
       .catch(err =>{
           res.status(500).send({message:"Error retrieving Bus with id "+id});
       });
  };

  exports.update=(req,res) =>{
      if(!req.body){
          return res.status(400).send({
              message:"Data to update can not be empty!"
          });
      }
      const id=req.params.id;
      contest.findByIdAndUpdate(id,req.body,{ useFindAndModify:false})
      .then(data =>{
          if(!data){
              res.status(404).send({message:"Cannot update information with id=$(id).Maybe Tutorial was not found!"
          });}
          else res.send({message: "Information was updated successfully."});
  })
      .catch(err =>{
          res.status(500).send({message:"Error updating Tutorial with id="+id});
  
      });
  };

  exports.delete=(req,res)=>{
      const id=req.params.id;
      constest.findByIdAndRemove(id,{useFindAndModify:false})
      .then(data =>{
          if(!data){
              res.status(404).send({
                  message:`Cannot delete information with id=${id}.May be Tutorial was not found!`
              });
          }
          else{
              res.send({
                  message:"Information was deleted successfully!"
              });
          }
              
          })
          .catch(err =>{
              res.status(500).send({
              message:'Could not delete information with id='+id
          });
      });
  };
  exports.deleteAll=(req,res)=>{
      contest.deleteMany({})
      .then(data=>{
          res.send({message:"${data.deletedCount}Informations are deleted successfully!"});
      })
      .catch(err=>{
          res.status(500).send({message:err.message || "some error occured while removing information."});
      });
  
  
  };
  