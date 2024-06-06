export const getMorse = async (search: number) => {
  if (isNaN(search)) return "";

  const url = "https://morse.galarne.tech/Morse/to-code";
  const response = await fetch(`${url}?number=${search}`, {
    method: "GET",
  });

  if (!response.ok) return "";

  return await response.text();
};
