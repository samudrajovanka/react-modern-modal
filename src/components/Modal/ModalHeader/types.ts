type TitlePosition = 'top' | 'bottom';
type Align = 'start' | 'center';

export type ModalHeaderProps = {
  /**
   * The content of the modal header
   */
  children: React.ReactNode | string;
  /**
   * The position of the title
   * @type top | bottom
   * @default bottom
   */
  titlePosition?: TitlePosition;
  /**
   * Attribute for align the title
   * @type start | center
   */
  align?: Align;
  /**
   * Attribute to make the title is regular font weight (400)
   */
  isRegular?: boolean;
  /**
   * Attribute to add your own class name
   */
  className?: string;
  /**
   * Attribute to add your own style
   */
  style?: React.CSSProperties;
};
