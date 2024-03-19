
export default async (code, id, context) => {
  if (id.includes('index.html')) {
    return code
      .replace('width="48"', 'width="100"')
      .replace('height="48"', 'height="100"');
  }
};
