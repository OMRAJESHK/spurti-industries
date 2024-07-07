import { getFormUrl } from "@/modules/common/contactUs/constants";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const formUrl = getFormUrl(query);
  const param = {
    [fields.name]: query.name,
    [fields.email]: query.email,
    [fields.message]: query.message,
  };
  const rawResponse = await fetch(formUrl, {
    method: "POST",
    body: JSON.stringify(param),
  });
  const content = await rawResponse.json();
  console.log("content - success", content);

  return NextResponse.json({
    data: "No Data",
  });
}
