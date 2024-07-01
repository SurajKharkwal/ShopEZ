import { PrismaClient, Role } from "@prisma/client";

export default async function createOrDeleteUser(payload: any) {
  const prisma = new PrismaClient();
  console.log(payload.data);
  if (payload.data == undefined || null) return new Error("Invalid Data");
  try {
    if (payload.type == "user.created") {
      const newUser = await prisma.user.create({
        data: {
          id: payload.data.id,
          name: payload.data.first_name + payload.data.last_name,
          email: payload.data.email_addresses[0].email_address,
        },
      });
      console.log(newUser);
      const userCount = await prisma.user.count();
      if (userCount === 1) {
        const updatedRole = await prisma.user.update({
          where: {
            id: payload.data.id,
          },
          data: {
            role: Role.Admin,
          },
        });
        console.log(updatedRole);
      }
    } else if (payload.type === "user.deleted") {
      const delUser = await prisma.user.delete({
        where: {
          id: payload.data.id,
        },
      });
      console.log(delUser);
    } else {
      throw new Error("Unknow Event type");
    }
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
}
