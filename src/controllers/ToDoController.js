import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getToDos = async (req, res) => {
    const toDos = await prisma.toDo.findMany()
    res.json(toDos)
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

export { getToDos, createToDo }