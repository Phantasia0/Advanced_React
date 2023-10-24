import React from "react";
import { RegularList } from "./components/lists/Regular";
import { authors } from "./data/authors";
import { SmallAuthorListItem } from "./components/authors/SmallListItems";
import { LargeAuthorListItem } from "./components/authors/LargeListItems";
import { SmallBookListItem } from "./components/books/SmallListItems";
import { LargeBookListItem } from "./components/books/LargeListItems";
import { books } from "./data/books";
import { NumberedList } from "./components/lists/Numbered";
import { Modal } from "./components/Modal";

function App() {
  return (
    <>
      <Modal>
        <RegularList
          items={authors}
          sourceName={"author"}
          ItemComponent={SmallAuthorListItem}
        />
        <NumberedList
          items={authors}
          sourceName={"author"}
          ItemComponent={LargeAuthorListItem}
        />
        <RegularList
          items={books}
          sourceName={"book"}
          ItemComponent={SmallBookListItem}
        />
        <NumberedList
          items={books}
          sourceName={"book"}
          ItemComponent={LargeBookListItem}
        />
      </Modal>
    </>
  );
}

export default App;
