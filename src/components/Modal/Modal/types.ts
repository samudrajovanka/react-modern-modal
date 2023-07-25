type ModalSize = 'sm' | 'md' | 'lg' | 'fullscreen';
type ModalPosition = 'top' | 'center';
type ScrollBehaviour = 'none' | 'inside' | 'outside';

export type ModalProps = {
  /**
   * The content of the modal
   */
  children: React.ReactNode;
  /**
   * State to control view the modal
   * @default false
   */
  isOpen: boolean;
  /**
   * Event to close the modal
   */
  onClose: () => void;
  /**
   * The size of the modal
   * @type sm | md | lg | fullscreen
   * @default md
   */
  size?: ModalSize;
  /**
   * The position of the modal from window
   * @type top | center
   * @default center
   */
  position?: ModalPosition;
  /**
   * Attribute to hide the close button
   * @default false
   */
  noCloseButton?: boolean;
  /**
   * Attribute to make the backdrop modal blured
   * @default false
   */
  backdropBlur?: boolean;
  /**
   * Attribute to change color of backdrop overlay
   */
  backdropColor?: string;
  /**
   * Attribute to prevent close the modal from backdrop click and esc key
   * @default false
   */
  preventClose?: boolean;
  /**
   * Attribute to change the scroll behaviour of the modal
   * @type none | inside | outside
   * @default none
   */
  scrollBehaviour?: ScrollBehaviour;
  /**
   * Attribute to remove the padding of the modal
   * @default false
   */
  noPadding?: boolean;
  /**
   * Attribute to add your own class name
   */
  className?: string;
  /**
   * Attribute to add your own id
   */
  id?: string;
  /**
   * Attribute to add your own style
   */
  style?: React.CSSProperties;
  /**
   * Add your custom close button
   * @type ({ onClose }) => ReactNode
   */
  closeButton?: ({ onClose }: { onClose: () => void }) => React.ReactNode;
};
