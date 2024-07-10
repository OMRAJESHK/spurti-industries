import { getFormUrl } from "@/modules/common/contactUs/constants";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  const formUrl = getFormUrl(data);

  const formResponse = await fetch(formUrl, { method: "POST" });
  if (formResponse.status === 200) {
    return NextResponse.json({
      status: 200,
      message: "Response submitted Successfully",
    });
  } else {
    return NextResponse.json({
      status: 500,
      message: "Invalid Input",
    });
  }
}
