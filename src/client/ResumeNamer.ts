import packageJSON from '../../package.json';

export function getResumeName(): string {
  return `Resume v${packageJSON.version}`;
}
