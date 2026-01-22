import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { PropsWithChildren, ReactNode } from "react";

type LayoutProps = PropsWithChildren<{
  header?: ReactNode;
  subtitle?: ReactNode;
}>;

export const Layout = ({ children, header, subtitle }: LayoutProps) => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <Stack spacing={4}>
      {(header || subtitle) && (
        <Stack spacing={0.5}>
          {header && (
            <Typography variant="h4" component="h1">
              {header}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="subtitle1" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Stack>
      )}
      {children}
    </Stack>
  </Container>
);
