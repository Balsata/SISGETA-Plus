import React, { useState } from "react";
import ContactForm from "../components/ContactForm.jsx";
import Header from "../components/Header.jsx";
import LayoutModal from "../components/LayoutModal.jsx";
import UserInformation from "../components/UserInformation.jsx";

const Contact = () => {
  const [modalUserData, setModalUserData] = useState({
    user: null,
    isOpen: false,
  });

  const handleSendContact = (user) => {
    setModalUserData({
      user,
      isOpen: true,
    });
  };

  return (
    <React.Fragment>
      <Header />

      {modalUserData.isOpen ? (
        <LayoutModal
          title="Se envió correctamente su mensaje"
          show={true}
          handleChangeStatusModal={() =>
            setModalUserData({ isOpen: false, user: null })
          }
        >
          <UserInformation user={modalUserData.user} />
        </LayoutModal>
      ) : null}

      <ContactForm handleSendContact={handleSendContact} />
    </React.Fragment>
  );
};

export default Contact;
