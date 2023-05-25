export default class RoomTypeModel {
  constructor(id="", size="", location=""){
    this.id = id;
    this.size = size;
    this.location = location;
  }

  static valConstructor = (dataObj) => {
    let id = dataObj.id
    let size = dataObj.size
    let location = dataObj.location

    return new RoomTypeModel(id,size,location)
  }

  static idConstructor = (dataObj) => {
    let id = dataObj.id
    let size = dataObj.size
    let location = dataObj.location

    return new RoomTypeModel(id,size,location)
  }

  static postObjConstructor = (dataObj) => {
    return {
      "size": Number(dataObj.size),
      "location": Number(dataObj.location)
    }
  }
}