import { MessageCollection } from './messages.ts';
import { UnReadMessageCollection } from './unread-message.ts';
import { NotificationCollection } from './notification.ts';


const Collections = {
    Message: MessageCollection,
    UnReadMessage: UnReadMessageCollection,
    Notification: NotificationCollection,
};


export default Collections;
