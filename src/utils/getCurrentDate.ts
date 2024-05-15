const getCurrentDate = (): any => {
    let getDate = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return getDate;
  };

  export default getCurrentDate