import express, { request, response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Sequelize, DataTypes } from "sequelize";

const server = express();
const port = 3000;

server.use (cors());
server.use (bodyParser.urlencoded ({extended: false}))
server.use (bodyParser.raw());
server.use (bodyParser.json());

const sequelize = new Sequelize('mysql://root:gEW7byPYdGVpNgDAbjjY@containers-us-west-150.railway.app:6567/railway')

const Grammar = sequelize.define('Grammar', {
    grammar_lesson: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    grammar_description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    grammar_link: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 }, {
        tableName: 'grammars',
        timestamps: false
});

const Listening = sequelize.define('Listening', {
    listening_lesson: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    listening_description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    link_listening: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 }, {
        tableName: 'listenings',
        timestamps: false
});

const Speaking = sequelize.define('Speaking', {
    speaking_lesson: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    speaking_description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    speaking_link: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 }, {
        tableName: 'speakings',
        timestamps: false
});

const runServer = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        server.get('/grammars', async(request, response) => {
            let grammars = await Grammar.findAll();
            response.json(grammars);
        });

        server.get('/listenings', async(request, response) => {
            let listenings = await Listening.findAll();
            response.json(listenings);
        });

        server.get('/speakings', async(request, response) => {
            let speakings = await Speaking.findAll();
            response.json(speakings);
        });

        server.use((error, request, response, next) => {
            response.status (500);
            response.json ({
                message: "Internal server error!",
            });
        
            console.log("Log error from middleware:");
            console.error(error);
            next();
        });
        
        server.listen(port, () => {
            console.log(`Server is running at port ${port}`)
        });
    } catch (error) {
        console.error(error);
    }
};

runServer ();
