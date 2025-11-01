const mongoose = require('mongoose');
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') });

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

// Define the Project schema
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, default: '' },
  link: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['Active', 'Completed', 'In Progress', 'Archived'],
    default: 'Active'
  }
}, { timestamps: true });

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

async function migrateProjects() {
  try {
    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✓ Connected to MongoDB');

    // Add image field to all projects that don't have it
    console.log('Migrating projects to add image field...');
    const result = await Project.updateMany(
      { image: { $exists: false } }, // Find projects without image field
      { $set: { image: '' } } // Set empty string as default
    );

    console.log(`✓ Updated ${result.modifiedCount} projects`);
    console.log('✓ Migration complete');

    // Show all projects
    const projects = await Project.find({}).lean();
    console.log('\nAll projects:');
    projects.forEach((project) => {
      console.log(`- ${project.title} (image: ${project.image || 'empty'})`);
    });

    await mongoose.disconnect();
    console.log('\n✓ Disconnected from MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('✗ Migration failed:', error.message);
    process.exit(1);
  }
}

// Run migration
migrateProjects();
