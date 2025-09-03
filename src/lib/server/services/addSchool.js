import prisma from "../../../lib/prisma";

export async function addSchool(data) {
  return await prisma.school.create({
    data: {
      ...data,
    },
  });
}
