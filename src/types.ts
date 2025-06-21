/**
 * MDX frontmatter
 */
export interface IMdxFrontmatter {
  class?: string;
  component?: string;
  description?: string;
  lib?: string;
  status?: string;
  title?: string;
}

export interface IBreadcrumbField {
  name?: string;
  path?: string;
}

export interface ITimeToRead {
  minutes?: number;
  text?: string;
  time?: number;
  words?: number;
}

export interface IComponentInterface {
  description?: string;
  members?: IComponentInterfaceMember[];
  name?: string;
  since?: string;
}

export interface IComponentInterfaceMember {
  defaultValue?: string;
  description?: string;
  name?: string;
  nullable?: boolean;
  optional?: boolean;
  since?: string;
  types?: string;
}

export interface IMdxFields {
  breadcrumb?: IBreadcrumbField[];
  component?: string;
  componentInterfaces: IComponentInterface[];
  pageSourcePath?: string;
  slug?: string;
  timeToRead?: ITimeToRead;
}

/**
 * markdown & md remote assets
 */
export interface IMdFrontMatter {
  id: string;
  type: string;
  category: string;
  reference?: string;
  title?: string;
  url?: string;
  description?: string;
}

export interface IPublicUrl {
  publicURL?: string;
}

export interface IRemoteAsset {
  remote?: IPublicUrl;
}

/**
 * gatsby-config site data
 */
export interface ISite {
  siteMetadata: ISiteMetaData;
}

export interface ISiteMetaData {
  author?: IAuthor;
  description?: string;
  docs?: IDocs;
  npmJs?: INpmJS;
  siteUrl?: string;
  source?: ISource;
  title?: string;
}

export interface IAuthor {
  email?: string;
  name?: string;
  github?: string;
  githubUsername?: string;
  linkedin?: string;
  url?: string;
}

export interface IDocs {
  contentPath?: string;
  githubLink?: string;
}

export interface INpmJS {
  packageBaseUrl?: string;
}

export interface ISource {
  githubLink?: string;
  packagesPath?: string;
}
