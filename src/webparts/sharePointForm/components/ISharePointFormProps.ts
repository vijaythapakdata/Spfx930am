import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface ISharePointFormProps {
 ListName:string;
 Siteurl:string;
 context:WebPartContext;
}
