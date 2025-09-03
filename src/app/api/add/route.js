import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { addSchool } from "../../../lib/server/services/addSchool.js";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get("name")?.toString();
    const address = formData.get("address")?.toString();
    const city = formData.get("city")?.toString();
    const state = formData.get("state")?.toString();
    const contact = formData.get("contact")?.toString();
    const email = formData.get("email")?.toString();
    const file = formData.get("image");

    let imageUrl = null;
    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadDir = path.join(process.cwd(), "public", "schoolImages");

      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const fileName = `${Date.now()}-${file.name}`;
      const filePath = path.join(uploadDir, fileName);

      fs.writeFileSync(filePath, buffer);

      imageUrl = `/schoolImages/${fileName}`;
    }

    const newSchool = await addSchool({
      name,
      address,
      city,
      state,
      contact,
      image: imageUrl,
      email_id: email,
    });

    return NextResponse.json(
      { message: "School added successfully", newSchool },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to add school" },
      { status: 500 }
    );
  }
}
