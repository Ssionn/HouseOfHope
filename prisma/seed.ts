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
        role: 'admin'
      }
    });

    const andy = await prisma.user.upsert({
        where: { email: 'andy@houseofhope.com' },
        update: {},
        create: {
          firstname: 'Andy',
          lastname: 'Hoang',
          email: 'andy@houseofhope.com',
          password: hash,
          role: 'admin'
        }
      });
  
      const ivano = await prisma.user.upsert({
        where: { email: 'ivano@houseofhope.com' },
        update: {},
        create: {
          firstname: 'Ivano',
          lastname: 'Baptista',
          email: 'ivano@houseofhope.com',
          password: hash,
          role: 'admin'
        }
      });
  
    const memberQuestions = [
        {
            id: 1,
            question: "Hoe werkt de online test?",
            answer: "De online test werkt eenvoudig en intuïtief. Gebruikers beantwoorden een reeks persoonlijkheidsvragen die zijn ontworpen om hun teamrol en -samenstelling beter te begrijpen. Volg gewoon de stappen op het scherm en vul elke vraag in. Zodra alle vragen zijn beantwoord, wordt er een profiel aangemaakt op basis van de antwoorden, en kan de gebruiker of teamleider de resultaten bekijken.",
        },
        {
            id: 2,
            question: "Is de test gratis?",
            answer: "Ja, de basisversie van de test is volledig gratis. Gebruikers kunnen de test invullen zonder kosten. Voor geavanceerde functies of diepgaandere analyses kan er een betaalde optie beschikbaar zijn voor teamleiders die meer functionaliteiten nodig hebben.",
        },
        {
            id: 3,
            question: "Hoe lang duurt het om de test in te vullen?",
            answer: "Het invullen van de test duurt meestal tussen de 10 en 15 minuten. Dit kan variëren afhankelijk van hoe snel de gebruiker de vragen beantwoordt.",
        },
        {
            id: 4,
            question: "Wat gebeurt er met mijn antwoorden?",
            answer: "Jouw antwoorden worden veilig opgeslagen in ons systeem. De gegevens worden alleen gebruikt voor het maken van jouw persoonlijkheidsprofiel en zijn toegankelijk voor jou en jouw teamleider. We behandelen jouw privacy met de hoogste zorg en voldoen aan de AVG-voorschriften (Algemene Verordening Gegevensbescherming) voor gegevensbeveiliging.",
        },
        {
            id: 5,
            question: "Kan ik de test meerdere keren doen?",
            answer: "Ja, je kunt de test meerdere keren doen. Er is geen limiet aan het aantal keren dat je de test kunt invullen, en je kunt de resultaten van elke poging opslaan en vergelijken als je dat wilt.",
        },
        {
            id: 6,
            question: "Hoe krijg ik de resultaten van de test?",
            answer: "Zodra je de test hebt afgerond, worden de resultaten direct op de website getoond. Je kunt ze ook downloaden als een rapport of per e-mail ontvangen, afhankelijk van jouw voorkeur.",
        },
        {
            id: 7,
            question: "Heb ik een account nodig om de test in te vullen?",
            answer: "Ja, je moet een account aanmaken om de test in te vullen. Dit zorgt ervoor dat jouw resultaten veilig worden opgeslagen en dat je deze later opnieuw kunt bekijken. Het account helpt je ook om toegang te krijgen tot andere functies, zoals het bekijken van teamanalyses en het volgen van je voortgang.",
        },
        {
            id: 8,
            question: "Wat als ik technische problemen ondervind tijdens de test?",
            answer: "Als je technische problemen ondervindt, zoals een vastgelopen pagina of problemen met het laden van de test, kun je proberen de pagina te verversen of een andere browser te gebruiken. Als het probleem blijft bestaan, neem dan contact op met onze technische ondersteuning via HouseOf@hope.com en we helpen je zo snel mogelijk.",
        },
        {
            id: 9,
            question: "Kan ik mijn resultaten later terugzien?",
            answer: "Ja, je kunt je resultaten later terugzien via je persoonlijke dashboard. Zodra je bent ingelogd, heb je toegang tot eerdere testresultaten en kun je ze op elk moment bekijken.",
        },
        {
            id: 10,
            question: "Is de test beschikbaar op mobiele apparaten?",
            answer: "Ja, de test is volledig compatibel met mobiele apparaten en tablets. Je kunt de test invullen waar je ook bent, op elk apparaat met een internetverbinding.",
        },
        {
            id: 11,
            question: "Hoelang worden de resultaten bewaard?",
            answer: "De resultaten worden bewaard zolang je een account hebt bij House of Hope. Je kunt ze op elk moment terugzien via je persoonlijke dashboard. Als je je account verwijdert, worden alle gerelateerde gegevens, inclusief je testresultaten, permanent verwijderd.",
        },
        {
            id: 12,
            question: "Wat gebeurt er als mijn sessie halverwege stopt? Wordt mijn sessie opgeslagen?",
            answer: "Ja, je sessie wordt automatisch opgeslagen onder je account-ID. Dit betekent dat als je de sessie om wat voor reden dan ook halverwege moet stoppen, je op elk moment kunt terugkeren naar waar je was gebleven. Zodra je weer inlogt op je account, zal het systeem je voortgang laden, zodat je zonder problemen verder kunt gaan. Zorg er wel voor dat je bent ingelogd voordat je de test start om ervoor te zorgen dat je voortgang wordt opgeslagen."
        },
    ];

    for (const questions of memberQuestions) {
        await prisma.faq.upsert({
            where: { id: questions.id },
            update: {},
            create: {
                faq_question: questions.question,
                faq_description: questions.answer,
                faq_role: "member",
            },
        });

        console.log("Question: " + questions.id + " Added.");
    }

    console.log('Users created/updated:', { casper, andy, ivano });
  } catch (error) {
    console.error('Error creating users:', error);
    process.exit(1);
  }
}

async function teamSeed() {
  try {
    const casper = await prisma.user.findUnique({
      where: { email: 'casper@houseofhope.com' }
    });
    const andy = await prisma.user.findUnique({
      where: { email: 'andy@houseofhope.com' }
    });
    const ivano = await prisma.user.findUnique({
      where: { email: 'ivano@houseofhope.com' }
    });

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
        leader: { connect: { id: casper.id } }
      }
    });

    await prisma.user.update({
      where: { id: casper.id },
      data: {
        team: { connect: { id: developmentTeam.id } },
        teamRole: 'team_leader'
      }
    });

    await prisma.user.update({
      where: { id: andy.id },
      data: {
        team: { connect: { id: developmentTeam.id } },
        teamRole: 'member'
      }
    });

    await prisma.user.update({
      where: { id: ivano.id },
      data: {
        team: { connect: { id: developmentTeam.id } },
        teamRole: 'member'
      }
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
