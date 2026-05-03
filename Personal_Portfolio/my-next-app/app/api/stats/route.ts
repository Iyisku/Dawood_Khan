import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongoose';
import { Visitor } from '@/lib/db/models/Visitor';
import { Project } from '@/lib/db/models/Project';
import { Experience } from '@/lib/db/models/Experience';

export async function GET() {
  try {
    await connectDB();

    const totalUniqueVisitors = await Visitor.countDocuments();
    
    const viewStats = await Visitor.aggregate([
      {
        $group: {
          _id: null,
          totalViews: { $sum: '$views' }
        }
      }
    ]);

    const totalViews = viewStats.length > 0 ? viewStats[0].totalViews : 0;
    const totalProjects = await Project.countDocuments();
    const totalExperiences = await Experience.countDocuments();

    return NextResponse.json({
      totalUniqueVisitors,
      totalViews,
      totalProjects,
      totalExperiences
    });
  } catch (error: any) {
    console.error('Error fetching stats:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
