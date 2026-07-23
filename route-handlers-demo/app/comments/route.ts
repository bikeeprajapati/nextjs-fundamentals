import { NextRequest } from 'next/dist/server/web/spec-extension/request';
import { comments } from '../../comments/data';

export async function GET(request: NextRequest) {
  const SearchParams = request.nextUrl.searchParams;
  const query = SearchParams.get('query');
  const filteredComments = query? comments.filter((comment) => comment.text.toLowerCase().includes(query.toLowerCase())) : comments;
  return Response.json({ filteredComments });
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