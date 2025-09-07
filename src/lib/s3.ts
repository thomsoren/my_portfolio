/**
 * Utility functions for S3 asset URLs
 */

/**
 * Get the base S3 URL from environment variables
 */
function getS3BaseUrl(): string {
  const baseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL;
  
  if (!baseUrl) {
    console.warn('NEXT_PUBLIC_S3_BASE_URL not configured, falling back to local assets');
    return '';
  }
  
  // Ensure the URL has a protocol
  if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
    return `https://${baseUrl}`;
  }
  
  return baseUrl;
}

/**
 * Convert a local asset path to an S3 URL
 * @param path - The local path (e.g., "/images/logo.png" or "images/logo.png")
 * @returns The S3 URL or the original path if S3 is not configured
 */
export function getAssetUrl(path: string): string {
  const s3BaseUrl = getS3BaseUrl();
  
  // If S3 is not configured, return the original path
  if (!s3BaseUrl) {
    return path;
  }
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // Construct S3 URL
  return `${s3BaseUrl}/${cleanPath}`;
}

/**
 * Get a video URL from S3
 * @param filename - The video filename (e.g., "video.mp4")
 * @returns The S3 video URL
 */
export function getVideoUrl(filename: string): string {
  return getAssetUrl(`videos/${filename}`);
}

/**
 * Get an image URL from S3
 * @param filename - The image filename (e.g., "image.png")
 * @returns The S3 image URL
 */
export function getImageUrl(filename: string): string {
  return getAssetUrl(filename);
}

/**
 * Get a logo URL from S3
 * @param filename - The logo filename (e.g., "logo.png")
 * @returns The S3 logo URL
 */
export function getLogoUrl(filename: string): string {
  return getAssetUrl(`logos/${filename}`);
}