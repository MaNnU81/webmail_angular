
export type SystemMailFolder  = 'inbox' | 'sent' | 'draft' | 'trash';
export type CustomMailFolder = string;
export type MailFolder = SystemMailFolder | CustomMailFolder;

export interface Mockmail {
    from: string;
    subject: string;
    preview: string;
    id: string; 
    to?: string; 
    body: string; 
    isRead: boolean;
    folder?: MailFolder;
    createdAt: number; 
    labels?: string[];
}


