import React from "react";

export const Card = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const cardStyle: React.CSSProperties = {
        padding: "100px",
        margin: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #ddd",
    };

    return <div style={cardStyle}>{children}</div>;
};