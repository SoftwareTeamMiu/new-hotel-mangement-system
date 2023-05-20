export default class OfferModel
{
    constructor(id,percentage,expirationDate) { 
        this.id = id;
        this.percentage = percentage;
        this.expirationDate =expirationDate;
     }

     static dataConstructor = (dataObj) => {
        let id = dataObj.id
        let percentage = dataObj.percentage
        let expirationDate = dataObj.expirationDate
        
        return new OfferModel(id,percentage,expirationDate)
      }
}