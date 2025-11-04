import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
// import { Accounts } from "meteor/accounts-base";
// @ts-ignore
// HACK(dan): import { SyncedCron } from "meteor/littledata:synced-cron";

import { initJob } from '../imports/api/job-handlers/one-hour-un-read-noti.ts'

import "../imports/api/methods/index.ts";
import "../imports/api/publications/index.ts";


Meteor.startup(async () => {

  initJob();
  // HACK(dan): SyncedCron.start();

  // HACK(dan):
  Meteor.users = new Mongo.Collection('users');

  // Seeding Db
  const user = await Meteor.users.findOneAsync();
  if (!user) {
    const Accounts = null as any;
    await Accounts?.createUserAsync({
      username: "user1",
      profile: {
        name: "John Doe",
        image: "https://images.unsplash.com/photo-1612469294274-b1baaf5125ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY5NDI0MjA4Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      },
      password: "123456",
    });
    await Accounts?.createUserAsync({
      username: "user2",
      profile: {
        name: "Cris Ronaldo",
        image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY5NDI0MjA3OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      },
      password: "123456",
    });
    await Accounts?.createUserAsync({
      username: "user3",
      profile: {
        name: "Lionel Messi",
        image: "https://images.unsplash.com/photo-1600783486189-553f6a73f6f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY5NDI0MjA4NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      },
      password: "123456",
    });
  }
});
