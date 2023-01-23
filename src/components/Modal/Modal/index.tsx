import React, { useCallback, useEffect, useRef } from 'react';
import cx from 'classnames';

import CloseIcon from '../../Icon/Close';
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
}) => {
  const modalContentRef = useRef<HTMLDivElement | null>(null);
  const scrollBehaviourClassname = scrollBehaviour !== 'none'
    ? `modal__container--scroll-${scrollBehaviour}`
    : undefined;

  const handleKeyEscapeDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, []);

  useEffect(() => {
    if (isOpen && !preventClose) {
      document.addEventListener('keydown', handleKeyEscapeDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyEscapeDown);
    };
  }, [isOpen, preventClose]);

  useEffect(() => {
    if (preventClose) return;

    const handler = (event: Event) => {
      if (!modalContentRef.current) {
        return;
      }

      if (!modalContentRef.current.contains(event!.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('click', handler, true);
    return () => {
      document.removeEventListener('click', handler, true);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <section
      className={cx('modal', className)}
      data-no-close={noCloseButton}
      data-open={isOpen}
      data-no-padding={noPadding}
      style={style}
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
