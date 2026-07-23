import {comments} from './data';

export async function GET() {
    return Response.json({comments});
        
}
export async function POST(request: Request) {
    const data = await request.json();
    const newComment = {
        id: new Date().toISOString(),
        text: data.text,
    };
    comments.push(newComment);
    return Response.json({message: 'Added comment', comment: newComment});
}//this is a route handler for the comments endpoint. It handles GET requests to retrieve comments and POST requests to add new comments. The comments are stored in an in-memory array, and each new comment is assigned a unique ID based on the current timestamp.