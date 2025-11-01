import { connectDB } from '@/lib/db/mongoose';
import { Project } from '@/lib/db/models/Project';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    const project = await Project.findById(id).lean().exec();

    if (!project) {
      return NextResponse.json(
        {
          success: false,
          message: 'Project not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: project,
        message: 'Project fetched successfully',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error fetching project:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Failed to fetch project',
      },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await req.json();

    // Find and update the project
    const project = await Project.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    }).lean();

    if (!project) {
      return NextResponse.json(
        {
          success: false,
          message: 'Project not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: project,
        message: 'Project updated successfully',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error updating project:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Failed to update project',
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    const project = await Project.findByIdAndDelete(id).lean();

    if (!project) {
      return NextResponse.json(
        {
          success: false,
          message: 'Project not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: project,
        message: 'Project deleted successfully',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error deleting project:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Failed to delete project',
      },
      { status: 500 }
    );
  }
}
