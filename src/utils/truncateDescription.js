export const truncateDescription = text => {
  const words = text.split(" ");
  const truncatedText = words.slice(0, 3).join(" ");
  return truncatedText;
};