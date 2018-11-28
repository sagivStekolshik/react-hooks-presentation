import React from 'react'
import {CodePane} from 'spectacle'
const beautify = require('js-beautify').html

const JsxString = (component, counter = 0) => {
    
    if(React.Children.count(component) > 1)
        return React.Children.map(component,(JsxString)).join('')
    
    if(typeof component !== "object")
        return component
    const type = component.type.name;
    const props = component.props;
    let propsString = "";
    for (let key in props) {
      if (key !== "children") {
        let propValue = props[key];
        let value = "";
        if (propValue instanceof Object) {
          value = `{${JSON.stringify(propValue).replace(/['"]+/g, '')}}`;
        } else {
          value = `"${propValue}"`;
        }
        propsString += ` ${key}=${value}`;
      }
    }
    if (props.children) {
      counter += 2;
      var children = JsxString(props.children, counter);
      return `<${type}${propsString}>
      ${Array(counter).join(" ")}  ${children}
      ${Array(counter).join(" ")}</${type}>`;
    }
    
    return `<${type}${propsString} />`;
  }
  

const ComponentToString = (props) => {
    let children = null
    switch(typeof props.children){
        case 'object': {
            children = props.children
            break;
        }
        case 'function': {
            console.log(props.children.toString())
            children = props.children()
            break;
        }
        default: break;
    }
    
    return (
        <React.Fragment>
            {children}
            <CodePane textSize={24} lang="javascript" source={beautify(JsxString(children.toString()))} />
        </React.Fragment>
    )
}

export default ComponentToString