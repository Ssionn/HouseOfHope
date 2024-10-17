import { $Enums, Prisma, PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import IntFilter = Prisma.IntFilter;
import Role = $Enums.Role;

const prisma = new PrismaClient();

async function main() {}

export async function checkUserExists(email: string) {
  const user = await prisma.user.findUnique({
    where: { email }
  });

  if (!user) {
    return;
  }

  return user;
}

export async function getUserTeamWithTeamLeader(
  teamId: number | IntFilter<'Team'>
) {
  const team = await prisma.team.findFirst({
    where: { id: teamId },
    include: {
      leader: {
        select: {
          firstname: true,
          lastname: true,
          email: true
        }
      },
      members: {
        select: {
          id: true,
          firstname: true,
          lastname: true,
          email: true,
          teamRole: true
        }
      }
    }
  });

  if (team) {
    team.members = team.members.map((member) => ({
      ...member,
      teamRole: member.teamRole
        ? (member.teamRole
            .replace('_', '')
            .replace(/(^\w|\s\w)/g, (m: string) => m.toUpperCase()) as Role)
        : null
    }));
  }

  return team;
}

export async function createNewUser(
  formFirstname: string,
  formLastname: string,
  formEmail: string,
  formPassword: string
) {
  const saltRounds = 12;

  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(formPassword, salt);

  const createUser = await prisma.user.create({
    data: {
      firstname: formFirstname,
      lastname: formLastname,
      email: formEmail,
      password: hashedPassword,
      role: 'member'
    }
  });

  return createUser;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
