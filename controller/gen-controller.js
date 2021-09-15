const Sequelize = require("sequelize");
const {Op} = Sequelize;
const model = require("../models");

const genController = (type) => ({
    create: async (req, res) => {
        const result = await model[type].create({
            ...req.body
        });
        res.json({
            message: result ? "succesfully created" : "failed"
        })
    },
    list: async (req, res) => {
        const result = await model[type].findAll({});
        res.json(result)
    },
    get: async (req, res) => {
        const {id} = req.params;
    
        const result = await model[type].findOne({
            where: {
                id: {
                    [Op.eq]: id
                }
            }
        });
        res.json(result)
    },
    delete: async (req, res) => {
        const result = await model[type].destroy({
            where: {
                id: {
                    [Op.eq]: req.params.id
                }
            }
        });
        res.json(result ? {} : { message: "failed" })
    },
    update: async (req, res) => {
        const result = await model[type].update({
            text: req.body.text
        },
        {
            where: {
                id: {
                    [Op.eq]: req.params.id
                }
            }
        });
        res.json(result ? result : {message:"failed"})
    }
});

module.exports = genController;
