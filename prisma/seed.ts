import { PrismaClient, Role } from '@prisma/client';
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

    await prisma.role.upsert({
      where: { name: 'Admin' },
      update: {},
      create: {
        name: 'Admin'
      }
    });

    const teamLeaderRole = await prisma.role.upsert({
      where: { name: 'Teamleader' },
      update: {},
      create: {
        name: 'Teamleader'
      }
    });

    const memberRole = await prisma.role.upsert({
      where: { name: 'Member' },
      update: {},
      create: {
        name: 'Member'
      }
    });

    const casper = await prisma.user.upsert({
      where: { email: 'casper@houseofhope.com' },
      update: {},
      create: {
        firstname: 'Casper',
        lastname: 'Kizewski',
        email: 'casper@houseofhope.com',
        password: hash,
        role: { connect: { id: teamLeaderRole.id } }
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
        role: { connect: { id: memberRole.id } }
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
        role: { connect: { id: memberRole.id } }
      }
    });

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
        team: { connect: { id: developmentTeam.id } }
      }
    });

    await prisma.user.update({
      where: { id: andy.id },
      data: {
        team: { connect: { id: developmentTeam.id } }
      }
    });

    await prisma.user.update({
      where: { id: ivano.id },
      data: {
        team: { connect: { id: developmentTeam.id } }
      }
    });

    console.log('Team created/updated:', developmentTeam);
  } catch (error) {
    console.error('Error seeding team:', error);
    process.exit(1);
  }
}

async function permissionSeed() {
  const teamleaderRole = await prisma.role.upsert({
    where: { name: 'Teamleader' },
    update: {},
    create: {
      name: 'Teamleader'
    }
  });

  const adminRole = await prisma.role.upsert({
    where: { name: 'Admin' },
    update: {},
    create: {
      name: 'Admin'
    }
  });

  await prisma.permission.createMany({
    data: [
      { name: 'isPro' }, // eventually for the paid tier
      { name: 'isVerified' }, // email verified
      { name: 'edit_team_list' }, // is a teamleader and is able to invite/remove members
      { name: 'delete_team' }, // is able to delete the team as a teamleader
      { name: 'isAdmin' } // admin is able to do everything, but isn't allowed to look at the teams page.
    ],
    skipDuplicates: true
  });

  const updatePermissions = await prisma.permission.updateMany({
    where: {
      name: {
        in: ['edit_team_list', 'delete_team']
      }
    },
    data: {
      roleId: teamleaderRole.id
    }
  });

  const permissionsToAssignToTeamleader = await prisma.permission.findMany({
    where: {
      name: {
        in: ['edit_team_list', 'delete_team']
      }
    }
  });

  const permissionsToAssignToAdmin = await prisma.permission.findMany({
    where: {
      name: {
        in: ['isAdmin']
      }
    }
  });

  const updatedTeamLeaderRole = await prisma.role.update({
    where: { id: teamleaderRole.id },
    data: {
      permission: {
        connect: permissionsToAssignToTeamleader.map((permission) => ({
          id: permission.id
        }))
      }
    }
  });

  const updatedAdminRole = await prisma.role.update({
    where: { id: adminRole.id },
    data: {
      permission: {
        connect: permissionsToAssignToAdmin.map((permission) => ({
          id: permission.id
        }))
      }
    }
  });

  console.log('Permissions assigned to Admin:', updatedAdminRole);
  console.log('Permissions assigned to Teamleader:', updatedTeamLeaderRole);
}

async function seed() {
  await main();
  await teamSeed();
  await permissionSeed();
}

seed()
  .catch((error) => {
    console.error('Error in seeding process:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
