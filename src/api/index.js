import axios from "axios";

const url = "https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary";

export async function getPlaceData(sw = {}, ne = {}) {
  try {
    const {
      data: { data },
    } = await axios.get(url, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        "X-RapidAPI-Key": "a764508a4emsh53249364544326bp1a4a18jsn4d2b38bdb8f6",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
