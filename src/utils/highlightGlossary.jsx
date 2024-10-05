import axios from "axios";
import React, { useEffect, useState } from "react";

export const HighlightGlossaryTerms = ({ text }) => {
  const [glossaryTerms, setGlossaryTerms] = useState([]);

  useEffect(() => {
    const fetchGlossaryTerms = async () => {
      try {
        const response = await axios.post(
          "https://api-inference.huggingface.co/models/dslim/bert-base-NER",
          { inputs: text },
          {
            headers: {
              Authorization: `Bearer `,
            },
          }
        );

        setGlossaryTerms(response.data);
      } catch (error) {
        console.error("Error fetching glossary terms", error);
      }
    };

    fetchGlossaryTerms();
  }, [text]);

  const highlightTerms = (text, terms) => {
    let highlightedText = text;
    terms.forEach((term) => {
      const regex = new RegExp(`\\b${term.word}\\b`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        `<mark>${term.word}</mark>`
      );
    });
    return highlightedText;
  };

  return (
    <div
      dangerouslySetInnerHTML={{ __html: highlightTerms(text, glossaryTerms) }}
    ></div>
  );
};
