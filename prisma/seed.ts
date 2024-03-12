import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
    const p1 = await prisma.jet.upsert({
        where: { name: 'Gulfstream G650' },
        update: {},
        create: {
          name: 'Gulfstream G650',
          wingspan: 99.7,
          engines: 2,
          year: 2012
        },
      })
      const p2 = await prisma.jet.upsert({
        where: { name: 'Bombardier Global 7500' },
        update: {},
        create: {
          name: 'Bombardier Global 7500',
          wingspan: 104,
          engines: 2,
          year: 2018
        },
      })
      const p3 = await prisma.jet.upsert({
        where: { name: 'Cessna Citation Longitude' },
        update: {},
        create: {
          name: 'Cessna Citation Longitude',
          wingspan: 68.5,
          engines: 2,
          year: 2017
        },
      })
      const p4 = await prisma.jet.upsert({
        where: { name: 'Embraer Phenom 300' },
        update: {},
        create: {
          name: 'Embraer Phenom 300',
          wingspan: 53.2,
          engines: 2,
          year: 2009
        },
      })
      const p5 = await prisma.jet.upsert({
        where: { name: 'Dassault Falcon 7X' },
        update: {},
        create: {
          name: 'Dassault Falcon 7X',
          wingspan: 86,
          engines: 3,
          year: 2005
        },
      })
      const p6 = await prisma.jet.upsert({
        where: { name: 'Bombardier Challenger 350' },
        update: {},
        create: {
          name: 'Bombardier Challenger 350',
          wingspan: 69,
          engines: 2,
          year: 2014
        },
      })
      const p7 = await prisma.jet.upsert({
        where: { name: 'Gulfstream G280' },
        update: {},
        create: {
          name: 'Gulfstream G280',
          wingspan: 63,
          engines: 2,
          year: 2011
        },
      })
      const p8 = await prisma.jet.upsert({
        where: { name: 'HondaJet Elite' },
        update: {},
        create: {
          name: 'HondaJet Elite',
          wingspan: 39.8,
          engines: 2,
          year: 2018
        },
      })
      const p9 = await prisma.jet.upsert({
        where: { name: 'Pilatus PC-24' },
        update: {},
        create: {
          name: 'Pilatus PC-24',
          wingspan: 55.8,
          engines: 2,
          year: 2017
        },
      })
      const p10 = await prisma.jet.upsert({
        where: { name: 'Learjet 75 Liberty' },
        update: {},
        create: {
          name: 'Learjet 75 Liberty',
          wingspan: 50.9,
          engines: 2,
          year: 2020
        },
      })
  // console.log({ p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 })

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })