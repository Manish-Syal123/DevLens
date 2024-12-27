export async function uploadFile(
  file: File,
  setProgress?: (progress: number) => void,
): Promise<string> {
  const CLOUDINARY_URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL as string;
  const UPLOAD_PRESET = process.env
    .NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string;

  if (!CLOUDINARY_URL || !UPLOAD_PRESET) {
    throw new Error("Cloudinary environment variables not set");
  }
  return new Promise<string>((resolve, reject) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", CLOUDINARY_URL);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable && setProgress) {
        const progress = Math.round((event.loaded / event.total) * 100);
        setProgress(progress);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        resolve(response.secure_url as string); // URL of the uploaded file
      } else {
        console.log(xhr.responseText);

        reject(new Error("Failed to upload file to Cloudinary"));
      }
    };

    xhr.onerror = () => {
      console.log(xhr.responseText);
      reject(new Error("Network error during file upload"));
    };

    xhr.send(formData);
  });
}
