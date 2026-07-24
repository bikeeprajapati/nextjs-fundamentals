import { serverSideFunction } from '@/utils/server-utils';
export default function ServerRoutePage() {
    const result=  serverSideFunction();
    return (
        <div>
            <h1>Server Route Page</h1>
            <p>This page demonstrates server route handling in Next.js.</p>
            <p>Result: {result}</p>
        </div>
    );
}
