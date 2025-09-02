import * as React from 'react';
// import styles from './FluentuiControls.module.scss';
import type { IFluentuiControlsProps } from './IFluentuiControlsProps';
import { TextField ,Dropdown,ComboBox,ChoiceGroup,Toggle,Slider,Checkbox,Rating, RatingSize,PrimaryButton, SearchBox, DatePicker} from '@fluentui/react';
const  FluentuiControls:React.FC<IFluentuiControlsProps>=(props)=>{
  return(
    <>
    <p>Hello world using spfx !!</p>
    <hr/>
    <SearchBox placeholder='search here....' iconProps={{iconName:'search'}}/>
    <br/>
    <TextField
    label='Name' placeholder='write your name...'
    iconProps={{iconName:'people'}}
    />
    <TextField
    label='Password Reveal'
    type='password'
    canRevealPassword={true}
    />
    <TextField
    label='Address'
    multiline
    rows={5}
    />
    <TextField
    label='Compensation'
    prefix='$'
    suffix='USD'
    />
    <TextField type='file'
    label='Upload docs'
    />
    <Dropdown
    label='Department'
    placeholder='--select--'
    options={[
      {key:"IT",text:"IT"},
      {key:"HR",text:"HR"},
      {key:"Payroll",text:"Payroll"}
    ]}
    multiSelect
    />
    <ComboBox
     options={[
      {key:"IT",text:"IT"},
      {key:"HR",text:"HR"},
      {key:"Payroll",text:"Payroll"}
    ]}
    label='Combo Box'
    multiSelect
    autoComplete='on'
    allowFreeInput
    
    />
    <ChoiceGroup
    options={[
      {key:"Male",text:"Male"},
      {key:"Female",text:"Female"}
    ]}
    label='Gender'
    />
    <Slider
    label='Score'
    min={1}
    max={100}
    step={1}
    />
    <Toggle
    label="Permission"
    onText='ON'
    offText='OFF'
    defaultChecked={true}
    />
    <DatePicker
    label='DOB'/>
    <Rating
    ariaLabel='Ratings'
    max={5}
    size={RatingSize.Large}
    defaultRating={3}
    />
    <Checkbox
    label='Are you sure you want to submit the form
    ?'
    />
<br/>
<PrimaryButton text='Save' iconProps={{iconName:"save"}}/>

    </>
  )
}
export default  FluentuiControls