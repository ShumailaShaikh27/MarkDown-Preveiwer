import {useState} from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
const [text,setText] = useState(`
 # HELLO
 ## I am a markdown preveiwer
 [title](https://www.example.com) 
 ### This is a how I type in a link
 \`<html>This is I write code</html>\`
 \`\`\`
 {
   "appName": "Markdown Preveiwer",
   "madeBy": "Shumaila Shaikh",
   "toolUsed": "VsCode"
   appNumber : 2
 }
 \`\`\`
 1. Write in the textbox
 2. Use respective tags with the text to format as shown in this tutorial 
 3. Watch the magic happen 

 > Made using reactjs 

 ![alt text](thumb-1920-508247.jpg)

 **Now Get Experimenting**
`); 

  marked.setOptions({
    breaks : true
  })

  return (
    <div className="App">
      <textarea id ="editor" onChange={(event) => {setText(event.target.value)}} value = {text}></textarea>
      <div id = "preview" dangerouslySetInnerHTML={{ __html: marked(text),}}></div>
    </div>
  );
}

export default App;
