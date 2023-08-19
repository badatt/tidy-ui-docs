/**
 * MDX frontmatter
 */
export interface IMdxFrontmatter {
  class?: string;
  component?: string;
  description?: string;
  lib?: string;
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

export interface IMdxFields {
  breadcrumb?: IBreadcrumbField[];
  component?: string;
  pageSourcePath?: string;
  slug?: string;
  timeToRead?: ITimeToRead;
}

/**
 * markdown & md remote assets
 */
export interface IMdRemoteAsset {
  category?: string;
  reference?: string;
  title?: string;
  type?: string;
  url?: string;
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
  siteMetadata?: ISiteMetaData;
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
