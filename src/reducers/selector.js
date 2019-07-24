export const getItemsById = (id, state) => {
    return state.filter(item => {
      return item.id.toString() === id.toString();
    });
  };
  