/** @format */

import connectDB from "@/db";
import { CourseModal } from "@/modal/course-modal";
import { NextResponse } from "next/server";

connectDB();

/*** Api for GET All course ***/
export async function GET(request) {
  try {
    let data = await CourseModal.find();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 400 }
    );
  }
}

/*** Api for Create new course ***/
export async function POST(request) {
  try {
    let data = await request.json();
    let newCourse = CourseModal(data);
    await newCourse.save();
    return NextResponse.json({
      Msg: "new course has been added",
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 400 }
    );
  }
}
