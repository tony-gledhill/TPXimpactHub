import axios from "axios";

export async function HomePageData() {
  const headers = {
    "api-key": "my-api-key",
  };

  const url = "http://10.0.2.2:12584/umbraco/delivery/api/v1/content/item//";
  //const url = "http://127.0.0.1:12584/umbraco/delivery/api/v1/content";
  //const url = "https://dev.tpximpact.com/umbraco/delivery/api/v1/content";

  try {
    const response = await axios.get(url, { headers }).then((res) => {
      return res;
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
