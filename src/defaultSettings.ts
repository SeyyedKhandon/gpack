export interface GeneralObject {
  [index: string]: string | number | boolean | GeneralObject;
}

export const defaultSettings = {
  "conventionalCommits.lineBreak": "\\n",
};
