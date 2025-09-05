import prisma from "../../../lib/prisma";


export async function getSchoolById(id) {
  return await prisma.school.findUnique({
    where: { id },
  });
}
