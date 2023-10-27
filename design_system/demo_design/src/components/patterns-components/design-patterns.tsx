import styled from "styled-components";
import {
  spaceSchema,
  fractions,
  justifySchema,
  stretchSchema,
  responsive,
} from "../../utils";

// Layers
export const Layers = styled.div<{ gutter?: string }>`
  display: grid;
  gap: ${(props) =>
    spaceSchema[props.gutter as keyof typeof spaceSchema] ?? spaceSchema.l};
`;

// Split
export const Split = styled.div<{ gutter?: string; fraction?: string }>`
  display: grid;
  gap: ${({ gutter }) =>
    spaceSchema[gutter as keyof typeof spaceSchema] ?? spaceSchema.l};

  grid-template-columns: ${({ fraction }) =>
    fractions[fraction as keyof typeof fractions] ?? fractions["1/2"]};
`;

// Columns
export const Columns = styled.div<{
  gutter?: string;
  fraction?: string;
  columns?: number;
}>`
  --columns: ${({ columns = 1 }) => columns};
  display: grid;
  gap: ${({ gutter }) =>
    spaceSchema[gutter as keyof typeof spaceSchema] ?? spaceSchema.l};
  grid-template-columns: repeat(var(--columns), 1fr);
`;

// Column
export const Column = styled.div<{ $span?: number }>`
  grid-column: span min(${({ $span = 1 }) => $span}, var(--columns));
`;

// Grid
export const Grid = styled.div<{ gutter?: string; minItemWidth?: string }>`
  display: grid;
  gap: ${({ gutter }) =>
    spaceSchema[gutter as keyof typeof spaceSchema] ?? spaceSchema.l};
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${(props) => props.minItemWidth ?? "310px"}, 100%), 1fr)
  );
`;

//InlineBundle
export const InlineBundle = styled.div<{
  gutter?: string;
  justify?: string;
  align?: string;
}>`
  --gutter: ${({ gutter }) =>
    spaceSchema[gutter as keyof typeof spaceSchema] ?? spaceSchema.l};
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);

  justify-content: ${(props) =>
    justifySchema[props.justify as keyof typeof justifySchema] ??
    justifySchema["start"]};
  align-items: ${(props) =>
    justifySchema[props.align as keyof typeof justifySchema] ??
    justifySchema["start"]};
`;

// Inline
export const Inline = styled(InlineBundle)<{ stretch?: number }>`
  flex-wrap: nowrap;

  ${({ stretch }: any) => {
    if (typeof stretch === "number") {
      return `> :nth-child(${stretch + 1}) {flex:1}`;
    }
    // @ts-ignore
    return stretchSchema[stretch] ?? "";
  }}

  > * {
    min-width: fit-content;
    flex-basis: calc((40rem - (100%- var(--gutter))) * 999);
  }

  ${({ switchAt }: any) => switchAt && responsive}
`;

// Pad
export const Pad = styled.div<{ padding?: any }>`
  padding: ${(props) => {
    return []
      .concat(props.padding)
      .map((paddingKey) => spaceSchema[paddingKey])
      .join(" ");
  }};
`;

// Center
export const Center = styled.div<{
  maxWidth?: string;
  centerText?: any;
  centerChildren?: any;
}>`
  box-sizing: content-box;
  margin-inline-start: auto;
  margin-inline-end: auto;

  max-inline-size: ${(props) => props.maxWidth};

  ${(props) => props.centerText && `text-align:center;`}

  ${(props) =>
    props.centerChildren &&
    `
    display: flex;
    flex-direction: column;
    align-items: center;
    `}
`;

// MediaWrapper
export const MediaWrapper = styled.div<{ ratio?: number[] }>`
  position: relative;

  --n: ${(props) => (props.ratio ? props.ratio[0] : 1)};
  --d: ${(props) => (props.ratio ? props.ratio[1] : 1)};

  ${(props) =>
    props.ratio &&
    `aspect-ratio: var(--n) / var(--d);
   @supports not (aspect-ratio: 1/1) {
     padding-bottom: calc(var(--d) / var(--n) * 100%);
   }`}

  > * {
    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > img,
  > video {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

// Cover
export const Cover = styled.div.attrs(({ children, top, bottom }: any) => {
  return {
    children: (
      <>
        {top && <div>{top}</div>}
        <div data-cover-child>{children}</div>
        {bottom && <div>{bottom}</div>}
      </>
    ),
  };
})<{ minHeight?: any; gutter?: any; top?: any; bottom?: any }>`
  display: grid;
  gap: ${(props) =>
    spaceSchema[props.gutter as keyof typeof spaceSchema] ?? spaceSchema.l};
  min-block-size: ${(props) => props.minHeight ?? "100vh"};
  grid-template-rows: ${({ top, bottom }) =>
    top && bottom
      ? "auto 1fr auto"
      : top
      ? "auto 1fr"
      : bottom
      ? "1fr auto"
      : "1fr"};

  > [data-cover-child] {
    align-self: center;
  }
`;
