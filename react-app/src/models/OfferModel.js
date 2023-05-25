export default class OfferModel{
  constructor(id="",percentage="", expirationDate="") { 
    this.id = id;
    this.percentage = percentage;
    this.expirationDate = expirationDate
  }

  static valConstructor = (dataObj) => {
    let id = dataObj.id
    let percentage = dataObj.percentage
    let expirationDate = dataObj.expirationDate

    return new OfferModel(id,percentage,expirationDate)
  }

  static idConstructor = (dataObj) => {
      let id = dataObj.id
      let percentage = dataObj.percentage
      let expirationDate = dataObj.expirationDate

      return new OfferModel(id,percentage,expirationDate)
  }

  static postObjConstructor = (dataObj) => {
    return {
      "offer_percentage": String(dataObj.percentage),
      "offer_expiration_date": String(dataObj.expirationDate)
  }
  }
}