import ReactModal from "react-modal";

interface NewTransactionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionsModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionsModalProps) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Cadastrar Transação</h2>
    </ReactModal>
  );
};
