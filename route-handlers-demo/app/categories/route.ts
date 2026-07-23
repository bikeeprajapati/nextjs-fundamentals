export const  dynamic = 'force-static';
export async function GET() {
    const categories = [
        { id: 'c1', name: 'Technology' },
        { id: 'c2', name: 'Science' },
        { id: 'c3', name: 'Art' },
    ];
    return Response.json({ categories });
}