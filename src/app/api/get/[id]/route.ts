import { NextResponse } from "next/server";
import { getSchoolById } from "../../../../lib/server/services/getSchoolById";

export async function GET(_, { params }) {
  try {
    const { id } = await params;
    const school = await getSchoolById(id);

    if (!school) {
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    }

    return NextResponse.json(school);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to retrieve school by id" },
      { status: 500 }
    );
  }
}
