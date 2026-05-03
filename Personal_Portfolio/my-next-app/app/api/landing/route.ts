import { connectDB } from '@/lib/db/mongoose';
import { Landing } from '@/lib/db/models/Landing';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();

    // Fetch the single landing page data document
    let landingData = await Landing.findOne().lean().exec();

    // If it doesn't exist, create a default one
    if (!landingData) {
      const defaultLanding = new Landing({});
      await defaultLanding.save();
      landingData = defaultLanding.toObject();
    }

    return NextResponse.json(
      {
        success: true,
        data: landingData,
        message: 'Landing data fetched successfully',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error fetching landing data:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Failed to fetch landing data',
      },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    // Find the first document and update it, or create if it doesn't exist
    let landingData = await Landing.findOne();

    if (!landingData) {
      landingData = new Landing(body);
      await landingData.save();
    } else {
      landingData.name = body.name ?? landingData.name;
      landingData.rolePart1 = body.rolePart1 ?? landingData.rolePart1;
      landingData.rolePart2 = body.rolePart2 ?? landingData.rolePart2;
      landingData.description = body.description ?? landingData.description;
      await landingData.save();
    }

    return NextResponse.json(
      {
        success: true,
        data: landingData,
        message: 'Landing data updated successfully',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error updating landing data:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Failed to update landing data',
      },
      { status: 500 }
    );
  }
}
