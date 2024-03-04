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

const getToLearnTimeLimit = (id) => {
    return prisma.toLearn.findUnique({
        where: {
            id: parseInt(id),
        },
    }).id;
};

const createToLearn = async (req, res) => {
    const { title, image, timelimit, status } = req.body;
    const newToLearn = await prisma.toLearn.create({
        data: {
            title,
            image,
            timelimit: timelimit ? new Date(timelimit) : null,
            status,
        }
    });
    res.json(newToLearn);
};

const deleteToLearn = async (req, res) => {
    const { id } = req.params;
    const toLearn = await prisma.toLearn.delete({
        where: {
            id: parseInt(id),
        },
    });
    res.json(toLearn);
};

const updateToLearn = async (req, res) => {
    const { id } = req.params;
    const { status, timelimit } = req.body;
    const toLearn = await prisma.toLearn.update({
        where: {
            id: parseInt(id),
        },
        data: {
            status,
            timelimit: timelimit ? new Date(timelimit) : getToLearnTimeLimit(id),
        },
    });
    res.json(toLearn);
};

export { getToLearns, getToLearn, createToLearn, deleteToLearn, updateToLearn }