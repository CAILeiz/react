import { ADD_PERSON, REDUCE_PERSON } from "../constant";

const initState = [{ id: "001", name: "tom", age: 18 }];
export default function personReducer(preState = initState, action) {
  const { type, data } = action;
  console.log(action);
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState];
    case REDUCE_PERSON:
      preState.forEach((item, index) => {
        if (item.id == data) {
          preState.splice(index, 1);
        }
      });
      // reducer必须是纯函数 不可以改变preState  如果改变了preState personReducer就不是纯函数了  
      return [...preState];
    default:
      return preState;
  }
}
