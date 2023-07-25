import React, { useCallback, useEffect, useRef } from 'react';
import cx from 'classnames';

import CloseIcon from '../../Icon/Close';
import { randomId } from '../../../lib/randomId';

import { ModalProps } from './types';

import './styles.css';

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  size = 'md',
  position = 'center',
  noCloseButton,
  backdropColor,
  backdropBlur,
  preventClose,
  scrollBehaviour = 'none',
  noPadding,
  closeButton,
  className,
  style,
  id,
}) => {
  const modalContentRef = useRef<HTMLDivElement | null>(null);
  const scrollBehaviourClassname =
    scrollBehaviour !== 'none'
      ? `modal__container--scroll-${scrollBehaviour}`
      : undefined;
  const uniqueId = useRef(randomId());

  /**
   * Focus the current modal when it is opened and focus the previous modal when it is closed.
   */
  useEffect(() => {
    const modals = document.querySelectorAll('.modal[data-unique-id]');

    if (modals.length === 0) return;

    if (modals.length === 1) {
      (modals[0] as HTMLElement).focus();

      return () => {
        (modals[0] as HTMLElement).blur();
      };
    }

    if (!isOpen) {
      const currentModal = modals[modals.length - 1] as HTMLElement;
      currentModal.focus();

      return () => {
        currentModal.blur();
      };
    }

    let currentModal: HTMLElement | null = null;
    for (let idx = 0; idx < modals.length; idx++) {
      const modal = modals[idx];
      if (modal.getAttribute('data-unique-id') === uniqueId.current) {
        currentModal = modal as HTMLElement;
        break;
      }
    }

    if (!currentModal) return;

    currentModal.focus();

    return () => {
      currentModal?.blur();
    };
  }, [isOpen]);

  /**
   * Close the modal when the user presses the Escape key.
   */
  const handleKeyEscapeDown = useCallback(
    (event: React.KeyboardEvent) => {
      event.stopPropagation();

      if (isOpen && preventClose) return;

      if (event.key === 'Escape') {
        onClose();
      }
    },
    [isOpen, preventClose, onClose]
  );

  /**
   * Close the modal when the user clicks outside the modal.
   */
  const handleModalClick = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();

      if (!modalContentRef.current || (isOpen && preventClose)) return;

      if (!modalContentRef.current.contains(event!.target as Node)) {
        onClose();
      }
    },
    [isOpen, onClose, modalContentRef, preventClose]
  );

  if (!isOpen) {
    return null;
  }

  return (
    <section
      onClick={handleModalClick}
      onKeyDown={handleKeyEscapeDown}
      tabIndex={-1}
      className={cx('modal', className)}
      data-no-close={noCloseButton}
      data-open={isOpen}
      data-no-padding={noPadding}
      data-unique-id={uniqueId.current}
      style={style}
      id={id}
    >
      <div
        className={cx('modal__overlay', {
          'modal__overlay--blur': backdropBlur,
        })}
        style={{
          backgroundColor: backdropColor,
        }}
      />

      <div className={cx('modal__container', scrollBehaviourClassname)}>
        <div
          ref={modalContentRef}
          className={`modal__content modal__content--${size} modal__content--${position}`}
        >
          {!noCloseButton && (
            <>
              {closeButton && (
                <div className="modal__close-button--position">
                  {closeButton({ onClose })}
                </div>
              )}

              {!closeButton && (
                <button
                  type="button"
                  className="modal__close-button modal__close-button--position"
                  aria-label="close button"
                  onClick={onClose}
                >
                  <CloseIcon />
                </button>
              )}
            </>
          )}

          {children}
        </div>
      </div>
    </section>
  );
};

export default Modal;
