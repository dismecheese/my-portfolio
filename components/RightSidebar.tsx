"use client";

import { useRef, useEffect, KeyboardEvent } from 'react';
import { VscClearAll } from 'react-icons/vsc';
import ReactMarkdown from 'react-markdown';
import TextareaAutosize from 'react-textarea-autosize';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useChat, Message } from 'ai/react';
import { usePathname, useRouter } from 'next/navigation';
import styles from '@/styles/RightSidebar.module.css';

const RightSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages, error } = useChat({ 
    body: { pathname },
    maxSteps: 5,
    onToolCall({ toolCall }) {
      if (toolCall.toolName === 'navigate') {
        const path = (toolCall.args as any).path;
        router.push(path);
        return "Navigated successfully to " + path;
      }
    }
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className={styles.rightSidebar}>
      <div className={styles.header}>
        <span className={styles.title}>GITHUB COPILOT</span>
        <button
          className={styles.iconButton}
          onClick={clearChat}
          title="Clear Chat"
        >
          <VscClearAll size={16} />
        </button>
      </div>

      <div className={styles.messageList}>
        {messages.length === 0 && (
          <div className={styles.emptyState}>
            Ask me anything about Marzella&apos;s portfolio.
          </div>
        )}
        {messages.map((msg: Message, idx: number) => (
          <div
            key={idx}
            className={`${styles.message} ${
              msg.role === 'user' ? styles.user : styles.assistant
            }`}
          >
            <div className={styles.messageRole}>
              {msg.role === 'user' ? 'You' : 'GitHub Copilot'}
            </div>
            <div className={styles.messageContent}>
              {msg.content && (
                <div className={styles.markdownBody}>
                  <ReactMarkdown
                    components={{
                      code({ node, inline, className, children, ...props }: any) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                          <SyntaxHighlighter
                            style={vscDarkPlus as any}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                          >
                            {String(children).replace(/\n$/, '')}
                          </SyntaxHighlighter>
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      }
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                </div>
              )}
              {msg.toolInvocations && msg.toolInvocations.map((tool, i) => (
                <div key={i} style={{ color: '#8f93a2', fontStyle: 'italic', fontSize: '12px', marginTop: msg.content ? '8px' : '0' }}>
                  {tool.toolName === 'navigate' ? `Navigating to ${(tool.args as any).path}...` : `Running tool ${tool.toolName}...`}
                </div>
              ))}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className={`${styles.message} ${styles.assistant}`}>
            <div className={styles.messageRole}>GitHub Copilot</div>
            <div className={styles.messageContent}>Thinking...</div>
          </div>
        )}
        {error && (
          <div style={{ color: '#f48771', padding: '1rem', background: 'rgba(244, 135, 113, 0.1)', borderRadius: '4px', fontSize: '13px', marginTop: '8px' }}>
            Terminal Error: Unable to reach Copilot API. Please try again.
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.inputArea}>
        <div className={styles.inputContainer}>
          <TextareaAutosize
            className={styles.textarea}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Ask Copilot..."
            minRows={1}
            maxRows={5}
            disabled={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
