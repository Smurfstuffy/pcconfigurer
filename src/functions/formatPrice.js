export const formatPrice = (price) => {
  // Remove all existing spaces
  let cleanedPrice = price.replace(/\s+/g, '');
  
  // Extract the numeric part and the currency symbol
  let numericPart = cleanedPrice.slice(0, -1);
  let currencySymbol = cleanedPrice.slice(-1);
  
  // Ensure there's a space before the currency symbol
  let formattedPrice = `${numericPart} ${currencySymbol}`;
  
  // Return the formatted price
  return formattedPrice;
};