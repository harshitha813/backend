module.exports=app=>{
      const contesttabs=require("../controllers/contestant.controller.js");
      var router=require("express").Router();
  
      
      router.post("/",contesttabs.create);
    
      router.get("/",contesttabs.findAll);
      router.get("/:id",contesttabs.findOne);
      router.put("/:id",contesttabs.update);
      router.delete("/:id",contesttabs.delete);
      router.delete("/",contesttabs.deleteAll);
  
      app.use("/api/contesttabs",router);
  }