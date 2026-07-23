import {NextResponse} from 'next/server';
import{NextRequest} from 'next/server';

export function middleware(request: NextRequest) {
    const response = NextResponse.next(); 
    const themePreference = request.cookies.get('theme')
    if (!themePreference) {
        response.cookies.set('theme', 'light');
    }
    return response;

    //return NextResponse.redirect(new URL("/", request.url));
    // if(request.nextUrl.pathname.startsWith("/profile")){
    //     return NextResponse.redirect(new URL("/login", request.nextUrl));
    // }

}
// export const config = {
//     matcher: "/profile",

// }