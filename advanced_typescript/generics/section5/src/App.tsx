import { ReactNode } from "react";

interface ProductListProps<T> {
  rows: T[];
  renderRow: (row: T) => ReactNode;
}

export const ProductList = <T,>(props: ProductListProps<T>) => {
  return <ul>{props.rows.map((row) => props.renderRow(row))}</ul>;
};

interface product {
  id: number;
  title: string;
}

function App() {
  return (
    <div>
      <ProductList<product>
        rows={[
          { id: 1, title: "test" },
          // { id: "2", title: 123 },
        ]}
        renderRow={(row) => <li>{row.title}</li>}
      />
      {/*<ProductList*/}
      {/*  rows={products}*/}
      {/*  renderRow={(row) => {*/}
      {/*    return <li>{row.nonExistingProp}</li>;*/}
      {/*  }}*/}
      {/*></ProductList>*/}
    </div>
  );
}

export default App;
