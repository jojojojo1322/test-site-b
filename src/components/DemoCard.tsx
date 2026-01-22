import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { PropsWithChildren, ReactNode } from "react";

type DemoCardProps = PropsWithChildren<{
  title: string;
  description?: ReactNode;
  footer?: ReactNode;
}>;

export const DemoCard = ({ title, description, footer, children }: DemoCardProps) => (
  <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: "1px solid #E5E7EB" }}>
    <Stack spacing={2}>
      <Stack spacing={0.5}>
        <Typography variant="h6">{title}</Typography>
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </Stack>
      {children}
      {footer && (
        <Typography variant="caption" color="text.secondary">
          {footer}
        </Typography>
      )}
    </Stack>
  </Paper>
);
