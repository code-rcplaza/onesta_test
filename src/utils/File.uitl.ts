export const generateFilenameWithDate = (filename: String) => {
  const currentDate = new Date();
  const formatedDate = currentDate.toISOString().slice(0, 10).replace(/-/g, "");
  return `${filename}-${formatedDate}`;
};
