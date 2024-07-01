// TO format sentence
export function formatSentence(sentence: string, len: number) {
  const arrOfWords = sentence.split(" ");
  if (arrOfWords.length > len) {
    return arrOfWords.slice(0, len).join(" ") + "...";
  }
  return sentence;
}

// check weather all the feilds are complete or not
export function findEmptyKey(obj: {}) {
  console.log("okh");
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "boolean") continue;
    if (value === null || value === undefined) return key;
    if (typeof value === "string" && value.trim() === "") return key;
    if (Array.isArray(value) && value.length === 0) return key;
    if (
      typeof value === "object" &&
      !Array.isArray(value) &&
      Object.keys(value).length === 0
    )
      return key;
  }
  return null;
}

export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
