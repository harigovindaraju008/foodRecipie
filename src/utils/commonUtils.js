export const getIngredient = meal => {
    const result = [];
    for (let i = 1; i <= 30; i++) {
      if (meal[`strIngredient${i}`] === '') {
        break;
      }
      result.push(meal[`strIngredient${i}`]);
    }
    return result.join(', ');
};