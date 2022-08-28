import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createUser(email: string, password: string, name: string) {
  const user =  await prisma.user.findUnique({
    where: {
      email: email
    }
  })
  if(user) return user
  await prisma.user.create({
    data:{
      email,
      name,
      password,
    }
  })
}

export async function getAllUsers() {
  const allUsers = await prisma.user.findMany({
    select: {name: true, email: true}
  })
  return allUsers;
};

export async function verifyUserAlreadExist(email: string) {
  
};