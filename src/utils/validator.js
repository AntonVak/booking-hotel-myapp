const validator = (data, config) => {
  const errors = {};
  
  function validate(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case "isRequired":
        statusValidate = data.trim() === "";
        break;
      case "isMail": {
        const emailRegExp = /^\S+@\S+\.\S+$/g;
        //вызов функции
        statusValidate = !emailRegExp.test(data);
        break;
      }
      case "isCapitalSymbol": {
        const capitalRegExp = /[A-Z]+/g;
        statusValidate = !capitalRegExp.test(data);
        break;
      }
      case "isDigitSymbol": {
        const digitRegExp = /\d+/g;
        statusValidate = !digitRegExp.test(data);
        break;
      }
      case "min": {
        statusValidate = data.length < config.value;
        break;
      }
      default:
        break;
    }
    if (statusValidate) return config.message;
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,//данные = isRequired, isMail,min, ... 
        //data[fieldName]
        data[fieldName],
        //config = обьект email и password
        //config[fieldName] = isRequired, isMail,min, ...
        //config[fieldName][validateMethod] = message
        config[fieldName][validateMethod]
      );
      console.log(data[fieldName]);
      // console.log(validateMethod);
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
    // console.log("fieldName===", fieldName);
  }
  return errors;
};

export default validator;
