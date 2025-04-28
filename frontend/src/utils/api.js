export const fetchTransactions = async () => {
    const res = await fetch('/api/transactions');
    return await res.json();
  };
  
  export const createTransaction = async (data) => {
    const res = await fetch('/api/transactions', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await res.json();
  };
  