export interface INotification {
    message: string; // contains markdown or html
    additionalMessage: string;
    avatarUrl: string;
    notificationType: string;
    date: Date;
}
export enum ENOTIFICATION {
    DENY = 'DENY',
    CONFIRMATION = 'CONFIRMATION',
    WARNING = 'WARNING',
    SOLD = 'SOLD',
    TICKET = 'TICKET',
}
