import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField,PropertyPaneDropdown,PropertyPaneSlider,PropertyPaneChoiceGroup,PropertyPaneCheckbox,PropertyPaneButton,PropertyPaneToggle
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';


import * as strings from 'PropertyPaneWebPartWebPartStrings';
import PropertyPaneWebPart from './components/PropertyPaneWebPart';
import { IPropertyPaneWebPartProps } from './components/IPropertyPaneWebPartProps';

export interface IPropertyPaneWebPartWebPartProps {
  ListName: string;
  DropdownField:string;
  SliderField:any;
   ChoiceGroupField:string;
 CheckBoxField:boolean;
 buttonField:string;
 ToggleField:boolean;
 MultiLineField:string


}

export default class PropertyPaneWebPartWebPart extends BaseClientSideWebPart<IPropertyPaneWebPartWebPartProps> {

  
  public render(): void {
    const element: React.ReactElement<IPropertyPaneWebPartProps> = React.createElement(
      PropertyPaneWebPart,
      {
       ListName:this.properties.ListName,
       siteurl:this.context.pageContext.web.absoluteUrl,
       userName:this.context.pageContext.user.displayName,
       DropdownField:this.properties.DropdownField,
       SliderField:this.properties.SliderField,
       ChoiceGroupField:this.properties.ChoiceGroupField,
       CheckBoxField:this.properties.CheckBoxField,
       buttonField:this.properties.buttonField,
       ToggleField:this.properties.ToggleField,
       MultiLineField:this.properties.MultiLineField
      }
    );

    ReactDom.render(element, this.domElement);
  }

 

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
protected get disableReactivePropertyChanges():boolean{
  return true;
}
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('ListName', {
                  label: strings.ListFieldLabel,
                  
                }),
                PropertyPaneDropdown('DropdownField',{
                  label:'Department',
                  options:[
                    {key:'IT',text:'IT'},
                    {key:'HR',text:'HR'}
                  ]
                }),
                PropertyPaneSlider('SliderField',{
                  label:'Slider',
                  min:0,
                  max:100,
                  step:1
                }),
                PropertyPaneChoiceGroup("ChoiceGroupField",{
                  label:'Gender',
                  options:[
                    {key:"Male",text:"Male"},
                    {key:"Female",text:"Female"}
                  ]
                }),
                PropertyPaneCheckbox("CheckBoxField",{
                  text:'Check Box'
                }),
                PropertyPaneButton("buttonField",{
                  text:"Button",
                  onClick:()=>alert("Button Clicked")
                }),
                PropertyPaneToggle("ToggleField",{
                  label:"Toggle",
                  onText:"ON",
                  offText:"OFF"
                }),
                PropertyPaneTextField("MultiLineField",{
                  label:strings.MultiLineFieldLabel,
                  multiline:true,
                  rows:5
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
