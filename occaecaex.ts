// This function retrieves the current year as a string.
function getCurrentYear(): string {
  // Get the current date.
  const currentDate = new Date();
  // Extract the year as a number.
  const currentYear = currentDate.getFullYear();
  // Convert the year to a string and return it.
  return currentYear.toString();
}

// Store the current year in a constant.
const thisYear: string = getCurrentYear();
