/* eslint-disable */
import {urlhost} from "src/fetchs/urlhost";

const getSubAll = async (position, limit) => {
  console.log(position,limit)
  try {
    return await (await fetch(`${urlhost}/getSub`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({position, limit})

      }
    )).json();
  } catch (error) {
    return error.message;
  }
}
const respChangeState = async (props)=>{
  const response = await getSubAll(props.page,props.limit);
  console.log(props, "test")

  props.setSubs(response.subs)
  props.setMaximumSubs(response.subsLimit)
}

export{
  respChangeState
}
