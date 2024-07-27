import {nextrapDoc} from "./nextrap-registry";

nextrapDoc().selectProjectId('typography')
.setProjectDoc({title: "Typography", description: "Provides font style, size and color settings for the website."});

nextrapDoc().addChapter({title: "Font Style", content: "Defines the font style for the website."});

const example = `

<body-nx class="nx-typography">

    <h1>Willkommen bei <br>Dr. med. XXX XXX</h1>
    <p>Wir sind eine moderne Facharztpraxis für Allgemeinmedizin und Innere Medizin in Berlin.</p>
    <p>Unser Ziel ist es, Ihnen eine umfassende und individuelle medizinische Versorgung auf höchstem Niveau zu bieten.</p>
    <p>Wir freuen uns auf Ihren Besuch!</p>


</body-nx>

`;

const exampleMd = `

# Willkommen bei <br>Dr. med. XXX XXX

Wir sind eine moderne Facharztpraxis für Allgemeinmedizin
und Innere Medizin in Berlin.

Unser Ziel ist es, Ihnen eine umfassende und individuelle
medizinische Versorgung auf höchstem Niveau zu bieten.
`;

nextrapDoc().addExample({htmlCode: example, mdCode: exampleMd});
