import { PropsWithChildren } from "react";
import styled from "styled-components";

export default function AdminLayout({ children }: PropsWithChildren) {
  return <AdminLayoutWrapper>{children}</AdminLayoutWrapper>;
}

const AdminLayoutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
`;
