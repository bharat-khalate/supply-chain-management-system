import { Card as MuiCard, CardProps } from "@mui/material";
import { CardContent, CardContentProps } from "@mui/material";
import { CardHeader, CardHeaderProps } from "@mui/material";
import { CardActions, CardActionsProps } from "@mui/material";
import React from "react";

type AppCardProps = CardProps & {
    children: React.ReactNode;
};



type AppCardHeaderProps = CardHeaderProps & {
  children?: React.ReactNode;
};


export function AppCard({ children, ...props }: AppCardProps) {
    return (
        <MuiCard
            {...props}
            sx={{
                borderRadius: 3,
                boxShadow: 2,
                p: 1
            }}
        >
            {children}
        </MuiCard>
    );
}


export function AppCardContent({ ...props }: CardContentProps) {
    return <CardContent {...props} />;
}



export function AppCardHeader({ children, ...props }: AppCardHeaderProps) {
  return <CardHeader title={children} {...props} />;
}


export function AppCardFooter({
    ...props
}: CardActionsProps) {
    return <CardActions  {...props} />;
}


const Card = Object.assign(AppCard, {
    Header: AppCardHeader,
    Content: AppCardContent,
    Footer: AppCardFooter
});

export default Card;


