module.exports=app=>{
      const partytabs=require("../controllers/partyinfo.controller.js");
      var router=require("express").Router();
  
      
      router.post("/",partytabs.create);
    
      router.get("/",partytabs.findAll);
      router.get("/:id",partytabs.findOne);
      router.put("/:id",partytabs.update);
      router.delete("/:id",partytabs.delete);
      router.delete("/",partytabs.deleteAll);
  
      app.use("/api/partytabs",router);
  }