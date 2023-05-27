export default class RoomModel {
  constructor(id = "", price = "", roomType = "", roomStatus = "", offer = "") {
    this.id = id;
    this.price = price;
    this.roomType = roomType;
    this.roomStatus = roomStatus;
    this.offer = offer;
  }

  static valConstructor = (dataObj) => {
    let id = dataObj.id;
    let price = dataObj.price;
    let roomType = dataObj.roomType.id;
    let roomStatus = dataObj.roomStatus.status;
    var offer;
    if (dataObj.offer != null) {
      offer = dataObj.offer.id;
    } else {
      offer = "no offer";
    }

    return new RoomModel(id, price, roomType, roomStatus, offer);
  };

  static idConstructor = (dataObj) => {
    let id = dataObj.id;
    let price = dataObj.price;
    let roomType = dataObj.roomType.id;
    let roomStatus = dataObj.roomStatus.id;
    var offer;
    if (dataObj.offer != null) {
      offer = dataObj.offer.id;
    } else {
      offer = "no offer";
    }

    return new RoomModel(id, price, roomType, roomStatus, offer);
  };

  static postObjConstructor = (dataObj) => {
    return {
      price: Number(dataObj.price),
      room_type_id: Number(dataObj.roomType),
      room_status_id: Number(dataObj.roomStatus),
      offer_id: Number(dataObj.offer),
    };
  };
}
