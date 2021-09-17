const Sequelize = require("sequelize");
const {Op} = Sequelize;
const models = require("../models");

const genController = (type) => {
    const controllertype = `${type.charAt(0).toUpperCase()}${type.slice(1)}`;
    const model = models[controllertype];

    return ({
        create: async (req, res) => {
            const result = await model.create({
                ...req.body
            });
            res.json(result)
        },
        list: async (req, res) => {
            const result = await model.findAll({});
            res.json(result)
        },
        get: async (req, res) => {
            const {id} = req.params;
        
            const result = await model.findOne({
                where: {
                    id: {
                        [Op.eq]: id
                    }
                }
            });
            res.json(result)
        },
        delete: async (req, res) => {
            const result = await model.destroy({
                where: {
                    id: {
                        [Op.eq]: req.params.id
                    }
                }
            });
            res.json(result)
        },
        update: async (req, res) => {
            const result = await model.update({
                text: req.body.text
            },
            {
                where: {
                    id: {
                        [Op.eq]: req.params.id
                    }
                }
            });
            res.json(result)
        }
});}

module.exports = genController;
