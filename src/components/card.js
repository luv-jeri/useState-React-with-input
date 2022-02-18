import axios from 'axios';

export default function card() {
  const getData = async () => {
    const { data } = await axios.get(
      'https://reqres.in/api/users?page=2'
    );
    console.log(data.data);
  };

  getData();
  return <div>card</div>;
}
