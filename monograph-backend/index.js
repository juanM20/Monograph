import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import monoRoutes from './routes/monograph.js'


const app = express()
const port =  process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/monographs', monoRoutes)


const CONNECTION_URL = 'mongodb+srv://JuanMT:JoyDivision20@monografia.iqq2b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>{app.listen(port, ()=> console.log(`App listening at port ${port}`) )
})
.catch((err) => console.log(err.message))

mongoose.set('useFindAndModify', false)





