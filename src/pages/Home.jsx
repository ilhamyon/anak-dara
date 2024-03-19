import { Button, Input, Radio, Select, message } from "antd"
import Hero from "../assets/hero-anak-dara.jpg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const createSanityUser = async (userData) => {
  try {
    const response = await fetch(`https://ln9ujpru.api.sanity.io/v2021-03-25/data/mutate/production`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer skAdQo8vEzaH81Ah4n2X8QDNsgIfdWkJlLmbo3CbT6Nt3nW7iTLx2roYCOm9Rlp1mQV2nEEGCqf4aGSMaJx67iK5PZPe7CgmI9Lx9diRdq0ssoRzl1LhiUFXHQmKu0utxgBa1ttoKwat3KIFt2B5vskrT82ekR5B8sbSzE51VjZHy3T7Q62P`,
      },
      body: JSON.stringify({
        mutations: [
          {
            create: {
              _type: 'user-anak-dara', // Ganti dengan jenis dokumen pengguna di Sanity Anda
              name: userData.name,
              umur: userData.umur,
              gender: userData.gender,
              alamat: userData.alamat,
              telepon: userData.telepon,
              question1: userData.question1,
              question2: userData.question2,
              question3: userData.question3,
            },
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create user in Sanity');
    }

    const data = await response.json();
    console.log('User created:', data);
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

function Home() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    umur: '',
    gender: 'Jenis kelamin',
    alamat: '',
    telepon: '',
    question1: '',
    question2: '',
    question3: ''
  });

  console.log(formData);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      // Send POST request to your Sanity backend to create a new user
      await createSanityUser(formData);

      message.success("Berhasil isi identitas.")
      navigate("/beranda")

      // Reset the form after successful registration
      setFormData({
        name: '',
        umur: '',
        gender: '',
        alamat: '',
        telepon: '',
        question1: '',
        question2: '',
        question3: ''
      });
    } catch (error) {
      console.error('Error registering user:', error);
    }
  }
  return (
    <div className="my-0 mx-auto min-h-full max-w-screen-sm" style={{maxWidth: "480px"}}>
      <section id="hero">
        <a href="#identitas">
          <img src={Hero} />
        </a>
      </section>

      <section id="identitas" className="bg-[#c7d5d5] h-screen flex flex-col items-center justify-center">
        <div className="py-20 px-10">
          <form className="w-full items-center" onSubmit={handleSubmit}>
              <h2 className="font-bold text-3xl lg:text-4xl mb-10 text-white text-center uppercase">Isi Identitas Diri</h2>
              <Input
                type="text"
                name="name"
                placeholder="Nama"
                size="large"
                className="mb-4 border"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                type="text"
                name="umur"
                placeholder="Umur"
                size="large"
                className="mb-4 border"
                value={formData.umur}
                onChange={(e) => setFormData({ ...formData, umur: e.target.value })}
                required
              />
              <Select
                defaultValue="Laki-laki"
                name="gender"
                size="large"
                className="mb-4 w-full"
                placeholder="Jenis Kelamin"
                required
                value={formData.gender}
                onChange={(value) => setFormData({ ...formData, gender: value })}
              >
                <Option value="Laki-laki">Laki-laki</Option>
                <Option value="Perempuan">Perempuan</Option>
              </Select>
              <Input
                type="text"
                name="alamat"
                placeholder="Alamat"
                size="large"
                className="mb-4 border"
                value={formData.alamat}
                onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                required
              />
              <Input
                type="number"
                name="telepon"
                placeholder="Telepon"
                size="large"
                className="mb-4 border"
                value={formData.telepon}
                onChange={(e) => setFormData({ ...formData, telepon: e.target.value })}
                required
              />

              <div className="mb-4 flex flex-col gap-1">
                <label className="text-gray-700">1. Apakah kamu pernah menolong teman yang terjatuh/ terluka?</label>
                <Radio.Group
                  value={formData.question1}
                  onChange={(e) => setFormData({ ...formData, question1: e.target.value })}
                >
                    <Radio value={true}>Ya</Radio>
                    <Radio value={false}>Tidak</Radio>
                </Radio.Group>
              </div>

              <div className="mb-4 flex flex-col gap-1">
                <label className="text-gray-700">2. Apakah kamu pernah mengingatkan teman untuk berhati - hati?</label>
                <Radio.Group
                  value={formData.question2}
                  onChange={(e) => setFormData({ ...formData, question2: e.target.value })}
                >
                    <Radio value={true}>Ya</Radio>
                    <Radio value={false}>Tidak</Radio>
                </Radio.Group>
              </div>

              <div className="mb-8 flex flex-col gap-1">
                <label className="text-gray-700">3. Apakah kamu mengetahui pertolongan pertama pada cedera?</label>
                <Radio.Group
                  value={formData.question3}
                  onChange={(e) => setFormData({ ...formData, question3: e.target.value })}
                >
                    <Radio value={true}>Ya</Radio>
                    <Radio value={false}>Tidak</Radio>
                </Radio.Group>
              </div>

              <Button
                className="text-white bg-[#9b6146] w-full"
                htmlType="submit"
                size="large"
              >
                Submit
              </Button>
            </form>
        </div>
      </section>
    </div>
  )
}

export default Home