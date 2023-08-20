const { readFileSync } = require(`fs-extra`);
const {
  TextVariant,
  StackOrder,
  StackJustify,
  StackAlign,
  InputVariant,
  JustifyContent,
  AlignSelf,
  AlignItems,
  AlignContent,
  FlexDirection,
  Density,
  ButtonVariant,
  Status,
  Screen,
  Tone,
  Girth,
  BorderStyle,
  Positioning,
  Direction,
  Shade,
} = require(`@tidy-ui/types`);
const _ = require(`lodash`);

const parseDoc = (jsdoc) => {
  try {
    return JSON.parse(jsdoc !== undefined ? readFileSync(jsdoc, 'utf8') : []);
  } catch (e) {
    return [];
  }
};

const getInterfaces = (docs) => {
  return docs
    .filter((d) => d.kind === 'interface' && d.access === 'public')
    .map((v) => {
      return {
        description: v.description,
        name: v.longname,
        since: v.since,
      };
    })
    .value();
};

const allowedTypeValues = (type) => {
  switch (type) {
    case 'TStatus':
      return Object.values(Status).filter((i) => isNaN(Number(i)));
    case 'TScreen':
      return Object.values(Screen).filter((i) => isNaN(Number(i)));
    case 'TTone':
      return Object.values(Tone).filter((i) => isNaN(Number(i)));
    case 'TGirth':
      return Object.values(Girth).filter((i) => isNaN(Number(i)));
    case 'TAccent':
      return Object.values(Tone).filter((i) => isNaN(Number(i)));
    case 'TBorderStyle':
      return Object.values(BorderStyle).filter((i) => isNaN(Number(i)));
    case 'TPositioning':
      return Object.values(Positioning).filter((i) => isNaN(Number(i)));
    case 'TDirection':
      return Object.values(Direction).filter((i) => isNaN(Number(i)));
    case 'TButtonVariant':
      return Object.values(ButtonVariant).filter((i) => isNaN(Number(i)));
    case 'TDensity':
      return Object.values(Density).filter((i) => isNaN(Number(i)));
    case 'TFlexDirection':
      return Object.values(FlexDirection).filter((i) => isNaN(Number(i)));
    case 'TAlignContent':
      return Object.values(AlignContent).filter((i) => isNaN(Number(i)));
    case 'TAlignItems':
      return Object.values(AlignItems).filter((i) => isNaN(Number(i)));
    case 'TAlignSelf':
      return Object.values(AlignSelf).filter((i) => isNaN(Number(i)));
    case 'TJustifyContent':
      return Object.values(JustifyContent).filter((i) => isNaN(Number(i)));
    case 'TInputVariant':
      return Object.values(InputVariant).filter((i) => isNaN(Number(i)));
    case 'TStackAlign':
      return Object.values(StackAlign).filter((i) => isNaN(Number(i)));
    case 'TStackJustify':
      return Object.values(StackJustify).filter((i) => isNaN(Number(i)));
    case 'TStackOrder':
      return Object.values(StackOrder).filter((i) => isNaN(Number(i)));
    case 'TTextVariant':
      return Object.values(TextVariant).filter((i) => isNaN(Number(i)));
    case 'TShade':
      return Shade;
    default:
      return type;
  }
};

const typeResolver = (types) => {
  const resolvedTypes = [];
  for (const type of types) {
    resolvedTypes.push(allowedTypeValues(type));
  }
  return _.flattenDeep(resolvedTypes).join(' | ');
};

const getMembers = (docs, i) => {
  const members = docs
    .filter((d) => d.kind === 'member' && d.access === 'public' && d.memberof === i.name)
    .map((v) => {
      return {
        defaultValue: v.defaultvalue,
        description: v.description,
        name: v.name,
        nullable: v.nullable,
        optional: v.optional,
        since: v.since,
        types: typeResolver(v.type.names),
      };
    })
    .value();
  return members;
};

module.exports = (component) => {
  const jsdoc = component != null ? require.resolve(`@tidy-ui/${component}/jsdoc.json`) : undefined;
  const content = parseDoc(jsdoc);
  const chainedDoc = _.chain(content);
  const interfaces = getInterfaces(chainedDoc);
  for (let inter of interfaces) {
    inter.members = getMembers(chainedDoc, inter);
  }
  return interfaces;
};
