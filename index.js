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

const Speech = sequelize.define('Speech', {
    lesson_part: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    link_part: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 }, {
        tableName: 'part_of_speech',
        timestamps: false
});

const Noun = sequelize.define('Noun', {
    lesson_noun: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    link_noun: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 }, {
        tableName: 'noun',
        timestamps: false
});

const Tobe = sequelize.define('Tobe', {
    lesson_tobe: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    link_tobe: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 }, {
        tableName: 'to_be',
        timestamps: false
});

const Preposition = sequelize.define('Preposition', {
    lesson_pre: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    link_pre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 }, {
        tableName: 'preposition',
        timestamps: false
});

const Conjunction = sequelize.define('Conjunction', {
    lesson_con: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    link_con: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 }, {
        tableName: 'conjunction',
        timestamps: false
});

const Daily = sequelize.define('Daily', {
    lesson_dai: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    link_dai: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 }, {
        tableName: 'daily_activity',
        timestamps: false
});

const Highschool = sequelize.define('Highschool', {
    lesson_high: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    link_high: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 }, {
        tableName: 'highschool_life',
        timestamps: false
});

const Job = sequelize.define('Job', {
    lesson_new: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    link_new: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 }, {
        tableName: 'new_job',
        timestamps: false
});

const English = sequelize.define('English', {
    lesson_eng: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    link_eng: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 }, {
        tableName: 'english_important',
        timestamps: false
});

const Family = sequelize.define('Family', {
    lesson_fam: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    link_fam: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 }, {
        tableName: 'family',
        timestamps: false
});

const Omelet = sequelize.define('Omelet', {
    lesson_spe: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    link_spe: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 }, {
        tableName: 'special_omelet',
        timestamps: false
});

const Conversation = sequelize.define('Conversation', {
    lesson_daily: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    link_daily: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 }, {
        tableName: 'daily_conversation',
        timestamps: false
});

const Time = sequelize.define('Time', {
    lesson_time: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    link_time: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 }, {
        tableName: 'what_time',
        timestamps: false
});

const Interview = sequelize.define('Interview', {
    lesson_job: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    link_job: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 }, {
        tableName: 'job_interview',
        timestamps: false
});

const Kosakata = sequelize.define('Kosakata', {
    lesson_kos: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    link_kos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 }, {
        tableName: 'kosakata',
        timestamps: false
});

const Gerund = sequelize.define('Gerund', {
    lesson_ger: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    link_ger: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 }, {
        tableName: 'gerund',
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

        server.get('/part_of_speech', async(request, response) => {
            let part_of_speech = await Speech.findAll();
            response.json(part_of_speech);
        });

        server.get('/noun', async(request, response) => {
            let noun = await Noun.findAll();
            response.json(noun);
        });

        server.get('/to_be', async(request, response) => {
            let to_be = await Tobe.findAll();
            response.json(to_be);
        });

        server.get('/preposition', async(request, response) => {
            let preposition = await Preposition.findAll();
            response.json(preposition);
        });

        server.get('/conjunction', async(request, response) => {
            let conjunction = await Conjunction.findAll();
            response.json(conjunction);
        });

        server.get('/daily_activity', async(request, response) => {
            let daily_activity = await Daily.findAll();
            response.json(daily_activity);
        });

        server.get('/highschool_life', async(request, response) => {
            let highschool_life = await Highschool.findAll();
            response.json(highschool_life);
        });

        server.get('/new_job', async(request, response) => {
            let new_job = await Job.findAll();
            response.json(new_job);
        });

        server.get('/english_important', async(request, response) => {
            let english_important = await English.findAll();
            response.json(english_important);
        });

        server.get('/family', async(request, response) => {
            let family = await Family.findAll();
            response.json(family);
        });

        server.get('/special_omelet', async(request, response) => {
            let special_omelet = await Omelet.findAll();
            response.json(special_omelet);
        });

        server.get('/daily_conversation', async(request, response) => {
            let daily_conversation = await Conversation.findAll();
            response.json(daily_conversation);
        });

        server.get('/what_time', async(request, response) => {
            let what_time = await Time.findAll();
            response.json(what_time);
        });

        server.get('/job_interview', async(request, response) => {
            let job_interview = await Interview.findAll();
            response.json(job_interview);
        });

        server.get('/kosakata', async(request, response) => {
            let kosakata = await Kosakata.findAll();
            response.json(kosakata);
        });

        server.get('/gerund', async(request, response) => {
            let gerund = await Gerund.findAll();
            response.json(gerund);
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
