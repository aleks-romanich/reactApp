

export  const  addText = (id, value) => {
  return {
    type: "ADD_TEXT",
    payload: {
      id: id,
      body: value
    }
   }
}
