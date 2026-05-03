import { connectDB } from '@/lib/db/mongoose';
import { About } from '@/lib/db/models/About';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();

    let aboutData = await About.findOne().lean().exec();

    if (!aboutData) {
      const defaultAbout = new About({});
      await defaultAbout.save();
      aboutData = defaultAbout.toObject();
    }

    return NextResponse.json(
      {
        success: true,
        data: aboutData,
        message: 'About data fetched successfully',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error fetching about data:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Failed to fetch about data',
      },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    let aboutData = await About.findOne();

    if (!aboutData) {
      aboutData = new About(body);
      await aboutData.save();
    } else {
      aboutData.introText = body.introText ?? aboutData.introText;
      aboutData.detailedBio = body.detailedBio ?? aboutData.detailedBio;
      await aboutData.save();
    }

    return NextResponse.json(
      {
        success: true,
        data: aboutData,
        message: 'About data updated successfully',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error updating about data:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Failed to update about data',
      },
      { status: 500 }
    );
  }
}
