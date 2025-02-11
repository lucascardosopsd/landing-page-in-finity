export const genSlug = (text: string): string => {
  return text
    .normalize("NFD") // Normalize the text to decomposed form (NFD) to separate accents from letters
    .replace(/[\u0300-\u036f]/g, "") // Remove all accent characters
    .toLowerCase() // Convert the text to lowercase
    .replace(/[^a-z0-9\s-]/g, "") // Remove all non-alphanumeric characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
};
