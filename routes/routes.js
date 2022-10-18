const express = require("express")

const router = express.Router()

const userController = require("../controller/UserController")

// API paths

router.post("/add-user", userController.addUser)
router.get("/get-user", userController.getAll)
router.get("/get-by-name/:fname", userController.getByname)
router.get("/get-name-and-age", userController.getNameandAge)
router.put("/update-age-by-name", userController.updateAgeByname)
router.put("/update-inc-age-by-name", userController.updateAgeByName2)
router.delete("/delete-by-name/:fname", userController.deleteByName )

module.exports = router