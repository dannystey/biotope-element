import Component from '../../../src/index';

class Wrapper extends Component {
  render() {
    this.html `
<my-button onclick="${this.writeParagraph}"></my-button>
`
  }
  writeParagraph() {
    this.shadowRoot.innerHTML += '<my-paragraph></my-paragraph>';
  }
}

Wrapper.componentName = 'div-wrapper';
Wrapper.register();

class MyButton extends Component {
  render() {
    this.html `
<style>
:host {
--base-font-size: 29px;
}
:host button {
font-size: var(--base-font-size);
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
outline: none;
position: relative;
}
:host button:focus {
border-style: dotted;
}
:host button:active {
top: 1px;
left: 1px;
}
:host button:hover {
border-style: solid;
}
</style>
<button>Normal Button</button>
`
  }
}

MyButton.componentName = 'my-button';
MyButton.register();

class MyParagraph extends Component {
  render() {
    return this.html `
<style>
:host {
--base-font-size: 29px;
}
:host p {
font-size: var(--base-font-size);
}
</style>
 
<p>Hello World</p>
`
  }
}

MyParagraph.componentName = 'my-paragraph';
MyParagraph.register();