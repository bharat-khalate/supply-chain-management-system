import {
    Card as HeroCard,
    CardContent as HeroCardContent,
    CardFooter as HeroCardFooter,
    CardHeader as HeroCardHeader
} from "@heroui/react";
import { TAppCardHeaderProps, TAppCardProps } from "@/types";
import { ReactNode } from "react";
export function AppCard({ children, ...props }: TAppCardProps) {
  return (
    <HeroCard
      {...props}
      className={`rounded-xl shadow-md p-2 ${props.className || ""}`}
    >
      {children}
    </HeroCard>
  );
}
export function AppCardContent({ children, ...props }: any) {
  return <HeroCardContent {...props}>{children}</HeroCardContent>;
}
export function AppCardHeader({
  children,
  ...props
}: TAppCardHeaderProps & { children?: ReactNode }) {
  return (
    <HeroCardHeader {...props}>
      {typeof children === "string" ? <span>{children}</span> : children}
    </HeroCardHeader>
  );
}
export function AppCardFooter({ children, ...props }: any) {
  return <HeroCardFooter {...props}>{children}</HeroCardFooter>;
}
const Card = Object.assign(AppCard, {
  Header: AppCardHeader,
  Content: AppCardContent,
  Footer: AppCardFooter
});
export default Card;