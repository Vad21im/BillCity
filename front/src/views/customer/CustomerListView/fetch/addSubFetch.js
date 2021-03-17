/* eslint-disable */
import {urlhost} from "src/fetchs/urlhost";

const addSubFetch = async (values) => {
  console.log(values)
  try {
    return await (await fetch(`${urlhost}app/getDataProject`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(values)
      }
    )).json();
  } catch (error) {
    return error.message;
  }
}

export{
  addSubFetch
}
