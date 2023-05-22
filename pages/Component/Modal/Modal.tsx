import { useCallback } from 'react'
import { Modal as AModal, ModalProps } from 'antd'

const Modal = (props: ModalProps) => {
  const afterOpenChange = useCallback((visible: boolean) => {
    if (typeof window !== 'undefined') {
      if (visible) {
        document.documentElement.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = 'auto'
      }
    }
  }, [])

  return <AModal {...props} afterOpenChange={afterOpenChange} />
}

export default Modal
