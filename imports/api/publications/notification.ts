import { Meteor } from 'meteor/meteor';
import { check } from "meteor/check";
import Collections from "../collections/index.ts";

Meteor.publish("notification:my", function () {
  if (this.userId) {
    return Collections.Notification.find({
      userId: this.userId,
    });
  }
  return this.ready();
});
