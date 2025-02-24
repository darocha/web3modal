const ConnectToAurox = async () => {
  let provider = null;
  if (typeof (window as any).Aurox !== 'undefined') {
    provider = (window as any).Aurox.ethereum;
    try {
      await provider.request({ method: 'eth_requestAccounts' })
    } catch (error) {
      throw new Error("User Rejected");
    }
  } else {
    throw new Error("No Aurox Wallet found");
  }
  return provider;
};

export default ConnectToAurox;
