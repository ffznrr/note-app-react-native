import React, { useEffect, useState } from "react";
import Home from "./src/screens/home";
import AddNote from "./src/screens/addNote";
import EditNote from "./src/screens/editNote";

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  hapus,
  setInput,
  input,
  editNote,
}) => {
  switch (currentPage) {
    case "home":
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          hapus={hapus}
          setInput={setInput}
        />
      );
    case "add":
      return (
        <AddNote
          setCurrentPage={setCurrentPage}
          addNote={addNote}
        />
      );
    case "edit":
      return (
        <EditNote
          setCurrentPage={setCurrentPage}
          input={input}
          editNote={editNote}
        />
      );
    default:
      return <Home />;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [input, setInput] = useState({});

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "Note pertama",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    },
  ]);

  const editNote = (id, title, desc) => {
    const filter = noteList.filter((data) => data.id == id);
    filter.map((data) => {
      (data.desc = desc), (data.title = title);
    });
  };

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;

    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const hapus = (id) => {
    const filtering = noteList.filter((data) => data.id !== id);
    setNoteList(filtering);
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      setInput={setInput}
      hapus={hapus}
      input={input}
      editNote={editNote}
    />
  );
};

export default App;
