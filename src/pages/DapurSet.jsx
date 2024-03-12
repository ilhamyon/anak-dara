import BG from "../assets/bg-dapur.jpg"
import Kompor from "../assets/kompor.png"
import AirHangat from "../assets/air-hangat.png"
import TempatSampah from "../assets/tempat-sampah.png"
import MakananKemasan from "../assets/makanan-kemasan.png"
import Pisau from "../assets/pisau.png"
import { useState } from "react"
import { Button, Modal } from "antd"
import { Link } from "react-router-dom"
import VideoMateriKompor from "../assets/Materi Kompor.mp4"
import VideoMateriMakananKemasan from "../assets/Materi makanan kemasan.mp4"
import VideoMateriPisau from "../assets/Materi Pisau.mp4"
import VideoMateriAirPanas from "../assets/Materi air panas.mp4"

function DapurSet() {
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
      <section className="relative w-[480px] h-[768px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${BG})`}}>
        <div className="absolute mt-[160px] ml-10 cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("Kompor")} src={Kompor} />
        </div>
        <div className="absolute mt-[134px] ml-60 cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("AirHangat")} src={AirHangat} />
        </div>
        <div className="absolute mt-[266px] ml-[5px] cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("TempatSampah")} src={TempatSampah} />
        </div>
        <div className="absolute mt-[545px] ml-[250px] cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("MakananKemasan")} src={MakananKemasan} />
        </div>
        <div className="absolute mt-[540px] opacity-80 ml-[110px] cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("Pisau")} src={Pisau} />
        </div>
        <div className="absolute bottom-2 right-0 mr-4 hover:drop-shadow-4xl">
          <Link to="/beranda">
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 36 36"><path fill="currentColor" d="M33 19a1 1 0 0 1-.71-.29L18 4.41L3.71 18.71A1 1 0 0 1 2.3 17.3l15-15a1 1 0 0 1 1.41 0l15 15A1 1 0 0 1 33 19" className="clr-i-solid clr-i-solid-path-1"/><path fill="currentColor" d="M18 7.79L6 19.83V32a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76Z" className="clr-i-solid clr-i-solid-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>
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
          {modalContentId === "Kompor" &&
            <div>
              <div className="flex justify-center px-4">
                  <video width="100%" height="auto" controls>
                      <source src={VideoMateriKompor} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
              </div>
            </div>
          }

          {modalContentId === "AirHangat" &&
            <div>
              <div className="flex justify-center px-4">
                  <video width="100%" height="auto" controls>
                      <source src={VideoMateriAirPanas} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
              </div>
            </div>
          }

          {modalContentId === "MakananKemasan" &&
            <div>
              <div className="flex justify-center px-4">
                  <video width="100%" height="auto" controls>
                      <source src={VideoMateriMakananKemasan} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
              </div>
            </div>
          }

          {modalContentId === "TempatSampah" &&
            <div>
              Materi Tempat Sampah
            </div>
          }

          {modalContentId === "Pisau" &&
            <div>
              <div className="flex justify-center px-4">
                  <video width="100%" height="auto" controls>
                      <source src={VideoMateriPisau} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
              </div>
            </div>
          }
        </div>
      </Modal>
    </div>
  )
}

export default DapurSet