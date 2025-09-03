import prisma from "../../../lib/prisma";

export async function getSchool() {
  return await prisma.school.findMany();
}
