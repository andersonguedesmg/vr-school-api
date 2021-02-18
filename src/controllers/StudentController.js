const Student = require('../models/Student');

module.exports = {
    async index(req, res) {
        const students = await Student.findAll()

        return res.json(students)
    },

    async store(req, res) {
        const { name } = req.body;

        const student = await Student.create({ name })

        return res.json(student)
    }
}