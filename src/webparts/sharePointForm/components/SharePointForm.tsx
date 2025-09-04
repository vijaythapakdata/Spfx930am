import * as React from 'react';
// import styles from './SharePointForm.module.scss';
import type { ISharePointFormProps } from './ISharePointFormProps';
import { ISharePointFormState } from './ISharePointFormState';
import {Web} from "@pnp/sp/presets/all";
import "@pnp/sp/items";
import "@pnp/sp/lists";
import { Dialog } from '@microsoft/sp-dialog';
import { TextField,Slider,PrimaryButton } from '@fluentui/react';
const SharePointForm :React.FC<ISharePointFormProps>=(props)=>{
  const[formStates,setFormStates]=React.useState<ISharePointFormState>({
    Name:"",
    Email:"",
    FullAddress:"",
    Age:"",
    Salary:"",
    Score:""
  }
  )

  //create form 
  const createForm=async()=>{
    try{
const web=Web(props.Siteurl);// web will hold url of the site https://sharepoint.com
const list= web.lists.getByTitle(props.ListName); //list will hold the list name
const item=await list.items.add({
  Title:formStates.Name,
  EmailAddress:formStates.Email,
  Age:parseInt(formStates.Age),
  Score:parseInt(formStates.Score),
  Salary:parseFloat(formStates.Salary),
  Address:formStates.FullAddress
})
Dialog.alert(`Item has been created successfully with Id: ${item.data.Id}`);
console.log(item);
setFormStates(
  {
     Name:"",
    Email:"",
    FullAddress:"",
    Age:"",
    Salary:"",
    Score:""
  }
)
    }
    catch(err){
console.log("Error while creating items in SP List",err);
Dialog.alert("Error Occurred");
    }
    finally{
      console.log("I will be always run....")
    }
  }

  //form event 
  const handleForm=(fieldValue:keyof ISharePointFormState,value:boolean|string|number)=>{
    setFormStates(prev=>({...prev,[fieldValue]:value}));
  }
  return(
    <>
    <TextField
    label='Name'
    value={formStates.Name}
    onChange={(_,value)=>handleForm("Name",value||"")}
    iconProps={{iconName:'people'}}
    />
     <TextField
    label='Email Address'
    value={formStates.Email}
    onChange={(_,value)=>handleForm("Email",value||"")}
    iconProps={{iconName:'mail'}}
    />
     <TextField
    label='Age'
    value={formStates.Age}
    onChange={(_,value)=>handleForm("Age",value||"")}
    // iconProps={{iconName:'people'}}
    />
     <TextField
    label='Salary'
    value={formStates.Salary}
    onChange={(_,value)=>handleForm("Salary",value||"")}
    // iconProps={{iconName:'people'}}
    suffix='USD'
    prefix='$'
    />
    <Slider
    label='Score'
    value={formStates.Score}
      onChange={(value)=>handleForm("Score",value||"")}
      min={1}
      max={100}
      step={1}
    />
    <TextField
    label='Full Address'
    value={formStates.FullAddress}
    onChange={(_,value)=>handleForm("FullAddress",value||"")}
    iconProps={{iconName:'home'}}
    rows={5}
    multiline
    />
    <br/>
    <PrimaryButton
    text='Save'
    onClick={createForm}
    iconProps={{iconName:'save'}}
    />
    </>
  )
}
export default SharePointForm ;
