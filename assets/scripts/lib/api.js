define(["axios"], function (axios) {
  const getData = async (url) => {
    try {
      const dataApi = await axios.get(url);
      return dataApi;
    } catch (error) {
      console.log("Gagal mendapatkan data");
      throw error;
    }
  };

  return getData;
});
