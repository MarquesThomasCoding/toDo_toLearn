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
    const { title, description, timelimit, status } = req.body;
    const newToDo = await prisma.toDo.create({
        data: {
            title,
            description,
            // timelimit,
            status
        }
    });
    res.json(newToDo);
};

const updateToDo = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const updatedToDo = await prisma.toDo.update({
        where: {
            id: parseInt(id)
        },
        data: {
            status
        }
    });
    res.json(updatedToDo);
};

export { getToDos, getToDo, createToDo, updateToDo }