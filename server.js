require ('dotenv').config()
const app = require ('./app')
const  connectdb = require ('./db/mongodb')
const { appConfig, dbConfig } = require ('./config')



async function initApp (appConfig, dbConfig){
    try {
        await connectdb(dbConfig)
        app.listen(5000, () => {
            console.log(`server on port 5000`);
        })
    } catch (error) {
        console.error(error)
        process.exit(0);
    }
}

initApp(appConfig, dbConfig)