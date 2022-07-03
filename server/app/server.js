const express = require("express")
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const configureMongoose = require("./conf/mongodbConfigurations")
const {MainRouter} = require("./routes/main.router");
const createHttpError = require("http-errors")
class Server {
    #app = express()
    constructor() {
        this.configureApplication()
        this.configureServer()
        this.configureDataBases()
        this.configureRoutes()
        this.configureHandlers()
    }
    configureApplication(){
        this.#app.use(helmet())
        this.#app.use(morgan("dev"))
        this.#app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
        this.#app.use(express.json())
        this.#app.use(express.urlencoded({extended:true}))
        this.#app.use(express.static(path.join(__dirname , ".." , "public")))
    }
    configureServer(){
        this.#app.listen(process.env.RUNNING_PORT ,  () => {
            console.log(`Running > http://localhost:${process.env.RUNNING_PORT}`)
        }
        )
    }
    configureDataBases(){
        configureMongoose(process.env.MONGO_URL)
        require("./conf/redisConfigurations")
    }
    configureRoutes(){
        this.#app.use(MainRouter)
    }
    configureHandlers(){
        this.#app.use((req,res,next) => {
            next(createHttpError.NotFound("Path you looking for is not found"))
        })
        this.#app.use((error, req, res, next) => {
            const serverError = createError.InternalServerError();
            const statusCode = error.status || serverError.status;
            const message = error.message || serverError.message;
            return res.status(statusCode).json({
                errors: {
                    statusCode,
                    message,
                },
            });
        });
    }
}
module.exports ={
    Server
}