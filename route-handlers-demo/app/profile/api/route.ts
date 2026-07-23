import { NextRequest } from 'next/dist/server/web/spec-extension/request';
export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    console.log(requestHeaders.get('Authorization'));
    return new Response("<h1>Profile API Data</h1>",{ headers: { "Content-Type": "text/html" } });
}