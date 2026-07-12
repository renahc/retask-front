const mappedErrors = (error) => {
  const errorsArray = error.message.split(",");
  const mappedErrors = {};

  errorsArray.forEach((error) => {
    const lowerCaseError = error.toLowerCase();

    if (lowerCaseError.includes("email")) {
      if (!mappedErrors.email) mappedErrors.email = [];
      mappedErrors.email.push(error);
    } else if (lowerCaseError.includes("password")) {
      if (!mappedErrors.password) mappedErrors.password = [];
      mappedErrors.password.push(error);
    } else {
      if (!mappedErrors.username) mappedErrors.username = [];
      mappedErrors.username.push(error);
    }
  });

  return mappedErrors;
};

export default mappedErrors;
