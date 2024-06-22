import { database, storage, ID } from "@/libs/AppWriteClient"

const useCreatePost = async (file: File, userId: string, caption: string) => {
    let videoId = Math.random().toString(36).slice(2, 22);

    try {
        // Log environment variables to ensure they are set correctly
        console.log("Database ID:", process.env.NEXT_PUBLIC_DATABASE_ID);
        console.log("Collection ID:", process.env.NEXT_PUBLIC_COLLECTION_ID_POST);
        console.log("Bucket ID:", process.env.NEXT_PUBLIC_BUCKET_ID);

        // Create document in the database
        const document = await database.createDocument(
            String(process.env.NEXT_PUBLIC_DATABASE_ID), 
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_POST), 
            ID.unique(), 
            {
                user_id: userId,
                text: caption,
                video_url: videoId,
                created_at: new Date().toISOString(),
            }
        );

        console.log("Document created:", document);

        // Upload file to storage
        const uploadedFile = await storage.createFile(
            String(process.env.NEXT_PUBLIC_BUCKET_ID), 
            videoId, 
            file
        );

        console.log("File uploaded:", uploadedFile);

    } catch (error) {
        // Log specific error details for troubleshooting
        console.error("Error creating post or uploading video:", error);
        throw error;
    }
}

export default useCreatePost;
