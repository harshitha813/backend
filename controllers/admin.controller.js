const db=require("../config/db.config");
const admin=db.admintabs;
exports.create=(req,res)=>{
    if(!req.body.adminid){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }
    const admins=new admin({
        adminid:req.body.adminid,
        password:req.body.password,
        place:req.body.place,
        
    });
    // Save election in the database
    admins.save(admins)
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
      const adminid=req.query.adminid;
      var condition=adminid ? {adminid:{$regex: new RegExp(adminid),$options:"i"}}:{};

      admin.find(condition)
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
      admin.findOne({adminid:Number})
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
      admin.findByIdAndUpdate(id,req.body,{ useFindAndModify:false})
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
      admin.findByIdAndRemove(id,{useFindAndModify:false})
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
      admin.deleteMany({})
      .then(data=>{
          res.send({message:"${data.deletedCount}Informations are deleted successfully!"});
      })
      .catch(err=>{
          res.status(500).send({message:err.message || "some error occured while removing information."});
      });
  
  
  };
  