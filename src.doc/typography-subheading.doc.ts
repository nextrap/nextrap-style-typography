import {nextrapDoc} from "./visualizer/nextrap-registry";



nextrapDoc().addChapter({title: "Subheading Style", content: "Defines the font style for the website."});

const example = `

<body-nx class="nx-typography nx-typography-subheading-reversed">

    <h2>Heading 2</h2>
    <blockquote><p>Blockquote</p></blockquote>
    <p>Default Paragraph Stuff</p>



</body-nx>

`;

const exampleMd = `



## Heading 2

> Blockquote

Default Paragraph Stuff

`;



nextrapDoc().addExample({htmlCode: example, mdCode: exampleMd});
