"use strict";(self.webpackChunktidy_ui_docs=self.webpackChunktidy_ui_docs||[]).push([[599],{595:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var a=t(1880),i=t(1151),o=t(7294);function r(e){const n=Object.assign({h2:"h2",a:"a",p:"p",ul:"ul",li:"li",pre:"pre",code:"code",h3:"h3",strong:"strong"},(0,i.ah)(),e.components),{Prop:t,DocApi:a}=n;return a||l("DocApi",!0),t||l("Prop",!0),o.createElement(o.Fragment,null,o.createElement(n.h2,{id:"overview"},o.createElement(n.a,{href:"#overview"},"Overview")),"\n",o.createElement(n.p,null,"The Border component serves as a primary solution for encapsulating and enhancing components or groups within\nyour user interface, akin to wrapping a present to add that final touch. With the Border component, you can:"),"\n",o.createElement(n.ul,null,"\n",o.createElement(n.li,null,"\n",o.createElement(n.p,null,o.createElement("u",null,"Customization with Content")," With the Border component, you have the flexibility to customize borders by\nincluding content. This content can range from plain text to dynamic components like Chips, and can be\nstrategically positioned in all directions."),"\n"),"\n",o.createElement(n.li,null,"\n",o.createElement(n.p,null,o.createElement("u",null,"Controlled Thickness")," Tailor the thickness of your borders with precision, allowing you to exert pixel-level\ncontrol. Different density options are available to achieve the desired visual weight."),"\n"),"\n",o.createElement(n.li,null,"\n",o.createElement(n.p,null,o.createElement("u",null,"Color Infusion")," You can infuse borders with colors and tones that align with the classification of the\nenclosed content. This not only enhances aesthetics but also aids in effective information conveyance."),"\n"),"\n",o.createElement(n.li,null,"\n",o.createElement(n.p,null,o.createElement("u",null,"Aesthetic Harmony")," Experiment with a variety of shades to ensure your borders harmonize seamlessly with your\napp's overall aesthetics, delivering a visually pleasing and cohesive user experience."),"\n"),"\n",o.createElement(n.li,null,"\n",o.createElement(n.p,null,o.createElement("u",null,"Creative Variants")," Explore creative border variants, such as dashed or dotted styles, to add unique and\ndistinctive elements to your design repertoire."),"\n"),"\n"),"\n",o.createElement(n.h2,{id:"imports"},o.createElement(n.a,{href:"#imports"},"Imports")),"\n",o.createElement(n.pre,null,o.createElement(n.code,{className:"language-js"},"import { Border } from '@tidy-ui/all';\n// or\nimport { Border } from '@tidy-ui/layout';\n// or\nimport { Border } from '@tidy-ui/border';\n")),"\n",o.createElement(n.h2,{id:"key-features"},o.createElement(n.a,{href:"#key-features"},"Key Features")),"\n",o.createElement(n.h3,{id:"encapsulation"},o.createElement(n.a,{href:"#encapsulation"},"Encapsulation")),"\n",o.createElement(n.p,null,"The Border component acts as a virtual hug, encapsulating individual components or groups to create visually\nappealing structures within your user interface. Simply wrap your component with the ",o.createElement(n.strong,null,"Border")," tag to\nutilize this feature."),"\n",o.createElement(n.pre,null,o.createElement(n.code,{className:"language-jsx"},"<Border>\n  <Text.h5>The Great Wall of China</Text.h5>\n  <Text.base>\n    One of the most iconic and awe-inspiring structures on Earth, the Great Wall of China spans approximately 13,171\n    miles (21,196 kilometers). Contrary to popular belief, it is not a single continuous wall but a collection of walls\n    and fortifications built over centuries by various Chinese dynasties. Its main purpose was to protect against\n    invasions by nomadic tribes from the north. This incredible feat of engineering showcases the determination and\n    ingenuity of ancient Chinese civilization. Today, it stands as a UNESCO World Heritage Site and a symbol of China's\n    rich history and culture.\n  </Text.base>\n</Border>\n")),"\n",o.createElement(n.h3,{id:"qualify-with-content"},o.createElement(n.a,{href:"#qualify-with-content"},"Qualify with Content")),"\n",o.createElement(n.p,null,"Personalize your borders by adding ",o.createElement(t,null,"content")," such as text or other components like Chips. Position the content\nin any direction using the ",o.createElement(t,null,"positioning")," attribute to enhance the border's message. Adjust content alignment\nusing the ",o.createElement(t,null,"align")," attribute for a polished and cohesive design."),"\n",o.createElement(n.pre,null,o.createElement(n.code,{className:"language-jsx"},'<Border\n  align={16}\n  positioning="top-center"\n  content={\n    <Tag tone="major" isFilled>\n      Facts\n    </Tag>\n  }\n>\n  <Text.h5>The Great Wall of China</Text.h5>\n  <Text.base>\n    One of the most iconic and awe-inspiring structures on Earth, the Great Wall of China spans approximately 13,171\n    miles (21,196 kilometers). Contrary to popular belief, it is not a single continuous wall but a collection of walls\n    and fortifications built over centuries by various Chinese dynasties. Its main purpose was to protect against\n    invasions by nomadic tribes from the north. This incredible feat of engineering showcases the determination and\n    ingenuity of ancient Chinese civilization. Today, it stands as a UNESCO World Heritage Site and a symbol of China\'s\n    rich history and culture.\n  </Text.base>\n</Border>\n')),"\n",o.createElement(n.h3,{id:"density-control"},o.createElement(n.a,{href:"#density-control"},"Density Control")),"\n",o.createElement(n.p,null,"Fine-tune the border's thickness with different ",o.createElement(t,null,"density")," options, allowing precise control in pixels.\nEnsure your borders harmoniously integrate into your overall UI design by mastering density control."),"\n",o.createElement(n.pre,null,o.createElement(n.code,{className:"language-jsx"},'<Border density="8px">\n  <Text.h5>The Great Wall of China</Text.h5>\n  <Text.base>\n    One of the most iconic and awe-inspiring structures on Earth, the Great Wall of China spans approximately 13,171\n    miles (21,196 kilometers). Contrary to popular belief, it is not a single continuous wall but a collection of walls\n    and fortifications built over centuries by various Chinese dynasties. Its main purpose was to protect against\n    invasions by nomadic tribes from the north. This incredible feat of engineering showcases the determination and\n    ingenuity of ancient Chinese civilization. Today, it stands as a UNESCO World Heritage Site and a symbol of China\'s\n    rich history and culture.\n  </Text.base>\n</Border>\n')),"\n",o.createElement(n.h3,{id:"sharp-edges"},o.createElement(n.a,{href:"#sharp-edges"},"Sharp Edges")),"\n",o.createElement(n.p,null,"Achieve a clean and contemporary look by creating sharp-edged borders with the ",o.createElement(t,null,"isSharp")," attribute.\nThis imparts a sleek and sophisticated appearance to your user interface."),"\n",o.createElement(n.pre,null,o.createElement(n.code,{className:"language-jsx"},"<Border isSharp>\n  <Text.h5>The Great Wall of China</Text.h5>\n  <Text.base>\n    One of the most iconic and awe-inspiring structures on Earth, the Great Wall of China spans approximately 13,171\n    miles (21,196 kilometers). Contrary to popular belief, it is not a single continuous wall but a collection of walls\n    and fortifications built over centuries by various Chinese dynasties. Its main purpose was to protect against\n    invasions by nomadic tribes from the north. This incredible feat of engineering showcases the determination and\n    ingenuity of ancient Chinese civilization. Today, it stands as a UNESCO World Heritage Site and a symbol of China's\n    rich history and culture.\n  </Text.base>\n</Border>\n")),"\n",o.createElement(n.h3,{id:"colorful-tones"},o.createElement(n.a,{href:"#colorful-tones"},"Colorful Tones")),"\n",o.createElement(n.p,null,"Add life to your borders by coloring them with various tones based on the classification of the enclosed information.\nUtilize the ",o.createElement(t,null,"tone")," attribute to achieve your desired color palette for borders."),"\n",o.createElement(n.pre,null,o.createElement(n.code,{className:"language-jsx"},'<Border tone="major">\n  <Text.h5>The Great Wall of China</Text.h5>\n  <Text.base>\n    One of the most iconic and awe-inspiring structures on Earth, the Great Wall of China spans approximately 13,171\n    miles (21,196 kilometers). Contrary to popular belief, it is not a single continuous wall but a collection of walls\n    and fortifications built over centuries by various Chinese dynasties. Its main purpose was to protect against\n    invasions by nomadic tribes from the north. This incredible feat of engineering showcases the determination and\n    ingenuity of ancient Chinese civilization. Today, it stands as a UNESCO World Heritage Site and a symbol of China\'s\n    rich history and culture.\n  </Text.base>\n</Border>\n')),"\n",o.createElement(n.h3,{id:"shades-of-style"},o.createElement(n.a,{href:"#shades-of-style"},"Shades of Style")),"\n",o.createElement(n.p,null,"Experiment with different shades to achieve the perfect border color that aligns with your app's visual identity.\nUse the ",o.createElement(t,null,"shade")," attribute, ranging from 50 to 950 for lighter to darker shades, to ensure aesthetic harmony."),"\n",o.createElement(n.pre,null,o.createElement(n.code,{className:"language-jsx"},"<Border shade={700}>\n  <Text.h5>The Great Wall of China</Text.h5>\n  <Text.base>\n    One of the most iconic and awe-inspiring structures on Earth, the Great Wall of China spans approximately 13,171\n    miles (21,196 kilometers). Contrary to popular belief, it is not a single continuous wall but a collection of walls\n    and fortifications built over centuries by various Chinese dynasties. Its main purpose was to protect against\n    invasions by nomadic tribes from the north. This incredible feat of engineering showcases the determination and\n    ingenuity of ancient Chinese civilization. Today, it stands as a UNESCO World Heritage Site and a symbol of China's\n    rich history and culture.\n  </Text.base>\n</Border>\n")),"\n",o.createElement(n.h3,{id:"creative-variants"},o.createElement(n.a,{href:"#creative-variants"},"Creative Variants")),"\n",o.createElement(n.p,null,"Inject character into your UI by exploring border variants like dashed or dotted styles.\nCustomize your design by setting the ",o.createElement(t,null,"variant")," attribute to achieve distinctive border styles."),"\n",o.createElement(n.pre,null,o.createElement(n.code,{className:"language-jsx"},'<Border variant="double" density="8px">\n  <Text.h5>The Great Wall of China</Text.h5>\n  <Text.base>\n    One of the most iconic and awe-inspiring structures on Earth, the Great Wall of China spans approximately 13,171\n    miles (21,196 kilometers). Contrary to popular belief, it is not a single continuous wall but a collection of walls\n    and fortifications built over centuries by various Chinese dynasties. Its main purpose was to protect against\n    invasions by nomadic tribes from the north. This incredible feat of engineering showcases the determination and\n    ingenuity of ancient Chinese civilization. Today, it stands as a UNESCO World Heritage Site and a symbol of China\'s\n    rich history and culture.\n  </Text.base>\n</Border>\n')),"\n",o.createElement(n.h2,{id:"props"},o.createElement(n.a,{href:"#props"},"Props")),"\n",o.createElement(a,{component:"border"}))}var s=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?o.createElement(n,e,o.createElement(r,e)):r(e)};function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var c,u=t(5357),h=t(7566),d=t(4736);const m=u.styled.div(c||(c=(0,a.Z)(["\n  padding: 0 0 4rem 0;\n"]))),p=e=>{let{children:n,...t}=e;const{pageContext:{frontmatter:a,slug:r},path:s}=t,{description:l,title:c}=a;return o.createElement(d.MdDoc,{path:s,slug:r},o.createElement(m,null,o.createElement(u.Text.h2,{bld:!0,margin:"2rem 0"},c),o.createElement(u.Text.base,{style:{lineHeight:1.8}},o.createElement("blockquote",null,l)),o.createElement(i.Zo,{components:h.dA},n)))};function f(e){return o.createElement(p,e,o.createElement(s,e))}},1151:function(e,n,t){t.d(n,{Zo:function(){return s},ah:function(){return o}});var a=t(7294);const i=a.createContext({});function o(e){const n=a.useContext(i);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||r:o(e),a.createElement(i.Provider,{value:s},n)}}}]);
//# sourceMappingURL=component---src-templates-doc-jsx-content-file-path-content-components-border-mdx-e7f24afba8653a770df2.js.map