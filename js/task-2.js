function calcAverageCalories(days) {
  if (days.length === 0) {
    return 0;
  }
  const totalCalories = days.reduce((sum, day) => sum + day.calories, 0);
  return totalCalories / days.length;
}
