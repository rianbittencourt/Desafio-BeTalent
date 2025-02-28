export const fetchDataFromAPI = async (url: string) => {
    try {
      const response = await fetch(url);
      console.log("enter")
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }
      return await response.json();
    
    } catch (error: any) {
      throw new Error(`Erro ao buscar dados: ${error.message}`);
    }
  };
  