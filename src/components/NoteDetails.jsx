import "../assets/css/details.css";

export const NoteDetails = ({ setView, note }) => {
  const glossaryTerms = {
    "term1": "Definition of term1",
    "term2": "Definition of term2",
    // Add more terms as needed
  };

  const highlightGlossaryTerms = (text) => {
    Object.keys(glossaryTerms).forEach(term => {
      const regex = new RegExp(`\\b${term}\\b`, 'gi');
      text = text.replace(regex, `<span class="glossary-term" title="${glossaryTerms[term]}">${term}</span>`);
    });
    return text;
  };
  
  return (
    <div className="note-details">
      <div className="details-wrapper">
        <div className="details-back-btn" onClick={() => setView(false)}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <h2 className="details-title">{note?.title}</h2>
        <span className="details-timeline">{note?.createdAt}</span>
        <div className="details-body">
          <div dangerouslySetInnerHTML={{ __html: highlightGlossaryTerms(note.desc) }}></div>
        </div>
      </div>
    </div>
  );
};

//   // Hugging Face API call to get a term definition
//   const fetchTermDefinition = async (term) => {
//     try {
//       const response = await axios.post("https://api-inference.huggingface.co/models/dslim/bert-base-NER", {
//         inputs: term,
//       }, {
//         headers: {
//           Authorization: `Bearer MY-token, but it didn't work`,
//         },
//       });
//       return response.data[0].generated_text || "No definition available";
//     } catch (error) {
//       console.error("Error fetching term definition:", error);
//       return "No definition available";
//     }
//   };

//   // Handle hover events
//   const handleTermHover = async (term) => {
//     setHoveredTerm(term);
//     const definition = await fetchTermDefinition(term);
//     setDefinition(definition);
//   };

//   const handleTermLeave = () => {
//     setHoveredTerm(null);
//     setDefinition("");
//   };

//   // Highlight glossary terms dynamically as JSX elements
//   const highlightGlossaryTerms = (text) => {
//     const glossaryTerms = ["React", "express"]; // Add more terms here or fetch them dynamically

//     const splitText = text.split(new RegExp(`(${glossaryTerms.join('|')})`, 'gi'));
//     const elements = splitText.map((part, index) => {
//       if (glossaryTerms.includes(part.toLowerCase())) {
//         return (
//           <span
//             key={index}
//             className="glossary-term"
//             onMouseEnter={() => handleTermHover(part)}
//             onMouseLeave={handleTermLeave}
//             style={{ cursor: 'pointer', color: 'blue' }}
//           >
//             {part}
//           </span>
//         );
//       }
//       return part;
//     });

//     setHighlightedText(elements);
//   };

//   useEffect(() => {
//     if (note?.desc) {
//       highlightGlossaryTerms(note.desc);
//     }
//   }, [note]);
