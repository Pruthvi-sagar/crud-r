export function add(email, name) {
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: {
        name: name,
        email: email,
      },
    });
  };
}
export function deleteUser(index) {
  return (dispatch) => {
    dispatch({
      type: "delete",
      payload: index,
    });
  };
}
export function editUser(index, email, name) {
  return (dispatch) => {
    dispatch({
      type: "edit",
      payload: {
        index: index,
        email: email,
        name: name,
      },
    });
  };
}
