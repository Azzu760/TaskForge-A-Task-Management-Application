import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  // Simulate fetching project data
  const projects = JSON.parse(localStorage.getItem("projects")) || {};
  const project = projects[id] || null;

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json({ project });
}
