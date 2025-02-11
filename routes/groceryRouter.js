const express = require ('express')
const {getAllGroceries, createGrocery, updateGrocery, deletedGrocery} = require('./controller/groceryController')
const router = express.Router()

router.get('/get-all-groceries', getAllGroceries)
router.post('/create-grocery', createGrocery)
router.put('/update-grocery-by-id', updateGrocery)
router.delete('/delete-grocery-by-id', deletedGrocery)

module.exports = router