import { comments } from '../../comments/data';

export async function GET() {
  return Response.json({ comments });
}

export async function POST(request: Request) {
  const body = await request.json();

  if (!body?.text) {
    return Response.json({ message: 'text is required' }, { status: 400 });
  }

  const newComment = {
    id: `c${comments.length + 1}`,
    text: body.text,
  };

  comments.push(newComment);

  return Response.json(newComment, { status: 201 });
}