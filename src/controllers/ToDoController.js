import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getToDos = async (req, res) => {
    const toDos = await prisma.toDo.findMany()
    res.json(toDos)
}

const getToDo = async (req, res) => {
    const { id } = req.params
    const toDo = await prisma.toDo.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    res.json(toDo)
}

const createToDo = async (req, res) => {
    const { title, description, skills, timelimit, status } = req.body;
    const newToDo = await prisma.toDo.create({
        data: {
            title,
            description,
            skills,
            // timelimit,
            status
        }
    });
    res.json(newToDo);
};

const updateToDo = async (req, res) => {
    const { id } = req.params;
    const { title, status } = req.body;
    const updatedToDo = await prisma.toDo.update({
        where: {
            id: parseInt(id)
        },
        data: {
            title,
            status
        }
    });
    res.json(updatedToDo);
};

const deleteToDo = async (req, res) => {
    const { id } = req.params;
    const toDo = await prisma.toDo.delete({
        where: {
            id: parseInt(id)
        }
    });
    res.json(toDo);
};

export { getToDos, getToDo, createToDo, updateToDo, deleteToDo }