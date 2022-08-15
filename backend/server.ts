import * as express from 'express'
import { errorHandler } from './middleware/errorMiddleware'
import {PORT} from './utils/config' 
import * as Colors from 'colors.ts'
import { connectDB } from './database/db'
Colors.colors('', '')

connectDB()

const app = express()
app.use(express.json())

app.use('/api/projects', require('./routes/projectRoutes'))

app.use(errorHandler)



app.listen(PORT, () => console.log(`Server running on port ${PORT}`))