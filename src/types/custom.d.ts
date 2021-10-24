// this file is needed to properly import *.png, *.css files into typescript files

declare module "*.png" {
  const value: bytes;
  export = value;
}

declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}