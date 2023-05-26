export default class PaymentMethodModel {
    constructor(id="", method_name="", method_description=""){
      this.id = id;
      this.method_name = method_name;
      this.method_description = method_description;
    }
  
    static valConstructor = (dataObj) => {
      let id = dataObj.id
      let method_name = dataObj.method_name
      let method_description = dataObj.method_description
  
      return new PaymentMethodModel(id,method_name,method_description)
    }
  
    static idConstructor = (dataObj) => {
      let id = dataObj.id
      let method_name = dataObj.method_name
      let method_description = dataObj.method_description
    
      return new PaymentMethodModel(id,method_name,method_description)
    }
  
    static postObjConstructor = (dataObj) => {
      return {
        "method_name":String(dataObj.method_name),
        "method_description":String(dataObj.method_description)
    }
    }
  }