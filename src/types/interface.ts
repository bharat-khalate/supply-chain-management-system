export interface FieldConstant {
  label: string;
  min?: number;
  max?: number;
  length: number;
}


export interface IConfirmDialogue {
  title: string;
  message: string;
  button1Text: string;
  button2Text: string;
  show: boolean;
  button1Action: () => void;
  button2Action: () => void;
}


export interface IDeleteDialogue {
  render?: () => React.HTMLElementType
  show: boolean;
  deleteAction: () => void;
  cancelAction: () => void;
}