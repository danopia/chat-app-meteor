import { Mongo } from 'meteor/mongo';
import { IBaseDocument } from './base.ts';
import { IMessage } from './messages.ts'

export interface IUnReadMessage extends IBaseDocument {
    _id: string;
    fromUserId: string;
    toUserId: string;
    lastMessage?: IMessage,
    unReadCount: number;
}

export const UnReadMessageCollection = new Mongo.Collection<IUnReadMessage>('unread-messsage');
