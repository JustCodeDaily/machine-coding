import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--surface-container-high);
  border-radius: 0.75rem;
  overflow: hidden;
  border-left: 4px solid var(--secondary);
  box-shadow: 0 10px 40px -10px var(--shadow-ambient);

  [data-theme="dark"] & {
    background: var(--surface-container-lowest);
    border-color: var(--secondary);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: var(--surface-container-highest);
  opacity: 0.8;

  [data-theme="dark"] & {
    background: var(--surface-container);
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Dot = styled.div`
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  opacity: 0.4;
  background: ${(props) => props.$color};
`;

const FileName = styled.span`
  font-size: 0.625rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--on-surface-variant);
`;

const CodeArea = styled.div`
  padding: 2rem;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.7;
  overflow-x: auto;
  color: var(--on-surface);

  [data-theme="dark"] & {
    color: #cbd5e1;
  }
`;

const Pre = styled.pre`
  margin: 0;
  white-space: pre;
`;

/* Syntax highlight spans */
const Kw = styled.span`
  color: var(--primary);
  font-weight: 700;

  [data-theme="dark"] & {
    color: #c4b5fd;
  }
`;

const Fn = styled.span`
  color: #3b82f6;

  [data-theme="dark"] & {
    color: #93c5fd;
  }
`;

const Str = styled.span`
  color: var(--tertiary);

  [data-theme="dark"] & {
    color: #fbbf24;
  }
`;

const Num = styled.span`
  color: var(--tertiary);

  [data-theme="dark"] & {
    color: #fdba74;
  }
`;

const Cmt = styled.span`
  color: var(--on-surface-variant);
  opacity: 0.6;

  [data-theme="dark"] & {
    color: #64748b;
    opacity: 1;
  }
`;

const Tag = styled.span`
  color: var(--secondary);

  [data-theme="dark"] & {
    color: #86efac;
  }
`;

const Attr = styled.span`
  [data-theme="dark"] & {
    color: #93c5fd;
  }
`;

export default function CodeBlock() {
  return (
    <Wrapper>
      <Header>
        <Dots>
          <Dot $color="var(--error-container)" />
          <Dot $color="var(--secondary-container)" />
          <Dot $color="var(--tertiary-container)" />
        </Dots>
        <FileName>VirtualizedList.tsx</FileName>
      </Header>
      <CodeArea>
        <Pre>
{`  `}<Kw>const</Kw>{` `}<Fn>VirtualizedList</Fn>{` = ({ items, itemHeight, containerHeight }) => {
    `}<Kw>const</Kw>{` [scrollTop, setScrollTop] = `}<Fn>useState</Fn>{`(`}<Num>0</Num>{`);

    `}<Cmt>// Calculate start and end indices</Cmt>{`
    `}<Kw>const</Kw>{` startIndex = Math.floor(scrollTop / itemHeight);
    `}<Kw>const</Kw>{` endIndex = Math.min(
      items.length - `}<Num>1</Num>{`,
      Math.floor((scrollTop + containerHeight) / itemHeight)
    );

    `}<Cmt>// Slice only visible items</Cmt>{`
    `}<Kw>const</Kw>{` visibleItems = items.slice(startIndex, endIndex + `}<Num>1</Num>{`);

    `}<Kw>return</Kw>{` (
      <`}<Tag>div</Tag>{`
        `}<Attr>style</Attr>{`={{ height: containerHeight, overflow: `}<Str>'auto'</Str>{` }}
        `}<Attr>onScroll</Attr>{`={(e) => setScrollTop(e.currentTarget.scrollTop)}
      >
        <`}<Tag>div</Tag>{` `}<Attr>style</Attr>{`={{ height: items.length * itemHeight, position: `}<Str>'relative'</Str>{` }}>
          {visibleItems.map((item, index) => (
            <`}<Tag>div</Tag>{`
              `}<Attr>key</Attr>{`={item.id}
              `}<Attr>style</Attr>{`={{
                position: `}<Str>'absolute'</Str>{`,
                top: (startIndex + index) * itemHeight
              }}
            >
              {item.content}
            </`}<Tag>div</Tag>{`>
          ))}
        </`}<Tag>div</Tag>{`>
      </`}<Tag>div</Tag>{`>
    );
  };`}
        </Pre>
      </CodeArea>
    </Wrapper>
  );
}
