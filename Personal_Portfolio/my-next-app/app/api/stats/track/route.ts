import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongoose';
import { Visitor } from '@/lib/db/models/Visitor';

export async function POST(request: Request) {
  try {
    const { visitorId } = await request.json();

    if (!visitorId) {
      return NextResponse.json({ error: 'Visitor ID is required' }, { status: 400 });
    }

    await connectDB();

    // Find visitor by ID or create a new one
    const visitor = await Visitor.findOneAndUpdate(
      { visitorId },
      { 
        $inc: { views: 1 },
        $set: { lastVisit: new Date() }
      },
      { upsert: true, new: true }
    );

    return NextResponse.json({ 
      success: true, 
      views: visitor.views,
      isNew: visitor.views === 1 
    });
  } catch (error: any) {
    console.error('Error tracking visitor:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
