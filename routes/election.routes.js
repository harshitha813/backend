module.exports=app=>{
      const electiontabs=require("../controllers/election.controller.js");
      var router=require("express").Router();
  
      
      router.post("/",electiontabs.create);
    
      router.get("/",electiontabs.findAll);
      router.get("/:id",electiontabs.findOne);
      router.put("/:id",electiontabs.update);
      router.delete("/:id",electiontabs.delete);
      router.delete("/",electiontabs.deleteAll);
  
      app.use("/api/electiontabs",router);
  }