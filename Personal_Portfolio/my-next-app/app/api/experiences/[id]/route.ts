import { connectDB } from '@/lib/db/mongoose';
import { Experience } from '@/lib/db/models/Experience';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    const experience = await Experience.findById(id).lean().exec();

    if (!experience) {
      return NextResponse.json(
        {
          success: false,
          message: 'Experience not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: experience,
        message: 'Experience fetched successfully',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error fetching experience:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Failed to fetch experience',
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

    // Find and update the experience
    const experience = await Experience.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    }).lean();

    if (!experience) {
      return NextResponse.json(
        {
          success: false,
          message: 'Experience not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: experience,
        message: 'Experience updated successfully',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error updating experience:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Failed to update experience',
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

    const experience = await Experience.findByIdAndDelete(id).lean();

    if (!experience) {
      return NextResponse.json(
        {
          success: false,
          message: 'Experience not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: experience,
        message: 'Experience deleted successfully',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error deleting experience:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Failed to delete experience',
      },
      { status: 500 }
    );
  }
}
