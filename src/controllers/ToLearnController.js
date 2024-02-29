import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getToLearns = async (req, res) => {
    const toLearns = await prisma.toLearn.findMany()
    res.json(toLearns)
}