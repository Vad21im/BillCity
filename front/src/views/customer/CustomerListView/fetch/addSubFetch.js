/* eslint-disable */
import {urlhost} from "src/fetchs/urlhost";

const addSubFetch = async (values) => {
  try {
    return await (await fetch(`${urlhost}/addSub`, {
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
