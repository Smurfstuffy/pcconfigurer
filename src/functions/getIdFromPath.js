const getIdFromPath = (path) => {
  const parts = path.split('/');
  return parts.length > 0 ? parts[parts.length - 1] : null;
}

export default getIdFromPath;