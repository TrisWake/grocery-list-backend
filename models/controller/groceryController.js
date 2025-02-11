const groceryList = require('../models/Grocery')

const getAllGroceries = async (req, res)=>{
    try {
        const allGroceries = await groceryList.find({})
        res.json({message: 'Found all groceries', payload: allGroceries})
    } catch (error) {
        res.status(500).json({message:'Error', error: error.message})
    }
}

const createGrocery = async (req,res)=>{
    try {
        const {name} = req.body
        const newGrocery = new groceryList({name})
        await newGrocery.save()
    } catch (error) {
        res.status(500).json({message: 'Error', error: error.message})
    }
}

const updateGrocery = async (req, res)=>{
    try {
        const {id} = req.params
        const updateGrocery = await groceryList.findByIdAndUpdate(id, req.body, {new: true})
        res.json({message:'Grocery updated', payload: updateGrocery})
    } catch (error) {
        res.status(500).json({message: 'Error', error: error.message})
    }
}

const deletedGrocery = async (req,res)=>{
    try {
        const {id} = req.params
        const deletedGrocery = await groceryList.findByIdAndDelete(id)
        res.json({message: 'Grocery Deleted', payload: deletedGrocery})
    } catch (error) {
        res.status(500).json({message: 'Error', error: error.message})
    }
}




module.exports={
    getAllGroceries,
    createGrocery,
    updateGrocery,
    deletedGrocery
}