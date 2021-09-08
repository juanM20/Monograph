import monographDB from '../models/monograph.js'

export const getMonograph = async (req, res) => {
    try {
        const showMonograph = await monographDB.find()
        res.status(200).json(showMonograph)

    } catch (error) {
        res.status(404).json({message: error.message}) 
    }
}

export const createMonograph = async (req, res) => {
    const body_monograph = req.body
    console.log(body_monograph)
    const new_Monograph = new monographDB(body_monograph)

    try {
        await new_Monograph.save()
        res.status(201).json(new_Monograph)
        
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}