// Format number to currency
export const formatCurrency = (number, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(number);
  };
  
  // Format large numbers with abbreviations (K, M, B, T)
  export const formatLargeNumber = (number) => {
    if (number === null || number === undefined) return 'N/A';
    
    if (number >= 1000000000000) {
      return (number / 1000000000000).toFixed(2) + 'T';
    } else if (number >= 1000000000) {
      return (number / 1000000000).toFixed(2) + 'B';
    } else if (number >= 1000000) {
      return (number / 1000000).toFixed(2) + 'M';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(2) + 'K';
    } else {
      return number.toFixed(2);
    }
  };
  
  // Format percentage with + sign for positive values
  export const formatPercentage = (number) => {
    if (number === null || number === undefined) return 'N/A';
    
    const formattedValue = number.toFixed(2);
    return number > 0 ? `+${formattedValue}%` : `${formattedValue}%`;
  };
  
  // Get CSS class for percentage change
  export const getPercentageClass = (number) => {
    if (number === null || number === undefined) return '';
    
    return number > 0 
      ? 'text-green-500' 
      : number < 0 
        ? 'text-red-500' 
        : 'text-gray-500';
  };