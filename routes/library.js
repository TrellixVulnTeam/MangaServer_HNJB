const express = require('express')
const router = express.Router()
const libraryController = require('../controllers/libraryController')
const {validateBody,validateParam,schemas}=require('../helpers/routerHelper')

router.get("/allLibrary",libraryController.index);

router.post("/addComicLib",validateBody(schemas.librarySchema),libraryController.createLibrary);

router.patch("/updateLibrary/:libraryID",validateParam(schemas.idSchema,'libraryID'),validateBody(schemas.updateLibrarySchema),libraryController.updateLibrary);

module.exports = router 