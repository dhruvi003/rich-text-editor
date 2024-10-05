# Custom Rich Text Editor and Note Management Application

## Project Overview
This project is a **Custom Rich Text Editor** and **Note Management Application** that allows users to create, edit, delete, and manage their notes with features like auto-glossary term highlighting, responsive design, and data persistence. It was built with the goal of providing a seamless note-taking experience with rich text formatting and glossary term recognition using AI.

## Features

### 1. Custom Rich Text Editor
- **Basic Rich Text Editor**: A custom-built text editor from scratch, without using any pre-made libraries like TinyMCE or Quill.
- **Text Formatting**: Includes options for:
  - Bold
  - Italic
  - Underline
  - Text Alignment (left, center, right)
  - Font Size
- **Toolbar**: A simple and intuitive toolbar for formatting options that users can interact with while editing their notes.

### 2. Note Management
- **Create, Edit, Delete Notes**: Allows users to add, update, and remove notes efficiently.
- **Pin Notes**: Users can pin important notes to the top of the notes list. A pin icon is provided as a visual indicator for pinned notes.
- **Notes List**: A clean and organized list of all notes, separated into pinned and regular notes for easy access.

### 3. Auto Glossary Highlighting (AI Feature)
- **Glossary Term Highlighting**: Automatically detects specific glossary terms within notes and highlights them.
- **Term Definition Popup**: When users hover over the highlighted terms, a tooltip with a definition of the term is displayed. This is powered by Hugging Face’s AI models to fetch definitions dynamically.

### 4. Basic User Interface (UI)
- **Simple and Clean UI**: Designed to be user-friendly and easy to navigate.
- **Main Components**:
  - A toolbar for formatting the text
  - A notes list panel for navigating between different notes
  - A main editing area to create and edit notes

### 5. Responsive Design
- **Adapts to Different Screen Sizes**: The application is fully responsive and adapts to various screen sizes, including desktop, tablet, and smartphone views.
- **Touch Support**: Optimized for touch input on mobile devices and tablets to ensure seamless interactions across all devices.
- **Optimized Layout**: The layout automatically adjusts for smaller screens, providing a clean and clutter-free user experience on mobile devices.

### 6. Data Persistence
- **Local Storage**: The application uses browser local storage to save notes and user preferences, ensuring that user data is not lost between sessions.
- **Automatic Save**: Notes are automatically saved in local storage when created or updated, allowing users to pick up where they left off even after closing the browser.

## Installation and Setup
1. Clone the repository:
   ```
   git clone https://github.com/your-repository/custom-rich-text-editor.git
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Run the application:
   ```
   npm start
   ```

## Usage
- **Creating Notes**: Click on the "Create Note" button to open the editor and start writing a new note.
- **Formatting**: Use the toolbar to apply bold, italic, underline, or change the alignment and font size of the text.
- **Pinning Notes**: Pin important notes to the top by clicking the pin icon.
- **Glossary Term Definitions**: Hover over highlighted terms in your notes to see AI-generated definitions in a popup.
- **Responsive Design**: Access the app on any device, including smartphones, tablets, or desktops, with layouts optimized for different screen sizes.

## Future Enhancements
- Integration with cloud-based storage for syncing notes across devices.
- User authentication and note sharing functionality.

## License
This project is licensed under the MIT License.

--- 
