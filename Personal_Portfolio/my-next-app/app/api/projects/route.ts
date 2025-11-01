import { connectDB } from '@/lib/db/mongoose';
import { Project } from '@/lib/db/models/Project';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();

    // Fetch all projects with lean() for better performance
    const projects = await Project.find({})
      .sort({ createdAt: -1 })
      .lean()
      .exec();

    return NextResponse.json(
      {
        success: true,
        data: projects,
        message: 'Projects fetched successfully',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Failed to fetch projects',
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    // Validate required fields
    if (!body.title || !body.description || !body.link) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required fields: title, description, link',
        },
        { status: 400 }
      );
    }

    // Create new project
    const project = new Project({
      title: body.title,
      description: body.description,
      image: body.image || null,
      link: body.link,
      status: body.status || 'Active',
    });

    await project.save();

    return NextResponse.json(
      {
        success: true,
        data: project,
        message: 'Project created successfully',
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Failed to create project',
      },
      { status: 500 }
    );
  }
}
