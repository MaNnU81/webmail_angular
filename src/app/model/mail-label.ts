export interface MailLabel  {
    id: string;   
    name: string; 
}


export type LabelKey = `lbl_${string}`;      ///template literal type
export const STARRED_KEY = 'starred' as const


export const toLabelKey = (id: string): LabelKey => `lbl_${id}` as LabelKey;
export const isCustomLabelKey = (key: string): key is LabelKey => key.startsWith('lbl_');
export const fromLabelKey = (key: LabelKey): string => key.slice(4); 