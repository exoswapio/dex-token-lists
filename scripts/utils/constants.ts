import packageJSON from "../../package.json";

export const PROJECT_NAME = "exoswap";
export const REPO_PATH = "exoswapio/dex-token-lists";
export const VERSION_DESTRUCTED = packageJSON.version.split(".");
export const RELEASE_VERSION = `v${packageJSON.version}`;
export const TOKEN_LIST_NAME = packageJSON.description;
