import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const saltRounds = 12;
const password: string = process.env.SEEDER_PASSWORD!;

async function main() {
    if (!password) {
        console.error('Seeder password is not set in environment variables.');
        process.exit(1);
    }

    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);

        const casper = await prisma.user.upsert({
            where: { email: 'casper@houseofhope.com' },
            update: {},
            create: {
                firstname: 'Casper',
                lastname: 'Kizewski',
                email: 'casper@houseofhope.com',
                password: hash,
                role: 'admin',
            },
        });

        const andy = await prisma.user.upsert({
            where: { email: 'andy@houseofhope.com' },
            update: {},
            create: {
                firstname: 'Andy',
                lastname: 'Hoang',
                email: 'andy@houseofhope.com',
                password: hash,
                role: 'admin',
            },
        });

        const ivano = await prisma.user.upsert({
            where: { email: 'ivano@houseofhope.com' },
            update: {},
            create: {
                firstname: 'Ivano',
                lastname: 'Baptista',
                email: 'ivano@houseofhope.com',
                password: hash,
                role: 'admin',
            },
        });

        console.log('Users created/updated:', { casper, andy, ivano });
    } catch (error) {
        console.error('Error creating users:', error);
        process.exit(1);
    }
}

async function teamSeed() {
    try {
        const casper = await prisma.user.findUnique({ where: { email: 'casper@houseofhope.com' } });
        const andy = await prisma.user.findUnique({ where: { email: 'andy@houseofhope.com' } });
        const ivano = await prisma.user.findUnique({ where: { email: 'ivano@houseofhope.com' } });

        if (!casper || !andy || !ivano) {
            console.error('One or more users not found.');
            process.exit(1);
        }

        const developmentTeam = await prisma.team.upsert({
            where: { name: 'Development Team' },
            update: {},
            create: {
                name: 'Development Team',
                description: 'Team responsible for product development.',
                leader: { connect: { id: casper.id } },
            },
        });

        await prisma.user.update({
            where: { id: casper.id },
            data: {
                team: { connect: { id: developmentTeam.id } },
                teamRole: 'team_leader',
            },
        });

        await prisma.user.update({
            where: { id: andy.id },
            data: {
                team: { connect: { id: developmentTeam.id } },
                teamRole: 'member',
            },
        });

        await prisma.user.update({
            where: { id: ivano.id },
            data: {
                team: { connect: { id: developmentTeam.id } },
                teamRole: 'member',
            },
        });

        console.log('Team created/updated:', developmentTeam);
    } catch (error) {
        console.error('Error seeding team:', error);
        process.exit(1);
    }
}

async function seed() {
    await main();
    await teamSeed();
}

seed()
    .catch((error) => {
        console.error('Error in seeding process:', error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
