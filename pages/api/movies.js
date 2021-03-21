import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();

export default async(req, res) => {
    const data = JSON.parse(req.body)

    const createdMovie = await prisma.movie.create({
        data
    })

    res.json(createdMovie)
}