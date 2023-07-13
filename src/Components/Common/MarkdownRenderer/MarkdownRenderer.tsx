import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CoreOptions } from 'react-markdown/lib/react-markdown';
import { MarkdownStyle } from './MarkdownRenderer.style';

export default function MarkdownRenderer({ children }: CoreOptions) {
  return (
    <MarkdownStyle>
      <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown-body">
        {children}
      </ReactMarkdown>
    </MarkdownStyle>
  );
}
