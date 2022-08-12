const initialState = {
  details: [],
};

export default function reducer(state = initialState, action) {
  //   console.log(state.details.splice(action.payload, 1));
  switch (action.type) {
    case "add":
      return {
        ...state,
        details: [
          ...state.details,
          { name: action.payload.name, email: action.payload.email },
        ],
      };
    case "delete":
      return {
        ...state,
        details: state.details.filter((e, i) => action.payload !== i),
      };
    case "edit":
      return {
        ...state,
        details: state.details.splice(action.payload.index, 1, {
          name: action.payload.name,
          email: action.payload.email,
        }),
      };
    default:
      return initialState;
  }
}
