import { ComponentProps } from "react";
import { Card as HeroCard, CardHeader as HeroCardHeader } from "@heroui/react";

export type TAppCardProps = ComponentProps<typeof HeroCard>;
export type TAppCardHeaderProps = ComponentProps<typeof HeroCardHeader>;