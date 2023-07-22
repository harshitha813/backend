module.exports=app=>{
      const officetabs=require("../controllers/officer.controller.js");
      var router=require("express").Router();
  
      
      router.post("/",officetabs.create);
    
      router.get("/",officetabs.findAll);
      router.get("/:id",officetabs.findOne);
      router.put("/:id",officetabs.update);
      router.delete("/:id",officetabs.delete);
      router.delete("/",officetabs.deleteAll);
  
      app.use("/api/officetabs",router);
  }