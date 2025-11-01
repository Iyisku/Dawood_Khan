'use client';

import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';

interface ImageUploadWidgetProps {
  onUpload: (imageUrl: string) => void;
  value?: string;
}

export default function ImageUploadWidget({ onUpload, value }: ImageUploadWidgetProps) {
  const [isLoading, setIsLoading] = useState(false);
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (!cloudName) {
    return (
      <div className="w-full bg-red-900 border border-red-700 rounded px-3 py-2 text-red-300 text-sm">
        Error: Cloudinary is not configured. Please check your environment variables.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <CldUploadWidget
        cloudName={cloudName}
        uploadPreset="Portfolio"
        onSuccess={(result: any) => {
          const imageUrl = result.info.secure_url;
          onUpload(imageUrl);
          setIsLoading(false);
        }}
        onError={() => {
          setIsLoading(false);
          alert('Image upload failed');
        }}
        onOpen={() => setIsLoading(true)}
      >
        {({ open }) => (
          <button
            type="button"
            onClick={() => open()}
            disabled={isLoading}
            className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white hover:border-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Uploading...' : value ? 'Change Image' : 'Upload Image'}
          </button>
        )}
      </CldUploadWidget>

      {value && (
        <div className="relative w-full h-32 bg-gray-900 rounded border border-gray-700 overflow-hidden">
          <img
            src={value}
            alt="Project preview"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}
