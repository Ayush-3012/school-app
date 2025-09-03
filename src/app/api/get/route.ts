import { NextResponse } from "next/server";
import { getSchool } from "../../../lib/server/services/getSchool";

export async function GET() {
  try {
    const schools = await getSchool();
    return NextResponse.json(schools);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to retrieve schools" },
      { status: 500 }
    );
  }
}
