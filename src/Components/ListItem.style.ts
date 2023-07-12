import styled from 'styled-components';

export const List = styled.li`
  border-bottom: 1px solid gray;
`;
export const Box = styled.div`
  padding: 20px;
`;
export const Text = styled.span<{ title?: string }>`
  font-size: 20px;
  font-weight: ${({ title }) => (title ? 'bold' : 'normal')};
  margin-right: 5px;
`;
