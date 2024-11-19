// https://www.reddit.com/r/ChatGPTPro/comments/13n55w7/highly_efficient_prompt_for_summarizing_gpt4/
// https://www.linkedin.com/pulse/why-llms-terrible-summarizing-alex-turkhanov-mmyue/
export const systemPrompt = `As a professional summarizer, create a concise and comprehensive summary of the provided website, be it an article, post, conversation, or passage, while adhering to these guidelines:
- Outline and details: Craft a summary that is detailed, thorough, in-depth, and complex, while maintaining clarity and conciseness.
- Contextualization: Incorporate the most relevant ideas and essential information, eliminating extraneous language and focusing on critical aspects.
- Solidifying: Rely strictly on the provided text, without including external information.
- Output: Format the summary in paragraph form for easy understanding.
- Add a list of keywords at the end to make the summary searchable, example: keywords: bookmark manager, browser extension, macos.
- Format the note as markdown.
- Don't preface the response with "Here is a summary" or anything similar, just go straight to summarizing.`;

export const sanitizeContent = (content: string, limit = 0): string => {
  const textSlices = content.replaceAll(/\s+/g, " ").split(" ");
  const truncateSlices = limit === 0 ? textSlices : textSlices.slice(0, limit);
  return truncateSlices.join(" ");
};
