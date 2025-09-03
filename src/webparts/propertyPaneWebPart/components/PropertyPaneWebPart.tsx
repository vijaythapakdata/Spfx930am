import * as React from 'react';
// import styles from './PropertyPaneWebPart.module.scss';
import type { IPropertyPaneWebPartProps } from './IPropertyPaneWebPartProps';


const PropertyPaneWebPart:React.FC<IPropertyPaneWebPartProps>=(props)=>{
  return(
    <>
    <p><strong>Name:</strong>{props.userName}</p>
     <p><strong>Siteurl:</strong>{props.siteurl}</p>
      <p><strong>List Name:</strong>{props.ListName}</p>
       <p><strong>Department:</strong>{props.DropdownField}</p>
        <p><strong>Slider:</strong>{props.SliderField}</p>
         <p><strong>Gender:</strong>{props.ChoiceGroupField}</p>
          <p><strong>CheckBox:</strong>{props.CheckBoxField}</p>
           <p><strong>Toggle:</strong>{props.ToggleField}</p>
            <p><strong>Address:</strong>{props.MultiLineField}</p>
    </>
  )
}
export default PropertyPaneWebPart;
