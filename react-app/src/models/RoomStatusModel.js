export default class RoomStatus{
  constructor(id="",status="") { 
    this.id = id;
    this.status = status;
  }

  static valConstructor = (dataObj) => {
    let id = dataObj.id
    let status = dataObj.status

    return new RoomStatus(id,status)
  }

  static idConstructor = (dataObj) => {
    let id = dataObj.id
    let status = dataObj.status

    return new RoomStatus(id,status)
  }

  static postObjConstructor = (dataObj) => {
    return {
      "status": String(dataObj.status)
  }
  }
}