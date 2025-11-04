import { Mongo } from 'meteor/mongo';
import { IBaseDocument } from './base.ts';
import { IMessage } from './messages.ts';

export enum NotificationTypes {
    UNREAD_MESSAGE_1_HOUR = 'UNREAD_MESSAGE_1_HOUR',
    NEW_MESSAGE = 'NEW_MESSAGE',
}

export interface INotification extends IBaseDocument {
    _id: string;
    userId: string;
    isRead: boolean;
    type: NotificationTypes;
    params: {
        fromUserId?: string;
        toUserId?: string;
        fromUser?: Meteor.User;
        toUser?: Meteor.User;
        message?: IMessage
    }

}

export const NotificationCollection = new Mongo.Collection<INotification>('notification');
