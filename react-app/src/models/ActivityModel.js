export default class ActivityModel {
    constructor(id="", durationHrs="", date="", hostName=""){
      this.id = id;
      this.durationHrs = durationHrs;
      this.date = date;
      this.hostName=hostName;
    }
  
    static valConstructor = (dataObj) => {
      let id = dataObj.id
      let durationHrs = dataObj.durationHrs
      let date = dataObj.date
      let hostName = dataObj.hostName

      return new ActivityModel(id, durationHrs, date, hostName)
    }
  
    static idConstructor = (dataObj) => {
        let id = dataObj.id
        let durationHrs = dataObj.durationHrs
        let date = dataObj.date
        let hostName = dataObj.hostName
  
        return new ActivityModel(id, durationHrs, date, hostName)
    }
  
    static postObjConstructor = (dataObj) => {
      return {
        "id": Number(dataObj.id),
        "durationHrs": Number(dataObj.durationHrs),
        "date": String(dataObj.date),
        "hostName": String(dataObj.hostName)
    }
    }
  }