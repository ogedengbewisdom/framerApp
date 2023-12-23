import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

const variantsObj = {
  hidden: {opacity: 0, y: 40},
  vissible: {opacity: 1, y: 0},
}

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        variants={variantsObj}
        initial= "hidden"
        animate= "vissible"
        exit= "hidden"
        transition= "duration"
        open className="modal">
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
