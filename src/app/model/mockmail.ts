
export type MockmailmailFolder = 'inbox' | 'sent' | 'drafts' | 'trash';

export interface Mockmail {
    from: string;
    subject: string;
    preview: string;
    id: number; 
    to?: string; 
    body: string; 
    isRead: boolean;
    folder?: MockmailmailFolder;
    createdAt: number; 
   
}


