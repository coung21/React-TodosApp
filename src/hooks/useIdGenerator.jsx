

export function useIdGenerator() {

  function generateId() {
    const id = Math.floor(Math.random() * (1000 - 1) + 1)
    return id;
  }

  return generateId;
}
