import BG from "../assets/bg-ruang-keluarga.jpg"
import LemariBarang from "../assets/lemari-barang.png"
import MainanAnak from "../assets/mainan.png"
import KotakObat from "../assets/kotak-obat.png"
import Colokan from "../assets/colokan.png"
import Tangga from "../assets/tangga.png"
import { useState } from "react"
import { Button, Modal } from "antd"
import { Link } from "react-router-dom"

function RuangKeluargaSet() {
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
      <section className="relative w-[390px] h-[915px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${BG})`}}>
        <div className="absolute mt-[154px] ml-44 cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("LemariBarang")} src={LemariBarang} />
        </div>
        <div className="absolute mt-[300px] ml-8 cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("MainanAnak")} src={MainanAnak} />
        </div>
        <div className="absolute mt-[108px] ml-[200px] cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("KotakObat")} src={KotakObat} />
        </div>
        <div className="absolute mt-[500px] ml-[207px] cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("Colokan")} src={Colokan} />
        </div>
        <div className="absolute mt-[548px] opacity-80 cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("Tangga")} src={Tangga} />
        </div>
        <div className="absolute bottom-0 ml-4 hover:drop-shadow-4xl">
          <Link to="/kamar-mandi">
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 512 512"><path fill="currentColor" d="M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22v72h288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H192v72c0 9.6-5.7 18.2-14.5 22"/></svg>
          </Link>
        </div>
        <div className="absolute bottom-0 right-0 mr-4 hover:drop-shadow-4xl">
          <Link to="/dapur">
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
          {modalContentId === "LemariBarang" &&
            <div>
              Materi Lemari Barang
            </div>
          }

          {modalContentId === "MainanAnak" &&
            <div>
              Materi Mainan Anak
            </div>
          }

          {modalContentId === "Colokan" &&
            <div>
              Materi Colokan
            </div>
          }

          {modalContentId === "KotakObat" &&
            <div>
              Materi Kotak Obat
            </div>
          }

          {modalContentId === "Tangga" &&
            <div>
              Materi Tangga
            </div>
          }
        </div>
      </Modal>
    </div>
  )
}

export default RuangKeluargaSet