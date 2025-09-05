import { NextResponse } from "next/server";
import { addSchool } from "../../../lib/server/services/addSchool.js";
import cloudinary from "../../../lib/cloudinary.js";

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

      const base64String = buffer.toString("base64");
      const dataURI = `data:${file.type};base64,${base64String}`;

      const uploadRes = await cloudinary.uploader.upload(dataURI, {
        folder: "schoolImages",
      });

      imageUrl = uploadRes.secure_url;
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
