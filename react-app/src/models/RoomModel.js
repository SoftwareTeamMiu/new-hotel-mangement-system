export class RoomModel{
  constructor(id,price,offer_id,room_type_id,room_status_id) { 
    this.id = id;
    this.price = price;
    this.offer_id = offer_id;
    this.room_type_id = room_type_id;
    this.room_status_id = room_status_id;
  }

  static parsedValConstructor = (dataObj) => {
    let id = dataObj.id
    let price = dataObj.price
    let offerPercent = dataObj.offer.percentage
    let roomStatus = dataObj.roomStatus.status
    let roomTypeId = dataObj.roomType.id

    return new RoomModel(id,price,offerPercent,roomStatus,roomTypeId)
  }

  static parsedIdConstructor = (dataObj) => {
    let id = dataObj.id
    let price = dataObj.price
    let offerPercent = dataObj.offer.id
    let roomStatus = dataObj.roomStatus.id
    let roomTypeId = dataObj.roomType.id

    return new RoomModel(id,price,offerPercent,roomStatus,roomTypeId)
  }
}