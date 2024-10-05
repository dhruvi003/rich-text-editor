import { useState } from "react";
import "../assets/css/upsert.css";
import { v4 as getID } from "uuid";

export const UpsertNote = ({ setOpen, note, createNote, updateNote }) => {
  const [title, setTitle] = useState(note ? note.title : "");
  const [desc, setDesc] = useState(note ? note.desc : "");

  const clearInputs = () => {
    setTitle("");
    setDesc("");
  };

  const handleClear = (event) => {
    event.preventDefault();
    clearInputs();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (note) {
      updateNote({ ...note, title, desc });
    } else {
      createNote({
        id: getID(),
        title,
        desc,
        createdAt: new Date().toDateString(),
      });
    }
    clearInputs();
    setOpen(false);
  };

  const applyStyleToContent = (styleType) => {
    const contentArea = document.querySelector(".textarea-form");
    if (styleType === "bold") {
      document.execCommand("bold");
    } else if (styleType === "italic") {
      document.execCommand("italic");
    } else if (styleType === "underline") {
      document.execCommand("underline");
    } else if (styleType === "left" || styleType === "center" || styleType === "right") {
      document.execCommand("justify" + styleType.charAt(0).toUpperCase() + styleType.slice(1));
    }
    setDesc(contentArea.innerHTML); // Update the desc state
  };

  const handleFontSizeChange = (event) => {
    const contentArea = document.querySelector(".textarea-form");
    contentArea.style.fontSize = event.target.value; // Update font size for entire content
  };

  return (
    <div className="upsert-note">
      <div className="upsert-wrapper">
        <div className="upsert-header">
          <h2 className="heading">{note ? "Update Note" : "Add Note"}</h2>
          <div className="close-btn" onClick={() => setOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>

        <form className="upsert-form" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Title"
            className="input-form"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="editor-toolbar">
            <button type="button" onClick={() => applyStyleToContent("bold")}>
              <b>B</b>
            </button>
            <button type="button" onClick={() => applyStyleToContent("italic")}>
              <i>I</i>
            </button>
            <button type="button" onClick={() => applyStyleToContent("underline")}>
              <u>U</u>
            </button>
            <button type="button" onClick={() => applyStyleToContent("left")}>
              <i className="fa-solid fa-align-left"></i>
            </button>
            <button type="button" onClick={() => applyStyleToContent("center")}>
              <i className="fa-solid fa-align-center"></i>
            </button>
            <button type="button" onClick={() => applyStyleToContent("right")}>
              <i className="fa-solid fa-align-right"></i>
            </button>

            <select onChange={handleFontSizeChange}>
              <option value="12px">12px</option>
              <option value="14px">14px</option>
              <option value="16px">16px</option>
              <option value="18px">18px</option>
              <option value="20px">20px</option>
            </select>
          </div>

          <div
            className="textarea-form"
            contentEditable="true"
            dangerouslySetInnerHTML={{ __html: desc }}
            onInput={(e) => setDesc((e.currentTarget.innerHTML).reverse())} // Update desc on input
          ></div>

          <div className="upsert-actions">
            <button className="clear-btn" onClick={handleClear}>
              Clear
            </button>
            <button type="submit" className="save-btn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};