import styled from 'styled-components';

export const List = styled.li`
  border-bottom: 1px solid gray;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  cursor: pointer;
`;
export const Box = styled.div`
  padding: 20px 10px;
`;
export const Text = styled.span<{ title?: string }>`
  font-size: 20px;
  font-weight: ${({ title }) => (title ? 'bold' : 'normal')};
  margin-right: 5px;
`;
