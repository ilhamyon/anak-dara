import BG from "../assets/bg-wc.jpg"
import LantaiBasah from "../assets/lantai-basah.png"
import MesinCuci from "../assets/mesin-cuci.png"
import SabunLantai from "../assets/sabun-lantai.png"
import Botol from "../assets/botol.png"
import LantaiRusak from "../assets/lantai-rusak.png"
import { useState } from "react"
import { Button, Modal } from "antd"
import { Link } from "react-router-dom"

function WcSet() {
  const [visible, setVisible] = useState(false);
  const [modalContentId, setModalContentId] = useState(null);

  const handleOpenModal = (id) => {
    setModalContentId(id);
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
    setModalContentId(null); // Reset modal content id when modal is closed
  };
  return (
    <div className="my-0 mx-auto min-h-full w-full flex justify-center max-w-screen-sm" style={{maxWidth: "480px"}}>
      <section className="relative w-[390px] h-[768px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${BG})`}}>
        <div className="absolute mt-80 ml-44 cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("LantaiBasah")} src={LantaiBasah} />
        </div>
        <div className="absolute mt-[530px] ml-4 cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("MesinCuci")} src={MesinCuci} />
        </div>
        <div className="absolute mt-[446px] ml-[200px] cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("SabunLantai")} src={SabunLantai} />
        </div>
        <div className="absolute mt-[491px] ml-[357px] cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("Botol")} src={Botol} />
        </div>
        <div className="absolute mt-[708px] opacity-80 ml-[290px] cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("LantaiRusak")} src={LantaiRusak} />
        </div>
        <div className="absolute bottom-0 ml-4 hover:drop-shadow-4xl">
          <Link to="/ruang-keluarga">
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 512 512"><path fill="currentColor" d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6S320 110.5 320 120v72H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h288v72c0 9.6 5.7 18.2 14.5 22"/></svg>
          </Link>
        </div>
      </section>
      <Modal
        title=""
        visible={visible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="cancel" onClick={handleCloseModal}>
            Tutup
          </Button>
        ]}
      >
        <div className="mt-6">
          {modalContentId === "LantaiBasah" &&
            <div>
              Materi Lantai Basah
            </div>
          }

          {modalContentId === "MesinCuci" &&
            <div>
              Materi Mesin Cuci
            </div>
          }

          {modalContentId === "Botol" &&
            <div>
              Materi Botol
            </div>
          }

          {modalContentId === "SabunLantai" &&
            <div>
              Materi Sabun Lantai
            </div>
          }

          {modalContentId === "LantaiRusak" &&
            <div>
              Materi Lantai Rusak
            </div>
          }
        </div>
      </Modal>
    </div>
  )
}

export default WcSet