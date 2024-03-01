import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getToLearns = async (req, res) => {
    const toLearns = await prisma.toLearn.findMany()
    res.json(toLearns)
}

const getToLearn = async (req, res) => {
    const { id } = req.params;
    const toLearn = await prisma.toLearn.findUnique({
        where: {
            id: parseInt(id),
        },
    });
    res.json(toLearn);
};

const createToLearn = async (req, res) => {
    console.log(req.body); // Vérifiez le contenu de req.body

    const toLearn = req.body;
    const newToLearn = await prisma.toLearn.create({
        data: {
            title: toLearn.title,
        }
    });
    res.json(newToLearn);
};

export { getToLearns, getToLearn, createToLearn }