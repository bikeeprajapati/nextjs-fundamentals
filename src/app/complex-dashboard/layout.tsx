export default function ComplexDashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login
}: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
}) {
    const isLoggedIn = true; // Replace with your actual authentication logic

    
    
    return isLoggedIn ? (
        <>
            <div>{children}</div>{/*content from page.tsx will be rendered here*/}
            <div>{users}</div>{/*content from user-analytics.tsx will be rendered here*/}
            <div>{revenue}</div>{/*content from revenue-metrics.tsx will be rendered here*/}
            <div>{notifications}</div>{/*content from notifications.tsx will be rendered here*/}
        </>
    ): (
       login
    );
}