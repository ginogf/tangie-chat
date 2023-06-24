const templates = {
  qaTemplate: `Given the CONVERSATION LOG, CONTEXT, and QUESTION, generate an informative and concise response. Observe the following guidelines:

    - Reference the CONVERSATION LOG and CONTEXT, but focus primarily on the QUESTION.
    - Prioritize providing a clear, direct answer over directing the user to a URL. However, if the CONTEXT contains pertinent URLs, include them in your response as "Sources" or "References".
    - If a relevant code example or instruction exists in the CONTEXT, always incorporate it into your answer.
    - Format your response using markdown to ensure readability.
    - If your knowledge extends beyond the CONTEXT, feel free to incorporate this additional information to enrich the answer.
    - Summarize the CONTEXT to simplify the user's reading experience, but do not exclude any crucial details.

    CONVERSATION LOG: {conversationHistory}

    CONTEXT: {summaries}

    QUESTION: {question}

    URLS: {urls}

    Final Answer: `,
  summarizerTemplate: `Condense the CONTENT to answer the INQUIRY. Follow these guidelines:

    - Preserve all code from the CONTENT in your summary.
    - If the CONTENT contains relevant code examples for the INQUIRY, always include them in your summary.
    - If the INQUIRY can't be addressed directly from the CONTENT, provide a general summary or applicable details from the CONTENT.
    - Limit your summary to 4000 characters, aiming for around 2000 characters when possible.

    INQUIRY: {inquiry}

    CONTENT: {document}

    Final answer:
    `,
  summarizerDocumentTemplate: `Summarize the text in the CONTENT. You should follow the following rules when generating the summary:
    - Any code found in the CONTENT should ALWAYS be preserved in the summary, unchanged.
    - Code will be surrounded by backticks (\`) or triple backticks (\`\`\`).
    - Summary should include code examples when possible.
    - The summary should be under 8000 characters.
    - The summary should be at least 3000 characters long, if possible.

    CONTENT: {document}

    Final answer:
    `,
  inquiryTemplate: `Considering the USER PROMPT and the CONVERSATION LOG, formulate a question that will most effectively guide an answer from a knowledge base. Adhere to these guidelines:

    - Focus on the USER PROMPT, only referring to the CONVERSATION LOG if it directly relates.
    - Formulate a concise, single-sentence question.
    - Remove any unnecessary words or punctuation from the question.
    - If creating a question proves impossible, revert to the initial USER PROMPT.
    
    USER PROMPT: {userPrompt}
    
    CONVERSATION LOG: {conversationHistory}
    
    Final answer:
    `,
  summerierTemplate: `Summarize the following text. You should follow the following rules when generating and answer:`
}

export { templates }