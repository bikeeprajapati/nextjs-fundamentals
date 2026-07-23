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
}