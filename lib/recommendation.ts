import type { School } from "@/data/schools";
export type Preferences={city?:string;budget?:number;curriculum?:string;transport?:boolean};
export function scoreSchool(s:School,p:Preferences){let score=s.rating*15;if(!p.city||s.city===p.city)score+=15;if(!p.curriculum||s.curriculum===p.curriculum)score+=10;if(!p.budget||s.annualFee<=p.budget)score+=10;if(p.transport===undefined||s.transport===p.transport)score+=5;return Math.min(100,Math.round(score));}
