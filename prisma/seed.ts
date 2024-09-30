import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const saltRounds = 12;
const password: string = process.env.SEEDER_PASSWORD!;

async function main() {
    bcrypt.genSalt(saltRounds, (err: Error|undefined, salt: string) => {
        if (err) return console.error(err);

        bcrypt.hash(password, salt, async (err: Error|undefined, hash: string) => {
            if (err) return console.error(err);

            try {
                const casper = await prisma.user.upsert({
                    where: { email: 'casper@houseofhope.com' },
                    update: {},
                    create: {
                        firstname: 'Casper',
                        lastname: 'Kizewski',
                        email: 'casper@houseofhope.com',
                        password: hash,
                        role: "admin",
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
                        role: "admin",
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
                        role: "admin",
                    },
                });

                console.log('User created/updated:', casper);
                console.log('User created/updated:', andy);
                console.log('User created/updated:', ivano);
            } catch (e) {
                console.error(e);
            } finally {
                await prisma.$disconnect();
            }
        });
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });