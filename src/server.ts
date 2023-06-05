import mongoose from 'mongoose';
import app from './app';
import config  from './config';
const port = 3000

async function bootstrap() {

    try {
        mongoose.connect(config.database_url as string);
        console.log('Connected with database')
        app.listen(config.port, () => {
            console.log(`App listening on port ${config.port}`)
          })
          
    } catch (error) {
        console.log(error)
    }
    
}

bootstrap()


