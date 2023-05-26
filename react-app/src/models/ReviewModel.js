export default class ReviewModel {
  constructor(
    id = "",
    user = "",
    review_title = "",
    review_description = "",
    room = ""
  ) {
    this.id = id;
    this.user = user;
    this.review_title = review_title;
    this.review_description = review_description;
    this.room = room;
  }

  static valConstructor = (dataObj) => {
    let id = dataObj.id;
    let user = dataObj.user.name;
    let review_title = dataObj.review_title;
    let review_description = dataObj.review_description;
    let room = dataObj.room;

    return new ReviewModel(id, user, review_title, review_description, room);
  };

  static idConstructor = (dataObj) => {
    let id = dataObj.id;
    let user = dataObj.user.id;
    let review_title = dataObj.review_title;
    let review_description = dataObj.review_description;
    let room = dataObj.room;

    return new ReviewModel(id, user, review_title, review_description, room);
  };

  static postObjConstructor = (dataObj) => {
    return {
      review_description: String(dataObj.review_description),
      review_title: String(dataObj.review_title),
      room_id: String(dataObj.room),
      user_id: String(dataObj.user),
    };
  };
}
