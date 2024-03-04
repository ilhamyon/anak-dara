import { Button, Input, Select, message } from "antd"
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
    telepon: ''
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
        telepon: ''
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
                className="mb-8 border"
                value={formData.alamat}
                onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                required
              />
              <Input
                type="number"
                name="telepon"
                placeholder="Telepon"
                size="large"
                className="mb-8 border"
                value={formData.telepon}
                onChange={(e) => setFormData({ ...formData, telepon: e.target.value })}
                required
              />
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