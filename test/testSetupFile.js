
window.S3_URL = 'https://cdn.thewickedweb.dev';
window.S3_IMAGES_PATH = '/images';
window.S3_IMAGES_GALLERY_PATH = '/gallery';
window.S3_RESUME_PATH = '/resume';
window.S3_FLAGS_PATH = '/flags';
window.S3_AVATAR_PATH = '/avatar';
window.S3_LOGOS_PATH = '/logo';
window.S3_SOCIAL_PATH = '/social';
window.S3_ABOUT_SITE_PATH = '/how-i-made-this-site';
window.S3_RESUME_PDF = '/resume/stephen-young-resume.pdf';

window.BREAKPOINTS = {
  mobile: 500,
  tablet: 800,
  desktop: 1100,
};

window.scrollTo = jest.fn();
window.addEventListener = jest.fn((event, cb) => cb);
window.removeEventListener = jest.fn((event, cb) => cb);
