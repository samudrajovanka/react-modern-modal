type FooterJustify = 'start' | 'center' | 'end';

export type ModalFooterProps = {
  /**
   * The content of the modal footer
   */
  children: React.ReactNode;
  /**
   * The position of the footer content
   * @type start | center | end
   * @default end
   */
  justify?: FooterJustify;
  /**
   * Attribute to add your own class name
   */
  className?: string;
  /**
   * Attribute to add your own style
   */
  style?: React.CSSProperties;
};
