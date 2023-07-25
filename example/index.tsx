import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '../src/index';

const Button = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="h-[44px] rounded-md bg-[#324dfc] text-white cursor-pointer px-3"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenNestedModal, setIsOpenNestedModal] = React.useState(false);
  const [isOpenThirdModal, setIsOpenThirdModal] = React.useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenNestedModal = () => {
    setIsOpenNestedModal(true);
  };

  const handleCloseNestedModal = () => {
    setIsOpenNestedModal(false);
  };

  const handleOpenThirdModal = () => {
    setIsOpenThirdModal(true);
  };

  const handleCloseThirdModal = () => {
    setIsOpenThirdModal(false);
  };

  const handleCloseAllModal = () => {
    setIsOpenThirdModal(false);
    setIsOpenNestedModal(false);
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpenModal}>Open modal</Button>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maxime sed
        qui nemo saepe aliquam sapiente voluptate nostrum in reprehenderit ea
        quia, commodi at expedita recusandae. Mollitia eligendi veniam quae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, soluta
        delectus? Distinctio nam excepturi labore facere eaque, quia consequatur
        repellendus quidem eum consectetur reprehenderit harum debitis nostrum
        vitae a fuga? Necessitatibus ipsam voluptate voluptatibus consectetur
        perferendis! Delectus deleniti animi id est similique sed voluptatibus
        distinctio, facere ipsum quasi, officiis quidem. Deleniti odio eius quo.
        Ut impedit maiores velit quasi officia? Enim quos dicta, asperiores
        doloremque, dolore pariatur veritatis mollitia nesciunt magnam, rem
        adipisci reiciendis molestiae voluptatum numquam quisquam recusandae
        voluptatem exercitationem? Saepe tempora delectus in! A accusantium
        totam sit nemo! Unde, perspiciatis. Recusandae saepe neque temporibus
        mollitia vero error repudiandae, dignissimos a aut numquam molestias,
        accusantium, voluptatibus magnam corporis iste? Est neque inventore
        consequuntur, eaque ut officia vitae maiores. Ad. Omnis sed accusantium
        vero esse quidem sequi ad ullam molestias laborum eum possimus accusamus
        odit quae laudantium error cupiditate dolores dicta facilis maxime
        architecto, facere dolorem quibusdam voluptatum. Fuga, modi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maxime sed
        qui nemo saepe aliquam sapiente voluptate nostrum in reprehenderit ea
        quia, commodi at expedita recusandae. Mollitia eligendi veniam quae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maxime sed
        qui nemo saepe aliquam sapiente voluptate nostrum in reprehenderit ea
        quia, commodi at expedita recusandae. Mollitia eligendi veniam quae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maxime sed
        qui nemo saepe aliquam sapiente voluptate nostrum in reprehenderit ea
        quia, commodi at expedita recusandae. Mollitia eligendi veniam quae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maxime sed
        qui nemo saepe aliquam sapiente voluptate nostrum in reprehenderit ea
        quia, commodi at expedita recusandae. Mollitia eligendi veniam quae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maxime sed
        qui nemo saepe aliquam sapiente voluptate nostrum in reprehenderit ea
        quia, commodi at expedita recusandae. Mollitia eligendi veniam quae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maxime sed
        qui nemo saepe aliquam sapiente voluptate nostrum in reprehenderit ea
        quia, commodi at expedita recusandae. Mollitia eligendi veniam quae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maxime sed
        qui nemo saepe aliquam sapiente voluptate nostrum in reprehenderit ea
        quia, commodi at expedita recusandae. Mollitia eligendi veniam quae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maxime sed
        qui nemo saepe aliquam sapiente voluptate nostrum in reprehenderit ea
        quia, commodi at expedita recusandae. Mollitia eligendi veniam quae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maxime sed
        qui nemo saepe aliquam sapiente voluptate nostrum in reprehenderit ea
        quia, commodi at expedita recusandae. Mollitia eligendi veniam quae.
      </p>

      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        noCloseButton
        // size="lg"
        // noPadding
        scrollBehaviour="inside"
        backdropBlur
        // backdropColor="rgba(252, 186, 3, 0.5)"
        // position="top"
        // preventClose
      >
        <ModalHeader titlePosition="top">
          <h5>Modal Title So Long Title Modal Long Tiitle Modal</h5>
        </ModalHeader>
        <ModalBody>
          consectetur adipisicing elit. Quasi tempore laboriosam voluptas enim
          ex totam aspernatur corrupti doloribus obcaecati eligendi, ea ipsam
          molestias sit ipsum itaque numquam voluptatum libero rerum. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore
          laboriosam voluptas enim ex totam aspernatur corrupti doloribus
          obcaecati eligendi, ea ipsam molestias sit ipsum itaque numquam
          voluptatum libero rerum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quasi tempore laboriosam voluptas enim ex totam
          aspernatur corrupti doloribus obcaecati eligendi, ea ipsam molestias
          sit ipsum itaque numquam voluptatum libero rerum. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quasi tempore laboriosam
          voluptas enim ex totam aspernatur corrupti doloribus obcaecati
          eligendi, ea ipsam molestias sit ipsum itaque numquam voluptatum
          libero rerum.
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleCloseModal}>Close</Button>
          <Button onClick={handleOpenNestedModal}>Add</Button>
        </ModalFooter>
      </Modal>

      <Modal
        isOpen={isOpenNestedModal}
        onClose={handleCloseNestedModal}
        noCloseButton
        scrollBehaviour="inside"
        backdropBlur
      >
        <ModalHeader titlePosition="top">
          <h5>Modal Nested</h5>
        </ModalHeader>
        <ModalBody>
          consectetur adipisicing elit. Quasi tempore laboriosam voluptas enim
          ex totam aspernatur corrupti doloribus obcaecati eligendi, ea ipsam
          molestias sit ipsum itaque numquam voluptatum libero rerum. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleCloseNestedModal}>Close</Button>
          <Button onClick={handleOpenThirdModal}>Add</Button>
        </ModalFooter>
      </Modal>

      <Modal
        isOpen={isOpenThirdModal}
        onClose={handleCloseThirdModal}
        scrollBehaviour="inside"
        backdropBlur
        size="lg"
        preventClose
      >
        <ModalHeader titlePosition="top">
          <h5>Modal Third Nested</h5>
        </ModalHeader>
        <ModalBody>
          consectetur adipisicing elit. Quasi tempore laboriosam voluptas enim
          ex totam aspernatur corrupti doloribus obcaecati eligendi, ea ipsam
          molestias sit ipsum itaque numquam voluptatum libero rerum. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleCloseThirdModal}>Close</Button>
          <Button onClick={handleCloseAllModal}>Add</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
