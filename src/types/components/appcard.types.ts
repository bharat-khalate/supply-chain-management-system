import {  CardProps } from "@mui/material";
import {  CardHeaderProps } from "@mui/material";

export type TAppCardProps = CardProps & {
    children: React.ReactNode;
};
export type TAppCardHeaderProps = CardHeaderProps & {
  children?: React.ReactNode;
};