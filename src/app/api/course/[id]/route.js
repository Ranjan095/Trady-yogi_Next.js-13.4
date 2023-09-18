/** @format */

import { CourseModal } from "@/modal/course-modal";
import { NextResponse } from "next/server";

/*** Api for GET course by ID ***/
export async function GET(request, { params }) {
  try {
    let { id } = params;
    let course = await CourseModal.findById(id);
    return NextResponse.json(course);
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 400 }
    );
  }
}

/*** Api for update course by ID ***/
export async function PATCH(request, { params }) {
  try {
    let updated = await request.json();
    let { id } = params;
    await CourseModal.findByIdAndUpdate({ _id: id }, updated);
    return NextResponse.json({
      Msg: "course has been updated",
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

/** Api for DELETE course by ID **/

export async function DELETE(request, { params }) {
  try {
    let { id } = params;
    await CourseModal.findByIdAndDelete({ _id: id });
    return NextResponse.json({
      Msg: "course has been deleted",
      status: true,
    });
  } catch (error) {
    return NextResponse.json(
      {
        msg: error.message,
      },
      { status: 400 }
    );
  }
}
