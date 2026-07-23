import { NextRequest } from 'next/dist/server/web/spec-extension/request';
import { headers, cookies } from 'next/headers';
export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    console.log(requestHeaders.get('Authorization'));
    const requestCookies = request.cookies;
    console.log(requestCookies.get('theme'));
    const cookiesStore =  await cookies();
    console.log(cookiesStore.get('theme'));
    cookiesStore.set('resultsPerPage','20');
    return new Response("<h1>Profile API Data</h1>",{ headers: { "Content-Type": "text/html" ,
    "Set-Cookie":"theme=dark;" }});
}