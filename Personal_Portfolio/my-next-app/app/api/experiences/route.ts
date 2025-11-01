import { connectDB } from '@/lib/db/mongoose';
import { Experience } from '@/lib/db/models/Experience';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();

    // Fetch all experiences with lean() for better performance
    const experiences = await Experience.find({})
      .sort({ createdAt: -1 })
      .lean()
      .exec();

    return NextResponse.json(
      {
        success: true,
        data: experiences,
        message: 'Experiences fetched successfully',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error fetching experiences:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Failed to fetch experiences',
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
    if (!body.role || !body.company || !body.description || !body.date || !body.techUsed) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required fields: role, company, description, date, techUsed',
        },
        { status: 400 }
      );
    }

    // Create new experience
    const experience = new Experience({
      role: body.role,
      company: body.company,
      description: body.description,
      date: body.date,
      techUsed: body.techUsed,
    });

    await experience.save();

    return NextResponse.json(
      {
        success: true,
        data: experience,
        message: 'Experience created successfully',
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating experience:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Failed to create experience',
      },
      { status: 500 }
    );
  }
}
