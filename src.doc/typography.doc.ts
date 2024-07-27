import {nextrapDoc} from "./visualizer/nextrap-registry";

nextrapDoc().selectProjectId('typography')
.setProjectDoc({title: "Typography", description: "Provides font style, size and color settings for the website."});

nextrapDoc().addChapter({title: "Font Style", content: "Defines the font style for the website."});

const example = `

<body-nx class="nx-typography">

    <h1>Heading 1 <D>Multi LIne</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <p>Default Paragraph text<br>Multi line</p>

    <p class="small">This is small, too</p>
    <p class="muted">This is muted text</p>
    <p>Wir freuen uns auf Ihren Besuch!</p>


</body-nx>

`;

const exampleMd = `

# Heading 1\\Multi Line

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

Default Paragraph text\\Multi line

This is small text
{: .small}

This is large text
{: .muted}

Wir freuen uns auf Ihren Besuch!
`;

nextrapDoc().addExample({htmlCode: example, mdCode: exampleMd});
